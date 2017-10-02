<template>
  <main-layout menuActiveIndex="message">
    <h3>Message 消息</h3>
    <vui-card>
      <vui-message>
        Warning Description Warning Description Warning Description Warning Description
      </vui-message>
      <vui-message type="error">
        Error Description Error Description Error Description Error Description
      </vui-message>
      <vui-message type="info">
        Info Description Info Description Info Description Info Description
      </vui-message>
      <vui-message type="success">
        Success Description Success Description Success Description Success Description
      </vui-message>
      <div slot="footer">
      <pre v-highlightjs><code class="html">&lt;vui-card&gt;
  &lt;vui-message&gt;
    Warning Description Warning Description Warning Description Warning Description
  &lt;/vui-message&gt;
  &lt;vui-message type=&quot;error&quot;&gt;
    Error Description Error Description Error Description Error Description
  &lt;/vui-message&gt;
  &lt;vui-message type=&quot;info&quot;&gt;
    Info Description Info Description Info Description Info Description
  &lt;/vui-message&gt;
  &lt;vui-message type=&quot;success&quot;&gt;
    Success Description Success Description Success Description Success Description
  &lt;/vui-message&gt;
&lt;/vui-card&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Message Attributes</h3>
    <div class="vui table attributes">
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
  import VuiMessage from '../src/components/Message.vue'
  import VuiCard from '../src/components/Card.vue'

  export default {
    components: {
      VuiCard,
      VuiMessage,
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
