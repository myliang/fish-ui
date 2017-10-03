<template>
    <main-layout menuActiveIndex="index">
      <h2>Fish-UI</h2>
      <p>基于 vue2, semantic-ui  实现，开发和服务于后台产品</p>
      <h3>支持环境</h3>
      <p>现代浏览器（暂时主要是chrome）</p>
      <h3>版本</h3>
      <p>1.0.0</p>
      <h3>安装</h3>
      <p>我们推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
      <p>如果你的网络环境不佳，推荐使用 cnpm。</p>
      <pre v-highlightjs><code class="bash">npm install fish-ui --save</code></pre>
      <h3>快速上手</h3>
      <p>推荐是用vue-cli创建项目</p>
      <h3>引用fish,全局引用即可</h3>
      <pre v-highlightjs><code class="javascript">import Vue from 'vue'
import FishUI from 'fish-ui'
Vue.use(FishUI)</code></pre>
    </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {
    components: {MainLayout}
  }
</script>
