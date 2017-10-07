<template>
  <main-layout menuActiveIndex="message">
    <h3>Message 消息</h3>
    <fish-card>
      <fish-message>
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
      <div slot="footer">
      <pre v-highlightjs><code class="html">&lt;fish-message&gt;
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
      </div>
    </fish-card>

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

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['type', '类型(主要就是颜色) 可选值：<code>warning</code> <code>info</code> <code>success</code> <code>error</code>', 'String', 'warning']
        ]
      }
    }
  }
</script>
