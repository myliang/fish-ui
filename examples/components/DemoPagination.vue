<template>
  <main-layout menuActiveIndex="pagination">
    <h3>Pagination 分页</h3>
    <code-card title="典型" desc="典型分页">
      <template slot="demo">
        <fish-pagination :total="500" :current="page" @change="(current) => page = current"></fish-pagination>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;fish-pagination :total=&quot;500&quot; :current=&quot;page&quot; @change=&quot;(current) =&gt; page = current&quot;&gt;&lt;/fish-pagination&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {page: 2} }
  }
&lt;/script&gt;</code></pre>
      </template>
    </code-card>

    <h3>Pagination Attributes</h3>
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

    <h3>Pagination Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in event_data">
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

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        page: 2,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['total', '数据总数', 'Number', '-'],
          ['current', '当前页数', 'Number', '1'],
          ['rows', '每页条数', 'Number', '10'],
          ['totalRender', '用于显示数据总量和当前数据顺序', 'Function(total, range)', '-']
        ],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change', 'current 改变时会触发', '当前页 <code>current</code>']
        ]
      }
    }
  }
</script>
