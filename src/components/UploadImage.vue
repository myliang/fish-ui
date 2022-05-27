<template>
  <div :class="['fish upload picture']">
    <div class="upload-trigger" @click="clickHandler" v-if="value.length < max && !readOnly" :style="pictureStyle">
      <input type="file" ref="input"
              @change="changeHandler"
              :multiple="multiple"
              :accept="accept"/>
      <i>+</i>
      <slot></slot>
    </div>
    <ul>
      <li v-for="(v, index) in value" :key="index"  :style="pictureStyle">
          <img :src="url(v)"/>
          <div class="info" @click="previewHandler(index)" :style="pictureStyle">
            <i @click.stop="removeFile(index)" v-if="!readOnly">&times;</i>
          </div>
      </li>
    </ul>
    <fish-modal :visible.sync="previewShow" title="Image Preview" attached="right">
      <div class="image"><img :src="previewUrl(value[previewIndex])" style="width: 100%;"/></div>
    </fish-modal>
  </div>
</template>
<script>
  import ajax from './ajax.js'
  import fishModal from './Modal.vue'
  import { notify } from '../config'

  export default {
    components: {fishModal},
    name: 'fish-upload-image',
    props: {
      value: { type: Array }, // ['', ]
      action: { type: String, required: true },
      multiple: { type: Boolean, default: false },
      accept: { type: String, default: '*/*' },
      withCredentials: { type: Boolean, default: false }, // http ..
      width: { type: String, default: '100px' },
      height: { type: String, default: '100px' },
      readOnly: { type: Boolean, default: false },
      url: { type: Function, default: (url) => url },
      previewUrl: { type: Function, default: (url) => url },
      max: { type: Number, default: 1 },
      preview: { type: Boolean, default: true },
      headers: { type: Object }, // http headers
      data: { type: Object }, // http data
      name: { type: String, default: 'file' },
      onStart: { type: Function, default: (file) => {} },
      onProgress: { type: Function, default: () => {} },
      onSuccess: { type: Function, default: () => {} },
      onError: { type: Function, default: () => {} },
      formatUrlFromResponse: { type: Function, default: (res) => res }
    },
    data () {
      return {
        previewShow: false,
        previewIndex: 0,
        reqs: {}
      }
    },
    computed: {
      pictureStyle () {
        return {
          width: this.width,
          height: this.height,
          lineHeight: this.height
        }
      }
    },
    methods: {
      removeFile (index) {
        this.emitChange(this.value.filter((f, i) => i !== index))
      },
      clickHandler () {
        if (this.value.length >= this.max) {
          this.$message.warning('已超出最大上传的数量')
        } else {
          this.$refs.input.click()
        }
      },
      previewHandler (index) {
        if (this.preview) {
          this.previewShow = true
          this.previewIndex = index
        }
      },
      changeHandler (evt) {
        if (this.reqs.length > 0) return
        let files = evt.target.files
        if (!files) return
        files = Array.from(files)
        if (!this.multiple) files = [files[0]]
        if (files.length <= 0) return

        files.forEach((file, index) => {
          this.upload(file, index)
        })
      },
      upload (file, index) {
        this.$refs.input.value = null
        this.post(file, index)
      },
      abort (file, id) {
        if (this.reqs[id]) {
          this.reqs[id].abort()
        }
      },
      post (file, id) {
        previewFile(file, (result) => { file._url = result })
        // console.log('file._url', file)
        const options = {
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onProgress: e => {
            this.onProgress(e, file)
          },
          onSuccess: res => {
            // console.log(res)
            delete this.reqs[id]
            const url = this.formatUrlFromResponse(res)
            this.onSuccess(res, file)
            let nValue = Array.from(this.value)
            nValue.push(url)
            this.emitChange(nValue)
          },
          onError: (err, res) => {
            file.state = 'error'
            this.onError(err, res, file)
            delete this.reqs[id]
          }
        }

        this.onStart(file)
        const req = ajax(options)
        this.reqs[id] = req
        if (req && req.then) {
          req.then(options.onSuccess, options.onError)
        }
      },
      emitChange (v) {
        this.$emit('change', v)
        notify.field.change(this)
      }
    }
  }

  const previewFile = (file, callback) => {
    const reader = new FileReader()
    reader.onloadend = () => callback(reader.result)
    reader.readAsDataURL(file)
  }
</script>
