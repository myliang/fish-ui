<template>
  <main-layout menuActiveIndex="menu">
    <h3>Button 按钮</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <fish-card>
          <fish-menu default-active="2">
            <fish-option index="0" content="Jack"></fish-option>
            <fish-option index="1" content="Lucy"></fish-option>
            <fish-option index="2" content="Active"></fish-option>
            <fish-option index="3" disabled content="disabled"></fish-option>
            <fish-option index="4" content="Option 4"></fish-option>
            <fish-option index="5" content="Option 5"></fish-option>
            <fish-option index="6" content="Option 6"></fish-option>
          </fish-menu>
          <template slot="footer">
            <pre v-highlightjs><code class="html">&lt;fish-menu default-active=&quot;2&quot;&gt;
  &lt;fish-option index=&quot;0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;4&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;5&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;6&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
&lt;/fish-menu&gt;</code></pre>
          </template>
        </fish-card>
      </fish-col>
      <fish-col span="12">
        <fish-card>
          <fish-menu mode="horizontal" defaultActive="3-3-1">
            <fish-option index="0" content="内容管理"></fish-option>
            <fish-option index="1" content="用户管理"></fish-option>
            <fish-option index="2" content="统计分析"></fish-option>
            <fish-submenu index="3">
              <template slot="title">submenu</template>
              <fish-option index="3-0" content="Jack"></fish-option>
              <fish-option index="3-1" content="Lucy"></fish-option>
              <fish-option index="3-2" content="Active"></fish-option>
              <!--<fish-option index="3-3">Option-3</fish-option>-->
              <fish-submenu index="3-3">
                <template slot="title">submenu-3</template>
                <fish-option index="3-3-0" content="Jack"></fish-option>
                <fish-option index="3-3-1" content="Lucy"></fish-option>
                <fish-option index="3-3-2" content="Active"></fish-option>
              </fish-submenu>
              <fish-option index="3-4" content="Option-4">Option-4</fish-option>
              <fish-option index="3-5" content="Option-5">Option-5</fish-option>
            </fish-submenu>
          </fish-menu>
          <template slot="footer">
            <pre v-highlightjs><code class="html">&lt;fish-menu mode=&quot;horizontal&quot; defaultActive=&quot;1&quot;&gt;
  &lt;fish-option index=&quot;0&quot; content=&quot;内容管理&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;1&quot; content=&quot;用户管理&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;统计分析&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-submenu index=&quot;3&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;submenu&lt;/template&gt;
    &lt;fish-option index=&quot;3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
    &lt;!--&lt;fish-option index=&quot;3-3&quot;&gt;Option-3&lt;/fish-option&gt;--&gt;
    &lt;fish-submenu index=&quot;3-3&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;submenu-3&lt;/template&gt;
      &lt;fish-option index=&quot;3-3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;3-3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;3-3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
    &lt;/fish-submenu&gt;
    &lt;fish-option index=&quot;3-4&quot; content=&quot;Option-4&quot;&gt;Option-4&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3-5&quot; content=&quot;Option-5&quot;&gt;Option-5&lt;/fish-option&gt;
  &lt;/fish-submenu&gt;
&lt;/fish-menu&gt;</code></pre>
          </template>
        </fish-card>
      </fish-col>

    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <fish-card>
          <fish-menu style="width: 200px;" defaultActive="0-3-1">
            <fish-submenu index="0">
              <template slot="title">submenu</template>
              <fish-option index="0-0" content="Jack"></fish-option>
              <fish-option index="0-1" content="Lucy"></fish-option>
              <fish-option index="0-2" content="Active"></fish-option>
              <fish-submenu index="0-3">
                <template slot="title">submenu-3</template>
                <fish-option index="0-3-0" content="Jack"></fish-option>
                <fish-option index="0-3-1" content="Lucy"></fish-option>
                <fish-option index="0-3-2" content="Active"></fish-option>
              </fish-submenu>
            </fish-submenu>
            <fish-option index="1" content="Lucy"></fish-option>
            <fish-option index="2" content="Active"></fish-option>
            <fish-option index="3" disabled content="disabled"></fish-option>
          </fish-menu>
          <template slot="footer">
            <pre v-highlightjs><code class="html">&lt;fish-menu style=&quot;width: 200px;&quot;&gt;
  &lt;fish-submenu index=&quot;0&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;submenu&lt;/template&gt;
    &lt;fish-option index=&quot;0-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;0-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;0-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-submenu index=&quot;0-3&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;submenu-3&lt;/template&gt;
      &lt;fish-option index=&quot;0-3-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;0-3-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;0-3-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
    &lt;/fish-submenu&gt;
  &lt;/fish-submenu&gt;
  &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/fish-option&gt;
&lt;/fish-menu&gt;</code></pre>
          </template>
        </fish-card>
      </fish-col>
      <fish-col span="12">
        <fish-card>
          <fish-menu mode="inline" style="width: 200px;" defaultActive="3-3-0" @change="changeHandler">
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

          <template slot="footer">
            <pre v-highlightjs><code class="html">&lt;fish-menu mode=&quot;inline&quot; style=&quot;width: 200px;&quot; defaultActive=&quot;3-3-0&quot;&gt;
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
&lt;/fish-menu&gt;</code></pre>
          </template>
        </fish-card>
      </fish-col>
    </fish-row>

    <h3>Menu Attributes</h3>
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
    <h3>Submenu Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in subData">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <h3>Menu Option Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in optionData">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Menu Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in event_data">
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
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change', '选择菜单项item的时候触发', 'Option.index <code>index</code>']
        ],
        columns: ['属性', '说明', '类型', '默认值'],
        data: [
          ['mode', '菜单类型，现在支持垂直<code>vertical</code>、水平<code>horizontal</code>、和内嵌模式<code>inline</code>三种', 'String', 'vertical'],
          ['size', '设置菜单大小，可选值为<code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['default-active', '初始激活菜单的 index', 'String', '-']
        ],
        subData: [
          ['mode', '子菜单类型，现在支持垂直<code>vertical</code>、水平<code>horizontal</code>、和内嵌模式<code>inline</code>三种', 'String', 'vertical'],
          ['trigger', '子菜单展示触发事件，可选值<code>hover</code> <code>click</code>', 'String', 'hover'],
          ['index', '子菜单唯一标志, 必填', 'String', '-']
        ],
        optionData: [
          ['index', '唯一标志, 必填', 'String', '-'],
          ['content', '显示内容', 'String', '-'],
          ['disabled', '是否禁用', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      changeHandler (evt, index) {
        console.log('::::index=', index)
      }
    }
  }
</script>
