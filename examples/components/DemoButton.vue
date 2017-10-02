<template>
  <main-layout>
    <h3>Button 按钮</h3>
    <fish-card>
      <fish-button>Default</fish-button>
      <fish-button active>Default</fish-button>
      <fish-button type="primary">Primary</fish-button>
      <fish-button type="positive">Positive</fish-button>
      <fish-button type="negative">Negative</fish-button>
      <fish-button type="basic">Basic</fish-button>
      <fish-button loading>Loading</fish-button>
      <fish-button disabled>Disabled</fish-button>
      <fish-button shape="circle"><i class="fa fa-search"></i></fish-button>
      <fish-button><i class="fa fa-search"></i></fish-button>
      <fish-button size="small">Small</fish-button>
      <div slot="footer">
          <pre v-highlightjs><code class="html">&lt;fish-button&gt;Default&lt;/fish-button&gt;
&lt;fish-button active&gt;Default&lt;/fish-button&gt;
&lt;fish-button type=&quot;primary&quot;&gt;Primary&lt;/fish-button&gt;
&lt;fish-button type=&quot;positive&quot;&gt;Positive&lt;/fish-button&gt;
&lt;fish-button type=&quot;negative&quot;&gt;Negative&lt;/fish-button&gt;
&lt;fish-button type=&quot;basic&quot;&gt;Basic&lt;/fish-button&gt;
&lt;fish-button loading&gt;Loading&lt;/fish-button&gt;
&lt;fish-button disabled&gt;Disabled&lt;/fish-button&gt;
&lt;fish-button shape=&quot;circle&quot;&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
&lt;fish-button&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
&lt;fish-button size=&quot;small&quot;&gt;Small&lt;/fish-button&gt;</code></pre>
      </div>
    </fish-card>

    <h3>Button Group</h3>
    <fish-card>
      <fish-buttons>
        <fish-button>Left</fish-button>
        <fish-button>Center</fish-button>
        <fish-button>Right</fish-button>
      </fish-buttons>
      <fish-buttons type="positive">
        <fish-button>Left</fish-button>
        <fish-button>Center</fish-button>
        <fish-button>Right</fish-button>
      </fish-buttons>
      <fish-buttons size="big">
        <fish-button>Left</fish-button>
        <fish-button>Center</fish-button>
        <fish-button>Right</fish-button>
      </fish-buttons>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-buttons&gt;
  &lt;fish-button&gt;Left&lt;/fish-button&gt;
  &lt;fish-button&gt;Center&lt;/fish-button&gt;
  &lt;fish-button&gt;Right&lt;/fish-button&gt;
&lt;/fish-buttons&gt;
&lt;fish-buttons type=&quot;positive&quot;&gt;
  &lt;fish-button&gt;Left&lt;/fish-button&gt;
  &lt;fish-button&gt;Center&lt;/fish-button&gt;
  &lt;fish-button&gt;Right&lt;/fish-button&gt;
&lt;/fish-buttons&gt;
&lt;fish-buttons size=&quot;big&quot;&gt;
  &lt;fish-button&gt;Left&lt;/fish-button&gt;
  &lt;fish-button&gt;Center&lt;/fish-button&gt;
  &lt;fish-button&gt;Right&lt;/fish-button&gt;
&lt;/fish-buttons&gt;</code></pre>
      </div>
    </fish-card>

    <h3>Button Attributes</h3>
    <div class="fish table attributes">
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
    <div class="fish table attributes">
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

  export default {
    components: {
      MainLayout
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
