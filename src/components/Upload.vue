<template>
  <div :class="['fish upload']">
    <slot name="content"/>
    <div class="upload-trigger" @click="clickHandler" :style="triggerStyle">
      <input type="file" ref="input"
        @change="changeHandler"
        :multiple="multiple"
        :accept="accept"/>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import ajax from './ajax.js'

  export default {
    name: 'fish-upload',
    props: {
      action: { type: String, required: true },
      multiple: { type: Boolean, default: false },
      accept: { type: String, default: '*/*' },
      withCredentials: { type: Boolean, default: false }, // http ..
      headers: { type: Object }, // http headers
      data: { type: Object }, // http data
      name: { type: String, default: 'file' },
      onStart: { type: Function, default: (file) => {} },
      onProgress: { type: Function, default: () => {} },
      onSuccess: { type: Function, default: () => {} },
      onError: { type: Function, default: () => {} },
      triggerStyle: { type: Object | String, default: () => '' }
    },
    data () {
      return {
        reqs: {}
      }
    },
    methods: {
      clickHandler () {
        this.$refs.input.click()
      },
      changeHandler (evt) {
        if (this.reqs.length > 0) return
        let files = evt.target.files
        // console.log('files:', evt.target.files)
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
            delete this.reqs[id]
            this.onSuccess(res, file)
          },
          onError: (err, res) => {
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
      }
    }
  }
</script>
