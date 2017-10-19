<template>
  <img :class="['fish image', {'disabled': disabled, 'bordered': bordered, 'rounded': rounded}, shape]"
    :src="url"/>
</template>
<script>
  export default {
    name: 'fish-image',
    props: {
      url: { type: String, required: true },
      disabled: { type: Boolean, default: false },
      bordered: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false },
      shape: { type: String, default: 'square' }
    }
  }
</script>