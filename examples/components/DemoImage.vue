<template>
  <main-layout menuActiveIndex="image">
    <h3>Image 图片</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="基本用法" desc="展示图片">
          <template slot="demo">
            <fish-image :url="require('../static/image.png')" style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/image.png&#x27;)&quot; style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="边框" desc="为图片添加边框">
          <template slot="demo">
            <fish-image :url="require('../static/white-image.png')" bordered style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/white-image.png&#x27;)&quot; bordered style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="圆角" desc="图片圆角">
          <template slot="demo">
            <fish-image :url="require('../static/image.png')" rounded style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/image.png&#x27;)&quot; rounded style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="圆形" desc="圆形图片">
          <template slot="demo">
            <fish-image :url="require('../static/square-image.png')" shape="circle" style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/square-image.png&#x27;)&quot; shape=&quot;circle&quot; style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Image Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {components: {
    CodeCard,
    MainLayout},
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['bordered', '是否添加边框', 'Boolean', 'false'],
          ['rounded', '是否支持圆角', 'Boolean', 'false'],
          ['shape', '图片形状，可选值: <code>square</code> <code>circle</code>', 'String', 'square']
        ]
      }
    }
  }
</script>