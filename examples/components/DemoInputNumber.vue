<template>
  <main-layout menuActiveIndex="input-number">
    <h3>Input Number 数字输入框</h3>
    <vui-card>
      <vui-input-number min="0" max="10" v-model="numberValue"></vui-input-number> {{numberValue}}
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-input-number min=&quot;0&quot; max=&quot;10&quot; v-model=&quot;numberValue&quot;&gt;&lt;/vui-input-number&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Input Number Attributes</h3>
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
        numberValue: 1.234,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['min', '最小值，必填', 'String, Number', '-'],
          ['max', '最大值，必填', 'String, Number', '-'],
          ['step', '每次改变步数，可以为小数', 'String, Number', '1'],
          ['hint', '提示信息', 'String', 'Please ...'],
          ['size', '大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['disabled', '是否可用', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
