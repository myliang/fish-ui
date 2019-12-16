<template>
  <div :class="['fish dimmer loading', {'active': active}]"></div>
</template>
<script>
export default {
  name: 'fish-loader',
  props: {
    active: { type: Boolean, default: false }
  }
}
</script>