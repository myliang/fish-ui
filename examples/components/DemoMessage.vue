<template>
  <main-layout menuActiveIndex="message">
    <h3>Message</h3>
    <code-card title="Basic" desc="Basic use case">
      <template slot="demo">
        <fish-message>
          Warning Description Warning Description Warning Description Warning Description
        </fish-message>
        <fish-message type="warning">
          Warning Description Warning Description Warning Description Warning Description
        </fish-message>
        <fish-message type="error">
          Error Description Error Description Error Description Error Description
        </fish-message>
        <fish-message type="info">
          Info Description Info Description Info Description Info Description
        </fish-message>
        <fish-message type="success">
          Success Description Success Description Success Description Success Description
        </fish-message>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-message&gt;
  Warning Description Warning Description Warning Description Warning Description
&lt;/fish-message&gt;
&lt;fish-message type=&quot;error&quot;&gt;
  Error Description Error Description Error Description Error Description
&lt;/fish-message&gt;
&lt;fish-message type=&quot;info&quot;&gt;
  Info Description Info Description Info Description Info Description
&lt;/fish-message&gt;
&lt;fish-message type=&quot;success&quot;&gt;
  Success Description Success Description Success Description Success Description
&lt;/fish-message&gt;</code></pre>
    </code-card>

    <h3>Message Attributes</h3>
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

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['type', 'optional：<code>warning</code> <code>info</code> <code>success</code> <code>error</code>', 'String', 'warning']
        ]
      }
    }
  }
</script>
