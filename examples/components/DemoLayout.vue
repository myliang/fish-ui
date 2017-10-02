<template>
  <main-layout menuActiveIndex="layout">
    <h3>Layout 布局</h3>
    <fish-card>
      <fish-layout class="demo">
        <div slot="header">Header</div>
        <div slot="content" style="height: 120px;">Content</div>
        <div slot="footer">Footer</div>
      </fish-layout>
      <fish-layout sider="l" class="demo">
        <div slot="header">Header</div>
        <div slot="sider">Left</div>
        <div slot="content" style="height: 120px;">Content</div>
        <div slot="footer">Footer</div>
      </fish-layout>
      <fish-layout sider="tl" class="demo" style="margin-bottom: 0;">
        <div slot="sider">Top Left</div>
        <div slot="header">Header</div>
        <div slot="content" style="height: 120px;">Content</div>
        <div slot="footer">Footer</div>
      </fish-layout>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-layout class=&quot;demo&quot;&gt;
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
    &lt;fish-layout sider=&quot;tl&quot; class=&quot;demo&quot;&gt;
      &lt;div slot=&quot;sider&quot;&gt;Top Left&lt;/div&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      &lt;div slot=&quot;content&quot; style=&quot;height: 120px;&quot;&gt;Content&lt;/div&gt;
      &lt;div slot=&quot;footer&quot;&gt;Footer&lt;/div&gt;
    &lt;/fish-layout&gt;</code></pre>
      </div>
    </fish-card>
    <br/>

    <fish-card>
      <fish-layout class="demo2">
        <nav slot="header">
          <div class="logo">Logo / System</div>
          <fish-menu mode="horizontal" style="background: transparent; border-bottom: 0;">
            <fish-option index="1" content="Nav 1"></fish-option>
            <fish-option index="2" content="Nav 2"></fish-option>
            <fish-option index="3" content="Nav 3"></fish-option>
          </fish-menu>
        </nav>
        <div slot="content" style="height: 100px;">
          Content...........
        </div>
        <div slot="footer">2017@copyright myliang</div>
      </fish-layout>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-layout class=&quot;demo2&quot;&gt;
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
&lt;/fish-layout&gt;</code></pre><br/>
<pre v-highlightjs><code class="css">.logo {
  padding: 0.7em .8em;
  font-weight: bold;
  font-size: 1.2rem;
}
.fish.layout > .header {
  padding: 0 50px;
  background: #e0f0fa;
  margin-bottom: 20px;
}
.fish.layout > .content {
  margin: 0 50px;
  padding: 0.7em 1em;
}</code></pre>
      </div>
    </fish-card>
    <br/>
    <fish-card>
      <fish-layout class="demo3" sider="l">
        <nav slot="header">
          <div class="logo">Logo / System</div>
        </nav>
        <div slot="sider">
          <fish-menu mode="inline" style="width: 200px;">
            <fish-option index="0" content="内容管理"></fish-option>
            <fish-submenu index="1" mode="inline">
              <template slot="title">用户管理</template>
              <fish-option index="1-0" content="Jack"></fish-option>
              <fish-option index="1-1" content="Lucy"></fish-option>
              <fish-option index="1-2" content="Active"></fish-option>
            </fish-submenu>
            <fish-option index="2" content="统计分析"></fish-option>
            <fish-submenu index="3" mode="inline">
              <template slot="title">submenu</template>
              <fish-option index="3-0" content="Jack"></fish-option>
              <fish-option index="3-1" content="Lucy"></fish-option>
              <fish-option index="3-2" content="Active"></fish-option>
              <fish-submenu index="3-3" mode="inline">
                <template slot="title">submenu-3</template>
                <fish-option index="3-3-0" content="Jack"></fish-option>
                <fish-option index="3-3-1" content="Lucy"></fish-option>
                <fish-option index="3-3-2" content="Active"></fish-option>
              </fish-submenu>
            </fish-submenu>
          </fish-menu>
        </div>
        <div slot="content">Content...</div>
      </fish-layout>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-layout class=&quot;demo3&quot; sider=&quot;l&quot;&gt;
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
&lt;/fish-layout&gt;</code></pre>
      </div>
    </fish-card>
    <br/>
    <fish-card>
      <fish-layout class="demo3" sider="tl">
        <div slot="sider">
          <div class="logo" style="background: #e0f0fa;">Logo / System</div>
          <fish-menu mode="inline" style="width: 200px;">
            <fish-option index="0" content="内容管理"></fish-option>
            <fish-submenu index="1" mode="inline">
              <template slot="title">用户管理</template>
              <fish-option index="1-0" content="Jack"></fish-option>
              <fish-option index="1-1" content="Lucy"></fish-option>
              <fish-option index="1-2" content="Active"></fish-option>
            </fish-submenu>
            <fish-option index="2" content="统计分析"></fish-option>
            <fish-submenu index="3" mode="inline">
              <template slot="title">submenu</template>
              <fish-option index="3-0" content="Jack"></fish-option>
              <fish-option index="3-1" content="Lucy"></fish-option>
              <fish-option index="3-2" content="Active"></fish-option>
              <fish-submenu index="3-3" mode="inline">
                <template slot="title">submenu-3</template>
                <fish-option index="3-3-0" content="Jack"></fish-option>
                <fish-option index="3-3-1" content="Lucy"></fish-option>
                <fish-option index="3-3-2" content="Active"></fish-option>
              </fish-submenu>
            </fish-submenu>
          </fish-menu>
        </div>
        <div slot="content">Content...</div>
      </fish-layout>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-layout class=&quot;demo3&quot; sider=&quot;tl&quot;&gt;
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
&lt;/fish-layout&gt;</code></pre>
      </div>
    </fish-card>

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

  export default {
    components: {
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
  .logo {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .fish.layout.demo2 > .header {
    padding: 0 20px;
    background: #e0f0fa;
    margin-bottom: 20px;
  }
  .fish.layout.demo2 > .content {
    margin: 0 20px;
    padding: 0.7em 1em;
  }

  .fish.layout.demo3 > .header {
    padding: 0;
    background: #e0f0fa;
  }
  .fish.layout.demo3 .has-sider > .content {
    margin: 20px;
    padding: 0.7em 1em;
  }
  .fish.layout.demo3 .logo {
    padding: 1em;
  }
</style>
