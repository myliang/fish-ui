<template>
  <div class="fish dropdown" @click="clickHandler" v-clickoutside="awayHandler">
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
    props: {},
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
      clickHandler () {
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
