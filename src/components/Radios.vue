<template>
  <div class="fish radios" @click="clickHandler">
    <slot></slot>
  </div>
</template>
<script>
  import { notify } from '../config'
  export default {
    name: 'fish-radios',
    props: {
      value: { type: [Number, String] }
    },
    mounted () {
      this.reRender()
    },
    updated () {
      this.reRender()
    },
    methods: {
      clickHandler (evt) {
        this.$emit('input', evt.index)
        this.$emit('change', evt.index)
        notify.field.change(this)
      },
      reRender () {
        // console.log(this.value, '????')
        this.$children.forEach((ele) => {
          if (this.value === ele.index) {
            ele.active = true
          } else {
            ele.active = false
          }
        })
      }
    }
  }
</script>
