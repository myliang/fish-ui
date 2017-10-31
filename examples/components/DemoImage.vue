<template>
  <main-layout menuActiveIndex="image">
    <h3>Image 图片</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-image :url="require('../static/image.png')" style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/image.png&#x27;)&quot; style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Border" desc="Add border to image">
          <template slot="demo">
            <fish-image :url="require('../static/white-image.png')" bordered style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/white-image.png&#x27;)&quot; bordered style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Rounded" desc="Add rounded to image">
          <template slot="demo">
            <fish-image :url="require('../static/image.png')" rounded style="height: 300px;"></fish-image>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-image :url=&quot;require(&#x27;../static/image.png&#x27;)&quot; rounded style=&quot;height: 300px;&quot;&gt;&lt;/fish-image&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Circle" desc="the circle image">
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['bordered', 'whether is bordered or not', 'Boolean', 'false'],
          ['rounded', 'whether is rounded or not', 'Boolean', 'false'],
          ['shape', 'optional: <code>square</code> <code>circle</code>', 'String', 'square']
        ]
      }
    }
  }
</script>