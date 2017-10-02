<template>
  <div :class="['fields']">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-fields',
    props: {
      label: { type: String }
    }
  }
</script>
