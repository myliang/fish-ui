<template>
  <main-layout menuActiveIndex="divider">
    <h3>Divider 分割线</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="基本用法" desc="分割线">
          <template slot="demo">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            <fish-divider></fish-divider>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-divider&gt;&lt;/fish-divider&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="fitted" desc="分割线margin:0;">
          <template slot="demo">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            <fish-divider fitted></fish-divider>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-divider fitted&gt;&lt;/fish-divider&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Divider Attributes</h3>
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
          ['fitted', '去掉margin', 'Boolean', 'false']
        ]
      }
    }
  }
</script>