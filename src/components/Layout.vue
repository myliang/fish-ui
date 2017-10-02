<template>
  <div class="fish layout has-sider"  v-if="sider === 'tl' || sider === 'tr'">
    <div class="sider" v-if="sider === 'tl'"><slot name="sider"></slot></div>
    <div class="fish layout">
      <div class="header"><slot name="header"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="footer" v-if="$slots.footer"><slot name="footer"></slot></div>
    </div>
    <div class="sider" v-if="sider === 'tr'"><slot name="sider"></slot></div>
  </div>
  <div class="fish layout" v-else>
    <div class="header"><slot name="header"></slot></div>
    <div class="fish layout has-sider" v-if="sider">
      <div class="sider" v-if="sider === 'l'"><slot name="sider"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="sider" v-if="sider === 'r'"><slot name="sider"></slot></div>
    </div>
    <div class="content" v-else><slot name="content"></slot></div>
    <div class="footer" v-if="$slots.footer"><slot name="footer"></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'fish-layout',
    props: {
      sider: { type: String }
    }
  }
</script>
