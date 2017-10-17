<template>
  <fish-layout class="demo3" sider="l">
    <nav slot="header">
      <div class="logo">Logo / System</div>
    </nav>
    <div slot="sider">
      <fish-menu mode="inline" style="width: 200px;">
        <fish-option index="0" content="内容管理"></fish-option>
        <fish-submenu index="1" mode="inline">
          <template slot="title">用户管理</template>
          <fish-option index="1-0" content="Jack"></fish-option>
          <fish-option index="1-1" content="Lucy"></fish-option>
          <fish-option index="1-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="2" content="统计分析"></fish-option>
        <fish-submenu index="3" mode="inline">
          <template slot="title">submenu</template>
          <fish-option index="3-0" content="Jack"></fish-option>
          <fish-option index="3-1" content="Lucy"></fish-option>
          <fish-option index="3-2" content="Active"></fish-option>
          <fish-submenu index="3-3" mode="inline">
            <template slot="title">submenu-3</template>
            <fish-option index="3-3-0" content="Jack"></fish-option>
            <fish-option index="3-3-1" content="Lucy"></fish-option>
            <fish-option index="3-3-2" content="Active"></fish-option>
          </fish-submenu>
        </fish-submenu>
      </fish-menu>
    </div>
    <div slot="content">Content...</div>
  </fish-layout>
</template>
<script>
  export default {
    name: 'demo-layout-top-sider-header'
  }
</script>
<style>
  .fish.layout.demo3 > .header {
    padding: 0;
    background: #e0f0fa;
  }
  .fish.layout.demo3 .has-sider > .content {
    margin: 20px;
    padding: 0.7em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>