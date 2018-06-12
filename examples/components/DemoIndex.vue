<template>
    <main-layout menuActiveIndex="index">
      <h2>Fish-UI</h2>
      <h5>A Vue.js 2.0 UI Toolkit for Web.</h5>
      <h3>Environment Support</h3>
      <p>Modern browsers</p>
      <h3>Install</h3>
      <p>Install Fish-UI with the node package manager. It can work with webpack and ES2015 very well.</p>
      <p>If you are in a bad network environment，you can try other registries and tools like cnpm。</p>
      <pre v-highlightjs><code class="bash">$ npm install less less-loader fish-ui --save</code></pre>
      <h4>font-awesome & google font</h4>
      <pre v-highlightjs><code class="html">
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css&quot;/&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://fonts.proxy.ustclug.org/css?family=Lato:400,700,400italic,700italic&amp;subset=latin&quot;/&gt;
      </code></pre>
      
      <h3>Quick Start</h3>
      <p>vue-cli</p>
      <pre v-highlightjs><code class="bash">$ npm install -g vue-cli
$ vue init webpack test
$ cd test
$ npm install less less-loader fish-ui --save </code></pre>
      <pre v-highlightjs><code class="javascript">import FishUI from 'fish-ui'
Vue.use(FishUI)</code></pre>
      <h4>main.js</h4>
      <pre v-highlightjs><code class="javascript">
import Vue from &#x27;vue&#x27;
import App from &#x27;./App&#x27;
import FishUI from &#x27;fish-ui&#x27;

Vue.use(FishUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: &#x27;#app&#x27;,
  template: &#x27;&lt;App/&gt;&#x27;,
  components: { App }
})
</code></pre>
      <h4>App.vue</h4>
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
      <h4>run</h4>
      <pre v-highlightjs><code class="bash">$ npm run dev</code></pre>
    </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {
    components: {MainLayout}
  }
</script>
