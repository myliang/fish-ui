<template>
  <main-layout menuActiveIndex="grid">
    <h3>Grid</h3>
    <code-card title="Basic" desc="From the stack to the horizontal arrangement.">
      <template slot="demo">
        <demo-grid-base></demo-grid-base>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;24&quot; class=&quot;demo-col&quot;&gt;col-24&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;12&quot; class=&quot;demo-col&quot;&gt;col-12&lt;/fish-col&gt;
      &lt;fish-col span=&quot;12&quot; class=&quot;demo-col demo-col2&quot;&gt;col-12&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;8&quot; class=&quot;demo-col&quot;&gt;col-8&lt;/fish-col&gt;
      &lt;fish-col span=&quot;8&quot; class=&quot;demo-col demo-col2&quot;&gt;col-8&lt;/fish-col&gt;
      &lt;fish-col span=&quot;8&quot; class=&quot;demo-col&quot;&gt;col-8&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;6&quot; class=&quot;demo-col&quot;&gt;col-6&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot; class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot; class=&quot;demo-col&quot;&gt;col-6&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot; class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col&quot;&gt;col-1&lt;/fish-col&gt;
      &lt;fish-col span=&quot;1&quot; class=&quot;demo-col demo-col2&quot;&gt;col-1&lt;/fish-col&gt;
    &lt;/fish-row&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-grid-base&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .demo-col {
    background: #e0f0fa;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 5px;
  }

  .demo-col2 {
    background: #7dbcea;
  }

&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="Gutter, Offset" desc="<code>offset</code> can set the column to the right side">
      <template slot="demo">
        <demo-grid-gutter-offset></demo-grid-gutter-offset>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-row gutter=&quot;.6&quot;&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row gutter=&quot;.6&quot;&gt;
      &lt;fish-col span=&quot;6&quot; offset=&quot;6&quot;&gt;&lt;div class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot;&gt;&lt;div class=&quot;demo-col demo-col2&quot;&gt;col-6&lt;/div&gt;&lt;/fish-col&gt;
    &lt;/fish-row&gt;
    &lt;fish-row&gt;
      &lt;fish-col span=&quot;18&quot; push=&quot;6&quot;&gt;&lt;div class=&quot;demo-col&quot;&gt;col-18 push-6&lt;/div&gt;&lt;/fish-col&gt;
      &lt;fish-col span=&quot;6&quot; pull=&quot;18&quot;&gt;&lt;div class=&quot;demo-col demo-col2&quot;&gt;col-6 pull-18&lt;/div&gt;&lt;/fish-col&gt;
    &lt;/fish-row&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-grid-gutter-offset&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .demo-col {
    background: #e0f0fa;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 5px;
  }

  .demo-col2 {
    background: #7dbcea;
  }

&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="Fixed, Auto" desc="layout left, right">
      <template slot="demo">
        <demo-grid-fixed></demo-grid-fixed>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;fish-row gutter=&quot;1&quot;&gt;
  &lt;fish-col type=&quot;fixed&quot; :width=&quot;250&quot; class=&quot;demo-col&quot;&gt;Fixed-Width&lt;/fish-col&gt;
  &lt;fish-col type=&quot;auto&quot; class=&quot;demo-col demo-col2&quot;&gt;content: auto width &lt;/fish-col&gt;
&lt;/fish-row&gt;</code></pre>
      </template>
    </code-card>

    <h3>Row Attributes</h3>
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
    <h3>Col Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in colData">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import DemoGridBase from './DemoGridBase.vue'
  import DemoGridFixed from './DemoGridFixed.vue'
  import CodeCard from './CodeCard.vue'
  import DemoGridGutterOffset from './DemoGridGutterOffset.vue'

  export default {
    components: {
      DemoGridGutterOffset,
      CodeCard,
      DemoGridBase,
      DemoGridFixed,
      MainLayout
    },
    data() {
      return {
        columns: ['Attribute', 'Description', 'Type', 'Default'],
        data: [
          ['gutter', 'spacing between grids, unit: em', 'String, Number', '-'],
          ['type', 'layout mode，optional: <code>flex</code>', 'String', 'flex'],
          ['align', 'the vertical alignment of the flex layout: <code>top</code> <code>middle</code> <code>bottom</code>', 'Number', 'top'],
          ['justify', 'horizontal arrangement of the flex layout: <code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>', 'String', 'start']
        ],
        colData: [
          ['type', 'options: percent, fixed, auto', 'String', 'percent'],
          ['span', 'raster number of cells to occupy (1-24)', 'String, Number', '-'],
          ['offset', 'the number of cells to offset Col from the left', 'String, Number', '0'],
          ['push', 'the number of cells that raster is moved to the right', 'String, Number', '0'],
          ['pull', 'the number of cells that raster is moved to the left', 'String, Number', '0']
        ]
      }
    }
  }

</script>
