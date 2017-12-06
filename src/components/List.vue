<template>
  <div :class="['fish list', {'bordered': bordered}]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-list',
    props: {
      bordered: { type: Boolean, default: false }
    }
  }
</script>