<template>
  <div>
    <fish-row gutter=".6">
      <fish-col span="6"><div class="demo-col">col-6</div></fish-col>
      <fish-col span="6"><div class="demo-col demo-col2">col-6</div></fish-col>
      <fish-col span="6"><div class="demo-col">col-6</div></fish-col>
      <fish-col span="6"><div class="demo-col demo-col2">col-6</div></fish-col>
    </fish-row>
    <fish-row gutter=".6">
      <fish-col span="6" offset="6"><div class="demo-col demo-col2">col-6</div></fish-col>
      <fish-col span="6"><div class="demo-col">col-6</div></fish-col>
      <fish-col span="6"><div class="demo-col demo-col2">col-6</div></fish-col>
    </fish-row>
    <fish-row>
      <fish-col span="18" push="6"><div class="demo-col">col-18 push-6</div></fish-col>
      <fish-col span="6" pull="18"><div class="demo-col demo-col2">col-6 pull-18</div></fish-col>
    </fish-row>
  </div>
</template>
<script>
  export default {
    name: 'demo-grid-gutter-offset'
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