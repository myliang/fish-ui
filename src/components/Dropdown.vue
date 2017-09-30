<template>
  <div class="vui dropdown" @click="clickHandler" v-clickoutside="awayHandler">
    <slot name="title"></slot>
    <vui-menu v-show="visible" class="content" @click="menusClickHandler">
      <slot></slot>
    </vui-menu>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import VuiMenu from './Menu'
  export default {
    components: {VuiMenu},
    directives: { clickoutside },
    name: 'vui-dropdown',
    props: {},
    data () {
      return {
        visible: false
      }
    },
    computed: {
      classObject () {
        return [
          'vui dropdown'
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
