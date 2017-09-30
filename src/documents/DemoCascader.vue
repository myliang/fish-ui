<template>
  <main-layout menuActiveIndex="cascader">
    <h3>Cascader 练级下拉选框</h3>
    <vui-card>
      <vui-cascader :options="options" v-model="cascaderValue" style="width: 260px;" @change="changeHandler"></vui-cascader> [{{ cascaderValue }}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-cascader :options=&quot;options&quot; v-model=&quot;cascaderValue&quot; style=&quot;width: 260px;&quot; @change=&quot;changeHandler&quot;&gt;&lt;/vui-cascader&gt;</code></pre>
        <pre v-highlightjs><code class="javascript">data () {
  return {
    cascaderValue: [],
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
  methods: {
    changeHandler (values) {
    console.log('values: ', values)
  }
}</code></pre>
      </div>
    </vui-card>

    <h3>Cascader Attributes</h3>
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

    <h3>Cascader Events</h3>
    <div class="vui table attributes">
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
  import VuiCard from '../components/Card.vue'
  import VuiCascader from '../components/Cascader.vue'

  export default {
    components: {
      VuiCascader,
      VuiCard,
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
          ['textSplit', '文本分隔符', 'String', '/'],
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
