<template>
  <div :class="classObject"
    tabindex="1"
    @click="clickHandler"
    v-clickoutside="awayHandler">
    <slot name="title"></slot>
    <fish-menu v-show="visible" class="content" @click="menusClickHandler">
      <slot></slot>
    </fish-menu>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import fishMenu from './Menu'
  export default {
    components: {fishMenu},
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
          'fish dropdown',
          this.align
        ]
      }
    },
    methods: {
      clickHandler () {
        console.log('click:')
        this.visible = !this.visible
      },
      awayHandler () {
        this.visible = false
      },
      menusClickHandler () {
        this.visible = false
      }
    }
  }
</script>
