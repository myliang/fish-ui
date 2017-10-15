<template>
  <div :class="['fish dimmer active']" v-if="visible" style="position: fixed;">
    <div :class="['fish modal']" ref="modal" :style="{'margin-top': marginTop}">
      <i class="fa fa-times" @click="closeHandler"></i>
      <div class="header" v-if="title">
        {{ title }}
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-modal',
    props: {
      title: { type: String },
      visible: { type: Boolean, default: false },
      marginTop: { type: String, default: '100px' }
    },
    watch: {
//      visible (nowVal, oldVal) {
//        if (nowVal) {
//          this.setMarginTop()
//        }
//      }
    },
    methods: {
      closeHandler () {
        this.$emit('update:visible', false)
      },
      setMarginTop () {
        this.$nextTick(() => {
          this.$refs.modal.style.marginTop = `-${this.$refs.modal.clientHeight / 2}px`
        })
      }
    }
  }
</script>
