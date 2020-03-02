<template>
  <div :class="['fish dimmer active']" v-if="visible" 
    :style="{position: 'fixed'}">
    <div :class="['fish modal', 'attached', attached]" ref="modal" 
      :style="mstyle">
      <i class="fa fa-times" @click="closeHandler"></i>
      <div class="header" v-if="title">
        {{ title }}
      </div>
      <div class="content" :style="{padding: padding}">
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
      attached: { type: String, default: 'center' },
      padding: { type: String, default: '1em' },
      visible: { type: Boolean, default: false },
      marginTop: { type: String, default: '100px' },
      width: { type: [Number, String], default: 850 },
      height: { type: [Number, String], default: 500 },
      triggerEvent: { type: Event, default: null } // 触发的事件对象
    },
    data () {
      return {
        left: '50%',
        top: '0px',
        marginLeft: this.width / 2,
        marginTopV: this.marginTop
      }
    },
    computed: {
      mstyle () {
        const { attached, width, height } = this
        if (attached === 'center') {
          const { left, top } = this
          return {
            'margin-top': this.marginTopV,
            'width': `${this.width}px`,
            'margin-left': `-${this.marginLeft}px`,
            left,
            top
          }
        } else if (attached === 'left' || attached === 'right') {
          return { width }
        } else {
          return { height }
        }
      }
    },
    watch: {
      triggerEvent (nowVal, oldVal) {
        if (this.attached === 'center') {
          if (nowVal != null) {
            this.calLeftTop(nowVal)
            this.marginLeft = 0
            this.marginTopV = '0px'
          } else {
            this.left = '50%'
            this.top = '0px'
            this.marginLeft = this.width / 2
            this.marginTopV = this.marginTop
          }
        }
      }
    },
    methods: {
      closeHandler () {
        this.$emit('update:visible', false)
      },
      calLeftTop (event) {
        const { target } = event
        const {width, left, top} = getTargetOffset(target)
        this.left = `${left + width + 10}px`
        this.top = `${top}px`
      }
    }
  }

  const getTargetOffset = (target) => {
    let { offsetWidth, offsetHeight, offsetLeft, offsetTop } = target
    if (target.offsetParent != null) {
      const {left, top} = getTargetOffset(target.offsetParent)
      // offsetHeight += height
      offsetLeft += left
      offsetTop += top
      // offsetWidth += width
    }
    return {height: offsetHeight, width: offsetWidth, left: offsetLeft, top: offsetTop}
  }
</script>
