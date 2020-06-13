<template>
  <div>
    <div :class="['fish upload', type]">
      <div class="upload-select" @click="clickHandler" v-if="type === 'list' || type == ''">
        <input type="file" ref="input"
               @change="changeHandler"
               :multiple="multiple"
               :accept="accept"/>
        <slot></slot>
      </div>
      <ul>
        <li v-for="(file, index) in allFiles" :class="[file.state || 'done', `percent-${file.percent}`]" :key="index">
          <template v-if="type === 'picture'">
            <img :src="file._url || file.url" v-if="type === 'picture' && file.state !== 'progress'"/>
            <div class="info" @click="previewHandler(file)">
              <i @click.stop="removeFile(index)">&times;</i>
            </div>
          </template>
          <template v-else>
            {{ file.name }}
            <i class="close" @click.stop="removeFile(index)">&times;</i>
          </template>
        </li>
      </ul>
      <div class="upload-select" @click="clickHandler" v-if="type === 'picture'">
        <input type="file" ref="input"
               @change="changeHandler"
               :multiple="multiple"
               :accept="accept"/>
        <i>+</i>
        <slot></slot>
      </div>
      <fish-modal :visible.sync="previewShow" title="Image Preview">
        <div class="image"><img :src="previewUrl" style="width: 100%;"/></div>
      </fish-modal>
    </div>
  </div>
</template>
<script>
  import ajax from './ajax.js'
  import fishModal from './Modal.vue'
  import { notify } from '../config'

  export default {
    components: {fishModal},
    name: 'fish-upload',
    props: {
      value: { type: Array }, // [{name: '', url: '', state: '']]
      type: { type: String, default: 'list' }, // picture
      action: { type: String, required: true },
      multiple: { type: Boolean, default: false },
      accept: { type: String, default: '*/*' },
      maxSize: { type: Number, default: 5 * 1024 * 1024 },
      withCredentials: { type: Boolean, default: false }, // http ..
      preview: { type: Boolean, default: false },
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
        previewUrl: '',
        reqs: {},
        uploadingFiles: [] // 选择上传的文件列表
      }
    },
    computed: {
      allFiles () {
        if (this.type === 'picture') {
          return Array.from(this.value).concat(this.uploadingFiles)
        }
        return Array.from(this.uploadingFiles).concat(this.value)
      }
    },
    methods: {
      removeFile (index) {
        if (this.uploadingFiles.length > 0) {
          this.abort(this.uploadingFiles[index], index)
          this.uploadingFiles.splice(index, 1)
        }
        this.emitChange(this.value.filter((f, i) => i !== index))
      },
      clickHandler () {
        this.$refs.input.click()
      },
      previewHandler (file) {
        if (this.type === 'picture' && this.preview) {
          this.previewUrl = file.url
          this.previewShow = true
        }
      },
      changeHandler (evt) {
        if (this.reqs.length > 0) return
        let files = evt.target.files
        // console.log('files:', evt.target.files)
        if (!files) return
        files = Array.from(files)
        if (!this.multiple) files = [files[0]]
        if (files.length <= 0) return

        this.uploadingFiles = files
        files.forEach((file) => { file.state = 'progress' })
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
            file.percent = parseInt(e.percent)
            this.uploadingFiles.splice(id, 1, file)
            this.onProgress(e, file)
          },
          onSuccess: res => {
            // console.log(res)
            delete this.reqs[id]
            file.state = 'done'
            file.url = this.formatUrlFromResponse(res)
            this.uploadingFiles.splice(id, 1, file)
            this.onSuccess(res, file)
            if (Object.keys(this.reqs).length <= 0 && this.value) {
              let nValue = Array.from(this.value)
              this.uploadingFiles.forEach((f) => {
                if (f.state === 'done') {
                  nValue.push({name: f.name, url: f.url, _url: f._url})
                }
              })
              console.log(nValue)
              this.uploadingFiles = []
              this.emitChange(nValue)
            }
          },
          onError: (err, res) => {
            file.state = 'error'
            this.uploadingFiles.splice(id, 1, file)
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
        this.$emit('input', v)
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
