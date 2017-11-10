<template>
  <div>
    <fish-layout class="demo">
      <div slot="header">Header</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </fish-layout>
    <fish-layout sider="l" class="demo">
      <div slot="header">Header</div>
      <div slot="sider">Left</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </fish-layout>
    <fish-layout sider="tl" class="demo" style="margin-bottom: 0;">
      <div slot="sider">Top Left</div>
      <div slot="header">Header</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </fish-layout>
  </div>
</template>
<script>
  export default {
    name: 'demo-layout-base'
  }
</script>
<style>
  .fish.layout.demo {
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .fish.layout.demo .header, .fish.layout.demo .footer{
    background: #7dbcea;
    color: #fff;
  }
  .fish.layout.demo .sider {
    background: #3ba0e9;
  }
  .fish.layout.demo .content {
    background: rgba(16, 142, 233, 1);
  }
</style>