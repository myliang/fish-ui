<template>
  <li class="optgroup">
    <div class="header" v-html="label"></div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'fish-optgroup',
  props: {
    label: { type: String, required: true }
  }
}
</script>

