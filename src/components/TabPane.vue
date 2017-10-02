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
    data () {
      return {
        visible: false
      }
    }
  }
</script>
