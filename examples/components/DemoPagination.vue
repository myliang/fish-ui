<template>
  <main-layout menuActiveIndex="pagination">
    <h3>Pagination</h3>
    <code-card title="Basic" desc="Basic use case">
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

    <code-card title="Simple" desc="Simple use case">
      <template slot="demo">
        <fish-pagination :total="500" :current="page1" @change="(current) => page1 = current" simple></fish-pagination>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;fish-pagination :total=&quot;500&quot; :current=&quot;page1&quot; @change=&quot;(current) =&gt; page1 = current&quot; simple&gt;&lt;/fish-pagination&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {page1: 2} }
  }
&lt;/script&gt;</code></pre>
      </template>
    </code-card>

    <h3>Pagination Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Pagination Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in event_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
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
        page1: 1,
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['total', 'the data total', 'Number', '-'],
          ['current', 'current page', 'Number', '1'],
          ['rows', 'the rows of page', 'Number', '10'],
          ['simple', 'simple mode', 'Boolean', 'false'],
          ['totalRender', 'the total render Function', 'Function(total, range)', '-']
        ],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(current)', 'Callback when changing', '<code>current</code>']
        ]
      }
    }
  }
</script>
