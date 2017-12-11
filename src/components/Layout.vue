<template>
  <div class="fish layout has-sider"  v-if="sider === 'tl' || sider === 'tr'">
    <div class="sider" v-if="sider === 'tl'"><slot name="sider"></slot></div>
    <div class="fish layout">
      <div class="header" ref="header"><slot name="header"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="footer" v-if="$slots.footer"><slot name="footer"></slot></div>
    </div>
    <div class="sider" v-if="sider === 'tr'"><slot name="sider"></slot></div>
  </div>
  <div class="fish layout" v-else>
    <div class="header" ref="header"><slot name="header"></slot></div>
    <div class="fish layout has-sider" v-if="sider">
      <div class="sider-toggle" :style="{'top': `${siderToggleTop}px`}" ref="siderToggle" @click="toggleHandler"><i class="fa fa-align-justify"></i></div>
      <div class="sider" v-if="sider === 'l'" ref="sider"><slot name="sider"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="sider" v-if="sider === 'r'"><slot name="sider"></slot></div>
    </div>
    <div class="content" v-else><slot name="content"></slot></div>
    <div class="footer" v-if="$slots.footer"><slot name="footer"></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'fish-layout',
    props: {
      sider: { type: String }
    },
    data () {
      return {
        siderToggleTop: 0
      }
    },
    mounted () {
      const headerHeight = this.$refs.header.offsetHeight
      const siderToggleHeight = this.$refs.siderToggle.offsetHeight
      this.siderToggleTop = headerHeight - siderToggleHeight / 2
    },
    methods: {
      toggleHandler () {
        let sider = this.$refs.sider
        console.log('display: ', sider.style.display)
        if (sider.style.display === 'block') {
          sider.style.display = 'none'
          this.$refs.siderToggle.style.left = '0px'
        } else {
          sider.style.display = 'block'
          this.$refs.siderToggle.style.left = `${sider.offsetWidth}px`
        }
      }
    }
  }
</script>
