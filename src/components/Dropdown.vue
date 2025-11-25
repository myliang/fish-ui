<template>
  <div :class="classObject"
    tabindex="1"
    @click="clickHandler"
    v-clickoutside="awayHandler">
    <slot name="title"></slot>
    <div v-show="visible" :class="`fish-dropdown-layer ${this.align}`" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { toBody } from './layer'
  export default {
    directives: { clickoutside },
    name: 'fish-dropdown',
    props: {
      align: { type: String, default: 'bottom-left' } // bottom-left, bottom-right, top-left, top-right
    },
    data () {
      return {
        visible: false
      }
    },
    computed: {
      classObject () {
        return [
          'fish dropdown'
        ]
      }
    },
    methods: {
      visibleAfter () {
        toBody(this.visible, this.$el, this.$refs.content, false)
      },
      clickHandler () {
        this.visible = !this.visible
        this.visibleAfter()
      },
      awayHandler () {
        this.visible = false
        this.visibleAfter()
      }
    }
  }
</script>
