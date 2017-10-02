<template>
  <main-layout menuActiveIndex="input">
    <h3>Input 输入框</h3>
    <vui-card>
      <vui-input v-model="defaultValue"></vui-input> [{{ defaultValue }}]
      <vui-input hint="trasaction" transparent></vui-input>
      <vui-input loading></vui-input><br/>
      <vui-input size="small" disabled></vui-input>
      <vui-input icon="fa fa-search"></vui-input>
      <vui-input icon="fa fa-search" :iconLeft="true"></vui-input>
      <vui-input type="textarea" style="height: 50px;"></vui-input>
      <br/><br/>
      <vui-input disabled>
      </vui-input>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-input v-model=&quot;defaultValue&quot;&gt;&lt;/vui-input&gt;
&lt;vui-input hint=&quot;trasaction&quot; transparent&gt;&lt;/vui-input&gt;
&lt;vui-button&gt;GO&gt;&gt;&lt;/vui-button&gt;&lt;br/&gt;
&lt;vui-input loading&gt;&lt;/vui-input&gt;
&lt;vui-input size=&quot;small&quot; disabled&gt;&lt;/vui-input&gt;
&lt;vui-input icon=&quot;fa fa-search&quot;&gt;&lt;/vui-input&gt;
&lt;vui-input icon=&quot;fa fa-search&quot; :iconLeft=&quot;true&quot;&gt;&lt;/vui-input&gt;
&lt;vui-input type=&quot;textarea&quot; style=&quot;height: 50px;&quot;&gt;&lt;/vui-input&gt;
&lt;br/&gt;&lt;br/&gt;
&lt;vui-input disabled&gt;
&lt;/vui-input&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Input Attributes</h3>
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
  import VuiCard from '../src/components/Card.vue'
  import VuiInput from '../src/components/Input.vue'
  import VuiButton from '../src/components/Button.vue'

  export default {
    components: {
      VuiButton,
      VuiInput,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        defaultValue: '',
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['type', '输入框类型，可选值：<code>text</code> <code>textarea</code> <code>password</code>...', 'String', 'text'],
          ['hint', '提示信息', 'String', 'Please ...'],
          ['icon', '图标(默认位置靠右), fontawesome icon 字体', 'String', '-'],
          ['iconLeft', '师表是否靠左', 'Boolean', 'false'],
          ['iconClose', '关闭图标', 'String', 'fa fa-times-circle'],
          ['loading', '加载中..', 'Boolean', 'false'],
          ['size', '大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['transparent', '是否透明', 'Boolean', 'false'],
          ['disabled', '是否可用', 'Boolean', 'false'],
          ['clear', '是否可清除输入的内容', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
