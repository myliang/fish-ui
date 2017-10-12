<template>
    <main-layout menuActiveIndex="index">
      <h2>Fish-UI</h2>
      <p>基于 <a href="https://vuejs.org/"><strong>vue2</strong></a>, <a href="http://semantic-ui.cn/"><strong>semantic-ui</strong></a>  实现，开发和服务于后台产品, 其中icon font用到了<a href="http://fontawesome.io/"><strong>fontawesome</strong></a></p>
      <h3>支持环境</h3>
      <p>现代浏览器（暂时主要是chrome）</p>
      <h3>版本</h3>
      <p>1.0.0</p>
      <h3>安装</h3>
      <p>我们推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
      <p>如果你的网络环境不佳，推荐使用 cnpm。</p>
      <pre v-highlightjs><code class="bash">$ npm install less less-loader fish-ui --save</code></pre>
      <h3>快速上手</h3>
      <p>推荐是用vue-cli创建项目</p>
      <pre v-highlightjs><code class="bash">$ npm install -g vue-cli
$ vue init webpack test // 创建一个项目名为test的vue项目
$ cd test
$ npm install less less-loader fish-ui --save // 安装fish-ui
// 之后向main.js(src/main.js)文件中添加如下内容，全局引用fish-ui</code></pre>
      <pre v-highlightjs><code class="javascript">import FishUI from 'fish-ui'
Vue.use(FishUI)</code></pre>
      <h4>main.js文件内容</h4>
      <pre v-highlightjs><code class="javascript">import Vue from 'vue'
import App from './App'
import FishUI from 'fish-ui'

Vue.use(FishUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
</code></pre>
      <h4>App.vue文件内容</h4>
      <pre v-highlightjs><code class="html">&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;img src=&quot;./assets/logo.png&quot;&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
    &lt;fish-button&gt;Testing&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#x27;app&#x27;
}
&lt;/script&gt;

&lt;style&gt;
#app {
  font-family: &#x27;Avenir&#x27;, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style&gt;
</code></pre>
      <h4>运行就可以看到fish-ui 的button效果了</h4>
      <pre v-highlightjs><code class="bash">$ npm run dev</code></pre>
    </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {
    name: 'index',
    components: {MainLayout}
  }
</script>
