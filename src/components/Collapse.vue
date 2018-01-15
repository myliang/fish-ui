<template>
  <div :class="['fish collapse', {'bordered': bordered}]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fish-collapse',
  props: {
    bordered: { type: Boolean, default: false }
  }
}
</script>

