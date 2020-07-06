<template>
  <div class="pane" v-show="visible">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-tab-pane',
    props: {
      label: { type: String, required: true },
      index: { type: String }
    },
    watch: {
      label (nv, ov) {
        try {
          this.$parent.updateTabLabel(ov, nv)
        } catch (e) {}
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>
