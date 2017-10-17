<template>
  <main-layout menuActiveIndex="grid">
    <h3>Grid 格栅</h3>
    <code-card title="基本格栅" desc="从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。">
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

    <code-card title="间隔，偏移" desc="栅格常常需要和间隔进行配合，使用 offset 可以将列向右侧偏。">
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
  import CodeCard from './CodeCard.vue'
  import DemoGridGutterOffset from './DemoGridGutterOffset.vue'

  export default {
    components: {
      DemoGridGutterOffset,
      CodeCard,
      DemoGridBase,
      MainLayout
    },
    data() {
      return {
        columns: ['属性', '说明', '类型', '默认值'],
        data: [
          ['gutter', '栅格间隔，单位为em', 'String, Number', '-'],
          ['type', '布局模式，可选 <code>flex</code>', 'String', 'flex'],
          ['align', 'flex 布局下的垂直对齐方式 <code>top</code> <code>middle</code> <code>bottom</code>', 'Number', 'top'],
          ['justify', 'flex 布局下的水平排列方式 <code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code>', 'String', 'start']
        ],
        colData: [
          ['span', '栅格占位格数,必填(可填写1-24中的值)', 'String, Number', '-'],
          ['offset', '栅格左侧的间隔格数，间隔内不可以有栅格', 'String, Number', '0'],
          ['push', '栅格向右移动格数', 'String, Number', '0'],
          ['pull', '栅格向左移动格数', 'String, Number', '0']
        ]
      }
    }
  }

</script>
