<template>
  <div class="fish input tree-select"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <input type="text" :placeholder="hint" :value="value" style="width: 125px;" readonly/>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-angle-down" v-else></i>
    <div class="content" v-if="visible">
      <fish-tree :data="data" :value="value" @select="selectHandler"></fish-tree>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import fishTree from './Tree.vue'
  export default {
    components: {fishTree},
    name: 'fish-tree-select',
    directives: { clickoutside },
    props: {
      value: { type: String, default: '' },
      data: { type: Array, required: true },
      hint: { type: String, default: 'Please' }
    },
    data () {
      return {
        showClear: false,
        visible: false
      }
    },
    computed: {
      valueEmpty () {
        return /^\s*$/.test(this.value)
      }
    },
    methods: {
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      clickHandler () {
        this.visible = !this.visible
      },
      selectHandler (item) {
        this.$emit('input', item[0])
      },
      clearHandler () {
        this.visible = false
        this.$emit('input', '')
      },
      awayHandler () {
        this.visible = false
        this.showClear = false
      }
    }
  }
</script>
