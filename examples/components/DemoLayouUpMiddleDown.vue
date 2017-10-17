<template>
  <fish-layout class="demo2">
    <nav slot="header">
      <div class="logo">Logo / System</div>
      <fish-menu mode="horizontal" style="background: transparent; border-bottom: 0;">
        <fish-option index="1" content="Nav 1"></fish-option>
        <fish-option index="2" content="Nav 2"></fish-option>
        <fish-option index="3" content="Nav 3"></fish-option>
      </fish-menu>
    </nav>
    <div slot="content" style="height: 100px;">
      Content...........
    </div>
    <div slot="footer">2017@copyright myliang</div>
  </fish-layout>
</template>
<script>
  export default {
    name: 'demo-layout-up-middle-down'
  }
</script>
<style>
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .fish.layout.demo2 > .header {
    padding: 0 20px;
    background: #e0f0fa;
    margin-bottom: 20px;
  }
  .fish.layout.demo2 > .content {
    margin: 0 20px;
    padding: 0.7em 1em;
  }
</style>