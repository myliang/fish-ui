<template>
  <li :class="['event', color]">
    <div class="badge"></div>
    <div class="panel">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'fish-timeline-item',
    props: {
      color: { type: String, default: '' } // red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, dark, black
    }
  }
</script>