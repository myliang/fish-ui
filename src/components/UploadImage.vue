<template>
  <div :class="['fish upload picture']">
     <ul>
      <li v-for="(v, index) in value" :key="index"  :style="pictureStyle">
          <img :src="url(v)"/>
          <div class="info" @click="previewHandler(index)" :style="pictureStyle">
            <i @click.stop="removeFile(index)" v-if="!readOnly">&times;</i>
          </div>
      </li>
      <li class="upload-trigger" @click="clickHandler" v-if="value.length < max && !readOnly" :style="pictureStyle">
        <input type="file" ref="input"
                @change="changeHandler"
                :multiple="multiple"
                :accept="accept"/>
        <i>+</i>
        <slot></slot>
      </li>
    </ul>
    <fish-modal :visible.sync="previewShow" touchable title="Image Preview" attached="right" padding="0" width="800px" @close="closePreviewHandler">
      <div style="position: relative;">
        <ul class="image-toolbar">
          <li @click.stop="imageRepeatHandler"><i class="fa fa-repeat" aria-hidden="true"/></li>
          <li @click.stop="imageZoomHandler(0.25)"><i class="fa fa-plus" aria-hidden="true"/></li>
          <li @click.stop="imageZoomHandler(-0.25)"><i class="fa fa-minus" aria-hidden="true"/></li>
        </ul>
        <div class="image" @mousedown.stop.prevent="imageMousedownHandler" :style="`display: flex; justify-content: center; position: relative; overflow: hidden; width: 800px; height: ${previewImageHeight}px;`" ref="imageBox">
          <img :src="previewUrl(value[previewIndex])" ref="realImage" :style="`position: absolute; left: ${image.left}px; top: ${image.top}px; width: ${image.width}px; height: ${image.height}px; transform: scale(${1 + image.scale}) rotateZ(${image.rotate}deg);`"/>
        </div>
      </div>
      <slot name="preview" :item="value[previewIndex]" :index="previewIndex"/>
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
      previewImageHeight: { type: Number, default: 600 },
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
        image: {rotate: 0, scale: 1, height: 0, width: 0, left: 0, top: 0},
        imageMoving: false,
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
      imageMousedownHandler (evt) {
        const { image } = this
        let moving = false
        this.$refs.imageBox.onmousemove = (e) => {
          moving = true
          e.preventDefault()
          image.left += e.movementX
          image.top += e.movementY
          this.$refs.realImage.style.left = `${image.left}px`
          this.$refs.realImage.style.top = `${image.top}px`
        }
        this.$refs.imageBox.onmouseup = () => {
          this.$refs.imageBox.onmousemove = null
          this.$refs.imageBox.onmouseup = null
          if (!moving) {
            this.clickNextImage()
          }
          moving = false
        }
      },
      wheelHandler (evt) {
        const dir = evt.detail ? evt.detail * -120 : evt.wheelDelta
        this.imageZoomHandler(dir / 2000)
      },
      resetImage () {
        this.image = { rotate: 0, scale: 1, height: 0, width: 0, left: 0, top: 0 }
        this.initImage()
      },
      initImage () {
        const imgObj = new Image()
        imgObj.src = this.previewUrl(this.value[this.previewIndex])
        imgObj.onload = () => {
          const { width, height } = imgObj
          const whRatio = width / height
          const hwRatio = height / width
          const { clientHeight, clientWidth } = this.$refs.imageBox
          const { image } = this
          // console.log('clientHeight:', clienItHeight, clientWidth, width, height)
          if (width > height) {
            image.height = hwRatio * clientWidth
            if (image.height > clientHeight) {
              image.height = clientHeight
              image.width = whRatio * clientHeight
            } else {
              image.width = clientWidth
            }
            image.top = (clientHeight - image.height) / 2
            image.left = (clientWidth - image.width) / 2
          } else {
            image.height = clientHeight
            image.width = (clientHeight / height) * width
            image.left = (clientWidth - image.width) / 2
          }
        }
      },
      imageRepeatHandler (evt) {
        const { image } = this
        image.rotate += 90
        if (this.image.rotate >= 360) {
          this.image.rotate = 0
        }
      },
      imageZoomHandler (zoom) {
        const { image } = this
        image.scale += zoom
        if (image.scale < -0.5) {
          image.scale = -0.5
        }
      },
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
          setTimeout(() => {
            this.mousewheelEvt = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel'
            this.$refs.imageBox.addEventListener(this.mousewheelEvt, this.wheelHandler, {passive: true})
          })
          this.resetImage()
        }
      },
      closePreviewHandler () {
        this.$refs.imageBox.removeEventListener(this.mousewheelEvt, this.wheelHandler, {passive: true})
      },
      clickNextImage () {
        if (this.previewIndex >= this.value.length - 1) {
          this.previewIndex = 0
        } else {
          ++this.previewIndex
        }
        this.resetImage()
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
