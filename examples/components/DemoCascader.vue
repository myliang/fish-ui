<template>
  <main-layout menuActiveIndex="cascader">
    <h3>Cascader 练级下拉选框</h3>
    <code-card title="基本" desc="基本用法，可以使用v-model绑定数据">
      <template slot="demo">
        <fish-cascader :options="options" v-model="cascaderValue" style="width: 260px;" @change="changeHandler"></fish-cascader>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-cascader :options=&quot;options&quot; v-model=&quot;cascaderValue&quot; style=&quot;width: 260px;&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-cascader&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        cascaderValue: [],
        options: [
          [&#x27;zhejiang&#x27;, &#x27;Zhejiang&#x27;, [
            [&#x27;hangzhou&#x27;, &#x27;Hangzhou&#x27;, [
              [&#x27;xihu&#x27;, &#x27;West Lake&#x27;]
            ]]
          ]],
          [&#x27;jiangsu&#x27;, &#x27;Jiangsu&#x27;, [
            [&#x27;nanjing&#x27;, &#x27;Nanjing&#x27;, [
              [&#x27;zhonghuamen&#x27;, &#x27;Zhong Hua Men&#x27;]
            ]]
          ]]
        ]
      }
    },
    methods: {
      changeHandler (values) {
        console.log(&#x27;values:&#x27;, values)
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Cascader Attributes</h3>
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

    <h3>Cascader Events</h3>
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
        cascaderValue: [],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(values)', '选择option的时候触发', '值数组 <code>values</code>']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值，用v-model绑定', 'Array', '[]'],
          ['textDelimiter', '文本分隔符', 'String', ' / '],
          ['menuWidth', '弹出菜单的宽度', 'Number', '160'],
          ['hint', '提示信息', 'String', 'Please select'],
          ['options', '数据选项数组', 'Array[[value, key],...]', '-']
        ],
        options: [
          ['zhejiang', 'Zhejiang', [
            ['hangzhou', 'Hangzhou', [
              ['xihu', 'West Lake']
            ]]
          ]],
          ['jiangsu', 'Jiangsu', [
            ['nanjing', 'Nanjing', [
              ['zhonghuamen', 'Zhong Hua Men']
            ]]
          ]]
        ]
      }
    },
    methods: {
      changeHandler (values) {
        console.log('values: ', values)
      }
    }
  }
</script>
