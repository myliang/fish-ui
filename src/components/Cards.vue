<template>
  <div :class="['fish cards', cols]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fish-cards',
  props: {
    cols: { type: String, default: '' }
  }
}
</script>

