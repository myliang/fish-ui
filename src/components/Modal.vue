<template>
  <div :class="['vui dimmer active']" v-if="visible" style="position: fixed;">
    <div :class="['vui modal']" ref="modal">
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
    name: 'vui-modal',
    props: {
      title: { type: String },
      visible: { type: Boolean, default: false }
    },
    watch: {
      visible (nowVal, oldVal) {
        if (nowVal) {
          this.setMarginTop()
        }
      }
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
