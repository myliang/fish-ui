<template>
  <div :class="['fish checkboxes', mode]" @click="clickHandler">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-checkboxes',
    props: {
      value: { type: Array },
      mode: { type: String, default: 'horizontal' } // horizontal, vertical
    },
    mounted () {
      this.reRender()
    },
    updated () {
      this.reRender()
    },
    methods: {
      clickHandler (evt) {
        let v = Array.from(this.value)
        if (v.includes(evt.index)) {
          v = this.value.filter((ele) => ele !== evt.index)
        } else {
          v.push(evt.index)
        }
        // console.log('after:', v)
        this.$emit('input', v)
        this.$emit('change', v)
      },
      reRender () {
        this.$children.forEach((ele) => {
          if (this.value.includes(ele.index)) {
            ele.active = true
          } else {
            ele.active = false
          }
        })
      }
    }
  }
</script>
