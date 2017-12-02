<template>
  <main-layout menuActiveIndex="transfer">
    <h3>Transfer</h3>
    <code-card title="Basic" desc="Basic transfer with drag">
      <template slot="demo">
        <demo-transfer-base></demo-transfer-base>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-transfer v-model=&quot;v&quot; :data=&quot;data&quot;&gt;
  &lt;/fish-transfer&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-transfer-base&#x27;,
    data () {
      return {
        data: [
          { key: &#x27;o_1&#x27;, label: &#x27;option 1&#x27;, disabled: true },
          { key: &#x27;o_2&#x27;, label: &#x27;option 2&#x27; },
          { key: &#x27;o_3&#x27;, label: &#x27;option 3&#x27; },
          { key: &#x27;o_4&#x27;, label: &#x27;option 4&#x27; },
          { key: &#x27;o_5&#x27;, label: &#x27;option 5&#x27;, disabled: true },
          { key: &#x27;o_6&#x27;, label: &#x27;option 6&#x27; },
          { key: &#x27;o_7&#x27;, label: &#x27;option 7&#x27; },
          { key: &#x27;o_8&#x27;, label: &#x27;option 8&#x27; },
          { key: &#x27;o_9&#x27;, label: &#x27;option 9&#x27; },
          { key: &#x27;o_10&#x27;, label: &#x27;option 10&#x27; },
          { key: &#x27;o_11&#x27;, label: &#x27;option 11&#x27; },
          { key: &#x27;o_12&#x27;, label: &#x27;option 12&#x27; },
          { key: &#x27;o_13&#x27;, label: &#x27;option 13&#x27; },
          { key: &#x27;o_14&#x27;, label: &#x27;option 14&#x27; },
          { key: &#x27;o_15&#x27;, label: &#x27;option 15&#x27; }
        ],
        v: []
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <h3>Transfer Attributes</h3>
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
  import DemoTransferBase from './DemoTransferBase.vue'
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      CodeCard,
      DemoTransferBase,
      MainLayout},
    data () {
      return {
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['titles', 'custom list titles', 'Array', '[\'items\', \'items\']'],
          ['data', 'data source', 'array[{ key, label, disabled }]', '[]'],
          ['width', 'transfer panel width', 'Number', '200'],
          ['height', 'transfer panel height', 'Number', '200'],
          ['noDataText', 'no data text', 'String', 'no data']
        ]
      }
    }
  }
</script>