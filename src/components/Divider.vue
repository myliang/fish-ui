<template>
  <div :class="['fish divider', {'fitted': fitted}]"></div>
</template>
<script>
  export default {
    name: 'fish-divider',
    props: {
      fitted: { type: Boolean, default: false } // true , margin: 0
    }
  }
</script>