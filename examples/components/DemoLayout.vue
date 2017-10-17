<template>
  <main-layout menuActiveIndex="layout">
    <h3>Layout 布局</h3>
    <code-card title="基本结构" desc="典型的页面布局">
      <template slot="demo">
        <demo-layout-base></demo-layout-base>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-layout class=&quot;demo&quot;&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      &lt;div slot=&quot;content&quot; style=&quot;height: 120px;&quot;&gt;Content&lt;/div&gt;
      &lt;div slot=&quot;footer&quot;&gt;Footer&lt;/div&gt;
    &lt;/fish-layout&gt;
    &lt;fish-layout sider=&quot;l&quot; class=&quot;demo&quot;&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      &lt;div slot=&quot;sider&quot;&gt;Left&lt;/div&gt;
      &lt;div slot=&quot;content&quot; style=&quot;height: 120px;&quot;&gt;Content&lt;/div&gt;
      &lt;div slot=&quot;footer&quot;&gt;Footer&lt;/div&gt;
    &lt;/fish-layout&gt;
    &lt;fish-layout sider=&quot;tl&quot; class=&quot;demo&quot; style=&quot;margin-bottom: 0;&quot;&gt;
      &lt;div slot=&quot;sider&quot;&gt;Top Left&lt;/div&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      &lt;div slot=&quot;content&quot; style=&quot;height: 120px;&quot;&gt;Content&lt;/div&gt;
      &lt;div slot=&quot;footer&quot;&gt;Footer&lt;/div&gt;
    &lt;/fish-layout&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-layout-base&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .fish.layout.demo {
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .fish.layout.demo .header, .fish.layout.demo .footer{
    background: #7dbcea;
    color: #fff;
  }
  .fish.layout.demo .sider {
    background: #3ba0e9;
  }
  .fish.layout.demo .content {
    background: rgba(16, 142, 233, 1);
    line-height: 120px;
  }
&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="上中下布局" desc="最基本的『上-中-下』布局">
      <template slot="demo">
        <demo-layout-up-middle-down></demo-layout-up-middle-down>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;fish-layout class=&quot;demo2&quot;&gt;
    &lt;nav slot=&quot;header&quot;&gt;
      &lt;div class=&quot;logo&quot;&gt;Logo / System&lt;/div&gt;
      &lt;fish-menu mode=&quot;horizontal&quot; style=&quot;background: transparent; border-bottom: 0;&quot;&gt;
        &lt;fish-option index=&quot;1&quot; content=&quot;Nav 1&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;Nav 2&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-option index=&quot;3&quot; content=&quot;Nav 3&quot;&gt;&lt;/fish-option&gt;
      &lt;/fish-menu&gt;
    &lt;/nav&gt;
    &lt;div slot=&quot;content&quot; style=&quot;height: 100px;&quot;&gt;
      Content...........
    &lt;/div&gt;
    &lt;div slot=&quot;footer&quot;&gt;2017@copyright myliang&lt;/div&gt;
  &lt;/fish-layout&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-layout-up-middle-down&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .fish.layout.demo2 &gt; .header {
    padding: 0 20px;
    background: #e0f0fa;
    margin-bottom: 20px;
  }
  .fish.layout.demo2 &gt; .content {
    margin: 0 20px;
    padding: 0.7em 1em;
  }
&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="顶部－侧边－通栏" desc="同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。">
      <template slot="demo">
        <demo-layout-top-sider-header></demo-layout-top-sider-header>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;fish-layout class=&quot;demo3&quot; sider=&quot;l&quot;&gt;
    &lt;nav slot=&quot;header&quot;&gt;
      &lt;div class=&quot;logo&quot;&gt;Logo / System&lt;/div&gt;
    &lt;/nav&gt;
    &lt;div slot=&quot;sider&quot;&gt;
      &lt;fish-menu mode=&quot;inline&quot; style=&quot;width: 200px;&quot;&gt;
        &lt;fish-option index=&quot;0&quot; content=&quot;内容管理&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-submenu index=&quot;1&quot; mode=&quot;inline&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;用户管理&lt;/template&gt;
          &lt;fish-option index=&quot;1-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;1-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;1-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
        &lt;/fish-submenu&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;统计分析&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-submenu index=&quot;3&quot; mode=&quot;inline&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;submenu&lt;/template&gt;
          &lt;fish-option index=&quot;3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-submenu index=&quot;3-3&quot; mode=&quot;inline&quot;&gt;
            &lt;template slot=&quot;title&quot;&gt;submenu-3&lt;/template&gt;
            &lt;fish-option index=&quot;3-3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
            &lt;fish-option index=&quot;3-3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
            &lt;fish-option index=&quot;3-3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
          &lt;/fish-submenu&gt;
        &lt;/fish-submenu&gt;
      &lt;/fish-menu&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;content&quot;&gt;Content...&lt;/div&gt;
  &lt;/fish-layout&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-layout-top-sider-header&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .fish.layout.demo3 &gt; .header {
    padding: 0;
    background: #e0f0fa;
  }
  .fish.layout.demo3 .has-sider &gt; .content {
    margin: 20px;
    padding: 0.7em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="侧边布局" desc="侧边两列式布局">
      <template slot="demo">
        <demo-layout-sider></demo-layout-sider>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;fish-layout class=&quot;demo3&quot; sider=&quot;tl&quot;&gt;
    &lt;div slot=&quot;sider&quot;&gt;
      &lt;div class=&quot;logo&quot; style=&quot;background: #e0f0fa;&quot;&gt;Logo / System&lt;/div&gt;
      &lt;fish-menu mode=&quot;inline&quot; style=&quot;width: 200px;&quot;&gt;
        &lt;fish-option index=&quot;0&quot; content=&quot;内容管理&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-submenu index=&quot;1&quot; mode=&quot;inline&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;用户管理&lt;/template&gt;
          &lt;fish-option index=&quot;1-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;1-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;1-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
        &lt;/fish-submenu&gt;
        &lt;fish-option index=&quot;2&quot; content=&quot;统计分析&quot;&gt;&lt;/fish-option&gt;
        &lt;fish-submenu index=&quot;3&quot; mode=&quot;inline&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;submenu&lt;/template&gt;
          &lt;fish-option index=&quot;3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-option index=&quot;3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
          &lt;fish-submenu index=&quot;3-3&quot; mode=&quot;inline&quot;&gt;
            &lt;template slot=&quot;title&quot;&gt;submenu-3&lt;/template&gt;
            &lt;fish-option index=&quot;3-3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
            &lt;fish-option index=&quot;3-3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
            &lt;fish-option index=&quot;3-3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
          &lt;/fish-submenu&gt;
        &lt;/fish-submenu&gt;
      &lt;/fish-menu&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;content&quot;&gt;Content...&lt;/div&gt;
  &lt;/fish-layout&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-layout-sider&#x27;
  }
&lt;/script&gt;
&lt;style&gt;
  .fish.layout.demo3 &gt; .header {
    padding: 0;
    background: #e0f0fa;
  }
  .fish.layout.demo3 .has-sider &gt; .content {
    margin: 20px;
    padding: 0.7em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
&lt;/style&gt;</code></pre>
      </template>
    </code-card>

    <h3>Layout Attributes</h3>
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
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'
  import DemoLayoutBase from './DemoLayoutBase.vue'
  import DemoLayoutTopSiderHeader from './DemoLayoutTopSiderHeader.vue'
  import DemoLayoutSider from './DemoLayoutSider.vue'
  import DemoLayoutUpMiddleDown from './DemoLayouUpMiddleDown.vue'

  export default {
    components: {
      DemoLayoutUpMiddleDown,
      DemoLayoutSider,
      DemoLayoutTopSiderHeader,
      DemoLayoutBase,
      CodeCard,
      MainLayout
    },
    data () {
      return {
        columns: ['属性', '说明', '类型', '默认值'],
        data: [
          ['sider', '侧边栏位置，可选值<code>l</code> <code>tl</code> <code>r</code> <code>tr</code>', 'String', '-']
        ]
      }
    }
  }
</script>
<style>


</style>
