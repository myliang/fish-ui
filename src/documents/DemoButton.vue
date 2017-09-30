<template>
  <main-layout>
    <h3>Button 按钮</h3>
    <vui-card>
      <vui-button>Default</vui-button>
      <vui-button active>Default</vui-button>
      <vui-button type="primary">Primary</vui-button>
      <vui-button type="positive">Positive</vui-button>
      <vui-button type="negative">Negative</vui-button>
      <vui-button type="basic">Basic</vui-button>
      <vui-button loading>Loading</vui-button>
      <vui-button disabled>Disabled</vui-button>
      <vui-button shape="circle"><i class="fa fa-search"></i></vui-button>
      <vui-button><i class="fa fa-search"></i></vui-button>
      <vui-button size="small">Small</vui-button>
      <div slot="footer">
          <pre v-highlightjs><code class="html">&lt;vui-button&gt;Default&lt;/vui-button&gt;
&lt;vui-button active&gt;Default&lt;/vui-button&gt;
&lt;vui-button type=&quot;primary&quot;&gt;Primary&lt;/vui-button&gt;
&lt;vui-button type=&quot;positive&quot;&gt;Positive&lt;/vui-button&gt;
&lt;vui-button type=&quot;negative&quot;&gt;Negative&lt;/vui-button&gt;
&lt;vui-button type=&quot;basic&quot;&gt;Basic&lt;/vui-button&gt;
&lt;vui-button loading&gt;Loading&lt;/vui-button&gt;
&lt;vui-button disabled&gt;Disabled&lt;/vui-button&gt;
&lt;vui-button shape=&quot;circle&quot;&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/vui-button&gt;
&lt;vui-button&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/vui-button&gt;
&lt;vui-button size=&quot;small&quot;&gt;Small&lt;/vui-button&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Button Group</h3>
    <vui-card>
      <vui-buttons>
        <vui-button>Left</vui-button>
        <vui-button>Center</vui-button>
        <vui-button>Right</vui-button>
      </vui-buttons>
      <vui-buttons type="positive">
        <vui-button>Left</vui-button>
        <vui-button>Center</vui-button>
        <vui-button>Right</vui-button>
      </vui-buttons>
      <vui-buttons size="big">
        <vui-button>Left</vui-button>
        <vui-button>Center</vui-button>
        <vui-button>Right</vui-button>
      </vui-buttons>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-buttons&gt;
  &lt;vui-button&gt;Left&lt;/vui-button&gt;
  &lt;vui-button&gt;Center&lt;/vui-button&gt;
  &lt;vui-button&gt;Right&lt;/vui-button&gt;
&lt;/vui-buttons&gt;
&lt;vui-buttons type=&quot;positive&quot;&gt;
  &lt;vui-button&gt;Left&lt;/vui-button&gt;
  &lt;vui-button&gt;Center&lt;/vui-button&gt;
  &lt;vui-button&gt;Right&lt;/vui-button&gt;
&lt;/vui-buttons&gt;
&lt;vui-buttons size=&quot;big&quot;&gt;
  &lt;vui-button&gt;Left&lt;/vui-button&gt;
  &lt;vui-button&gt;Center&lt;/vui-button&gt;
  &lt;vui-button&gt;Right&lt;/vui-button&gt;
&lt;/vui-buttons&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Button Attributes</h3>
    <div class="vui table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Buttons Attributes</h3>
    <div class="vui table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in datas">
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
  import VuiButton from '../components/Button.vue'
  import VuiButtons from '../components/Buttons.vue'
  import VuiRow from '../components/Row.vue'
  import VuiCol from '../components/Col.vue'
  import VuiTable from '../components/Table.vue'

  export default {
    components: {
      VuiTable,
      VuiCol,
      VuiRow,
      VuiCard,
      MainLayout,
      VuiButton,
      VuiButtons
    },
    data () {
      return {
        columns: ['属性', '说明', '类型', '默认值'],
        data: [
          ['type', '设置按钮类型，可选值为 <code>primary</code>, <code>positive</code>, <code>negative</code>, <code>basic</code> 或者不设', 'String', '-'],
          ['shape', '设置按钮形状，可选值为 <code>circle</code> 或者不设', 'String', '-'],
          ['size', '设置按钮大小，可选值为<code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['active', '设置按钮选中状态', 'Boolean', 'false'],
          ['disabled', '设置按钮不可选', 'Boolean', 'false'],
          ['loading', '设置按钮加载中', 'Boolean', 'false']
        ],
        datas: [
          ['type', '设置按钮类型，可选值为 <code>primary</code>, <code>positive</code>, <code>negative</code>, <code>basic</code> 或者不设', 'String', '-'],
          ['size', '设置按钮大小，可选值为<code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-']
        ]
      }
    },
    mounted () {
      // console.log(':::mounted.button')
    }
  }
</script>
