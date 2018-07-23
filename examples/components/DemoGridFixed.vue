<template>
  <div>
    <fish-row gutter="1">
      <fish-col type="fixed" :width="250" class="demo-col">Fixed-Width</fish-col>
      <fish-col type="auto" class="demo-col demo-col2">content: auto width </fish-col>
    </fish-row>
  </div>
</template>
<script>
  export default {
    name: 'demo-grid-fixed'
  }
</script>
<style>
  .demo-col {
    background: #e0f0fa;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 5px;
  }

  .demo-col2 {
    background: #7dbcea;
  }

</style>