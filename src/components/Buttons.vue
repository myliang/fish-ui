<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-buttons',
    props: {
      type: { type: String },
      size: { type: String }
    },
    computed: {
      classObject () {
        return [
          'fish buttons',
          this.type,
          this.size
        ]
      }
    }
  }
</script>
