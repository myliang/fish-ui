<template>
  <main-layout>
    <h3>Button 按钮</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="按钮类型" desc="按钮有五种类型：默认, <code>primary</code>、<code>positive</code>、<code>negative</code>、<code>basic</code>">
          <template slot="demo">
            <fish-button>Default</fish-button>
            <fish-button type="primary">Primary</fish-button>
            <fish-button type="positive">Positive</fish-button>
            <fish-button type="negative">Negative</fish-button>
            <fish-button type="basic">Basic</fish-button>
          </template>
          <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;fish-button&gt;Default&lt;/fish-button&gt;
&lt;fish-button type=&quot;primary&quot;&gt;Primary&lt;/fish-button&gt;
&lt;fish-button type=&quot;positive&quot;&gt;Positive&lt;/fish-button&gt;
&lt;fish-button type=&quot;negative&quot;&gt;Negative&lt;/fish-button&gt;
&lt;fish-button type=&quot;basic&quot;&gt;Basic&lt;/fish-button&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="图标，形状按钮" desc="形状有：方形，圆形">
          <template slot="demo">
            <fish-button shape="circle"><i class="fa fa-search"></i></fish-button>
            <fish-button><i class="fa fa-search"></i></fish-button>
            <fish-button><i class="fa fa-search" style="margin-right: .5em;"></i>Search</fish-button>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-button shape=&quot;circle&quot;&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
&lt;fish-button&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;&lt;/fish-button&gt;
&lt;fish-button&gt;&lt;i class=&quot;fa fa-search&quot; style=&quot;margin-right: .5em;&quot;&gt;&lt;/i&gt;Search&lt;/fish-button&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="按钮大小" desc="大小可选值为<code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>中">
          <template slot="demo">
            <fish-button size="large">Large</fish-button>
            <fish-button>default</fish-button>
            <fish-button size="medium">medium</fish-button>
            <fish-button size="small">Small</fish-button>
            <fish-button size="tiny">tiny</fish-button>
          </template>
          <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;fish-button size=&quot;large&quot;&gt;Large&lt;/fish-button&gt;
&lt;fish-button&gt;default&lt;/fish-button&gt;
&lt;fish-button size=&quot;medium&quot;&gt;medium&lt;/fish-button&gt;
&lt;fish-button size=&quot;small&quot;&gt;Small&lt;/fish-button&gt;
&lt;fish-button size=&quot;tiny&quot;&gt;tiny&lt;/fish-button&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="不可用状态" desc="添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。">
          <template slot="demo">
            <fish-button >Disabled</fish-button>
            <fish-button disabled>Disabled</fish-button>
            <fish-button type="primary">Disabled</fish-button>
            <fish-button disabled type="primary">Disabled</fish-button>
            <fish-button type="positive">Disabled</fish-button>
            <fish-button disabled type="positive">Disabled</fish-button>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-button &gt;Disabled&lt;/fish-button&gt;
&lt;fish-button disabled&gt;Disabled&lt;/fish-button&gt;
&lt;fish-button type=&quot;primary&quot;&gt;Disabled&lt;/fish-button&gt;
&lt;fish-button disabled type=&quot;primary&quot;&gt;Disabled&lt;/fish-button&gt;
&lt;fish-button type=&quot;positive&quot;&gt;Disabled&lt;/fish-button&gt;
&lt;fish-button disabled type=&quot;positive&quot;&gt;Disabled&lt;/fish-button&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="加载中状态" desc="添加 <code>loading</code> 属性即可让按钮处于加载状态">
          <template slot="demo">
            <fish-button loading>Loading</fish-button>
            <fish-button loading type="primary">Loading</fish-button>
            <fish-button loading type="positive">Loading</fish-button>
            <fish-button loading type="basic">Loading</fish-button>
          </template>
          <template slot="codeHtml">
          <pre v-highlightjs><code class="xml">&lt;fish-button loading&gt;Loading&lt;/fish-button&gt;
&lt;fish-button loading type=&quot;primary&quot;&gt;Loading&lt;/fish-button&gt;
&lt;fish-button loading type=&quot;positive&quot;&gt;Loading&lt;/fish-button&gt;
&lt;fish-button loading type=&quot;basic&quot;&gt;Loading&lt;/fish-button&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="按钮组合" desc="可以讲多个button放到buttons容器中">
          <template slot="demo">
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
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-buttons&gt;
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
          </template>
        </code-card>
      </fish-col>
    </fish-row>

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
  import CodeCard from './CodeCard.vue'
  import FishCol from '../../src/components/Col.vue'

  export default {
    components: {
      FishCol,
      CodeCard,
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
