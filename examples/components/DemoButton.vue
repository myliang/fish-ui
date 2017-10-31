<template>
  <main-layout>
    <h3>Button</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Type" desc="Types of buttons: default, <code>primary</code><code>positive</code><code>negative</code><code>basic</code>">
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
        <code-card title="Icon & Shape" desc="Shapes: <code>square</code><code>circle</code>">
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
        <code-card title="Size" desc="Size: <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>">
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
        <code-card title="Disabled" desc="To mark a button as disabled">
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
        <code-card title="Loading" desc="A loading indicator can be added to a button by setting the <code>loading</code> property on the Button.">
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
        <code-card title="Button Group" desc="Displayed as a button group">
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
        columns: ['Attribute', 'Description', 'Type', 'Default'],
        data: [
          ['type', 'button size, can be set to <code>primary</code><code>positive</code><code>negative</code><code>basic</code> or omitted', 'String', '-'],
          ['shape', 'button shape，can be set to <code>circle</code> or omitted', 'String', '-'],
          ['size', 'button size，can be set to <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>', 'String', '-'],
          ['active', 'set the active status of button', 'Boolean', 'false'],
          ['disabled', 'set the disabled status of button', 'Boolean', 'false'],
          ['loading', 'set the loading status of button', 'Boolean', 'false']
        ],
        datas: [
          ['type', 'can be set to <code>primary</code><code>positive</code><code>negative</code><code>basic</code> or omitted', 'String', '-'],
          ['size', 'can be set to <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>', 'String', '-']
        ]
      }
    },
    mounted () {
      // console.log(':::mounted.button')
    }
  }
</script>
