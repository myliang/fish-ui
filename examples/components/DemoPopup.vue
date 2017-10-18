<template>
  <main-layout menuActiveIndex="popup">
    <h3>Popup 弹出框</h3>
    <code-card title="基本用法" desc="多用于确认提示">
      <template slot="demo">
        <fish-button @click="popupHandler">弹出确认框</fish-button>
        <fish-button @click="popup2Handler">弹出确认框2</fish-button>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;popupHandler&quot;&gt;弹出确认框&lt;/fish-button&gt;
    &lt;fish-button @click=&quot;popup2Handler&quot;&gt;弹出确认框2&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      popupHandler (event) {
        this.$popup.confirm(event, &#x27;确定要删除这条记录吗？&#x27;, () =&gt; {
          console.log(&#x27;OK....&#x27;)
        })
      },
      popup2Handler (event) {
        this.$popup.confirm(event, &#x27;确定要删除这条记录吗？&#x27;, () =&gt; {
          console.log(&#x27;OK....&#x27;)
        }, &#x27;确认&#x27;, &#x27;取消&#x27;)
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Popup API</h3>
    <ul class="api">
      <li><code>popup.confirm: (event, html, okFunc, okText = 'Yes', cancelText = 'No')</code></li>
    </ul>

    <h3>函数参数说明</h3>
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
