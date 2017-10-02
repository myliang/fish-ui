<template>
  <main-layout menuActiveIndex="popup">
    <h3>Popup 弹出框</h3>
    <vui-card>
      <vui-button @click="popupHandler">弹出确认框</vui-button>
      <vui-button @click="popup2Handler">弹出确认框2</vui-button>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-button @click=&quot;popupHandler&quot;&gt;弹出确认框&lt;/vui-button&gt;
&lt;vui-button @click=&quot;popup2Handler&quot;&gt;弹出确认框2&lt;/vui-button&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">popupHandler (event) {
  popup.confirm(event, '确定要删除这条记录吗？', () => {
    console.log('OK....')
  })
},
popup2Handler (event) {
  popup.confirm(event, '确定要删除这条记录吗？', () => {
    console.log('OK....')
  }, '确认', '取消')
}</code></pre>
      </div>
    </vui-card>

    <h3>Popup API</h3>
    <ul class="api">
      <li><code>popup.confirm: (event, html, okFunc, okText = 'Yes', cancelText = 'No')</code></li>
    </ul>

    <h3>函数参数说明</h3>
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

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['event', '目标事件对象，必填', 'Event', '-'],
          ['html', '弹出展示内容，必填', 'String', '-'],
          ['okFunc', '触发点击按钮回调函数', 'Function()', '-'],
          ['okText', 'ok按钮显示内容', 'String', 'Yes'],
          ['cancelText', 'cancel按钮显示内容', 'String', 'No']
        ]
      }
    },
    methods: {
      popupHandler (event) {
        this.$popup.confirm(event, '确定要删除这条记录吗？', () => {
          console.log('OK....')
        })
      },
      popup2Handler (event) {
        this.$popup.confirm(event, '确定要删除这条记录吗？', () => {
          console.log('OK....')
        }, '确认', '取消')
      }
    }
  }
</script>
