<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vui-buttons',
    props: {
      type: { type: String },
      size: { type: String }
    },
    computed: {
      classObject () {
        return [
          'vui buttons',
          this.type,
          this.size
        ]
      }
    }
  }
</script>
