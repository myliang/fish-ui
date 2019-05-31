<template>
  <main-layout menuActiveIndex="menu">
    <h3>Menu</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-menu default-active="2">
              <fish-option index="0" content="Jack"></fish-option>
              <fish-option index="1" content="Lucy"></fish-option>
              <fish-option index="2" content="Active"></fish-option>
              <fish-option index="3" disabled content="disabled"></fish-option>
              <fish-option index="4" content="Option 4"></fish-option>
              <fish-option index="5" content="Option 5"></fish-option>
              <fish-option index="6" content="Option 6"></fish-option>
            </fish-menu>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-menu default-active=&quot;2&quot;&gt;
  &lt;fish-option index=&quot;0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;3&quot; disabled content=&quot;disabled&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;4&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;5&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;6&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
&lt;/fish-menu&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Horizontal" desc="Horizontal top navigation menu.">
          <template slot="demo">
            <fish-menu mode="horizontal">
              <fish-option index="0" content="Content"></fish-option>
              <fish-option index="1" content="User"></fish-option>
              <fish-option index="2" content="Tongji"></fish-option>
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
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-menu mode=&quot;horizontal&quot; defaultActive=&quot;1&quot;&gt;
  &lt;fish-option index=&quot;0&quot; content=&quot;Content&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;1&quot; content=&quot;User&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;Tongji&quot;&gt;&lt;/fish-option&gt;
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
        </code-card>
      </fish-col>

    </fish-row>

    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Submenu" desc="containing submenu">
          <template slot="demo">
            <fish-menu style="width: 200px;" defaultActive="sys-l1-l21">
              <fish-submenu index="sys">
                <template slot="title">submenu</template>
                <fish-option index="sys-l2" content="Jack"><a href="http://www.baidu.com">Jack Go</a></fish-option>
                <fish-option index="sys-l3" content="Lucy"></fish-option>
                <fish-option index="sys-l4" content="Active"></fish-option>
                <fish-submenu index="sys-l1">
                  <template slot="title">submenu-3</template>
                  <fish-option index="sys-l1-l20" content="Jack"></fish-option>
                  <fish-option index="sys-l1-l21" content="Lucy"></fish-option>
                  <fish-option index="sys-l1-l22" content="Active"></fish-option>
                </fish-submenu>
              </fish-submenu>
              <fish-option index="1" content="Lucy"></fish-option>
              <fish-option index="2" content="Active"></fish-option>
              <fish-option index="3" disabled content="disabled"></fish-option>
            </fish-menu>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-menu style=&quot;width: 200px;&quot;&gt;
  &lt;fish-submenu index=&quot;0&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;submenu&lt;/template&gt;
    &lt;fish-option index=&quot;0-0&quot; content=&quot;Jack&quot;&gt;&lt;a href=&quot;http://www.baidu.com&quot;&gt;Jack Go&lt;/a&gt;&lt;/fish-option&gt;
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
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="inline" desc="Vertical menu with inline submenus.">
          <template slot="demo">
            <fish-menu mode="inline" style="width: 200px;" @change="changeHandler">
              <fish-option index="0" content="Content"></fish-option>
              <fish-submenu index="sys" mode="inline">
                <template slot="title">User</template>
                <fish-option index="sys-jack" content="Jack"></fish-option>
                <fish-option index="sys-lucy" content="Lucy"></fish-option>
                <fish-option index="sys-active" content="Active"></fish-option>
              </fish-submenu>
              <fish-option index="2" content="Tongji"></fish-option>
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
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-menu mode=&quot;inline&quot; style=&quot;width: 200px;&quot; defaultActive=&quot;3-3-0&quot;&gt;
  &lt;fish-option index=&quot;0&quot; content=&quot;Content&quot;&gt;&lt;/fish-option&gt;
  &lt;fish-submenu index=&quot;1&quot; mode=&quot;inline&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;User&lt;/template&gt;
    &lt;fish-option index=&quot;1-0&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1-1&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1-2&quot; content=&quot;Active&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-submenu&gt;
  &lt;fish-option index=&quot;2&quot; content=&quot;Tongji&quot;&gt;&lt;/fish-option&gt;
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
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="optGroup" desc="include optgroup">
          <template slot="demo">
            <fish-menu>
              <fish-optgroup label="Manager">
                <fish-option index="jack" content="Jack"></fish-option>
                <fish-option index="lucy" content="Lucy"></fish-option>
              </fish-optgroup>
              <fish-optgroup label="Engineer">
                <fish-option index="y1" content="Yiminghe"></fish-option>
                <fish-option index="y2" content="Yiminghe2"></fish-option>
              </fish-optgroup>
            </fish-menu>
          </template>
          <template slot="codeHtml">
          <pre v-highlightjs><code class="xml">&lt;fish-menu&gt;
  &lt;fish-optgroup label=&quot;Manager&quot;&gt;
    &lt;fish-option index=&quot;jack&quot; content=&quot;Jack&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;lucy&quot; content=&quot;Lucy&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-optgroup&gt;
  &lt;fish-optgroup label=&quot;Engineer&quot;&gt;
    &lt;fish-option index=&quot;y1&quot; content=&quot;Yiminghe&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;y2&quot; content=&quot;Yiminghe2&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-optgroup&gt;
&lt;/fish-menu&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Menu Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <h3>Submenu Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in subData" :key="index">
          <td v-for="v in item" v-html="v"  :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <h3>Menu Option Attributes (support for slot)</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in optionData" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Menu Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in event_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(index)', 'Callback for when menu is selected', 'Option.index <code>index</code>']
        ],
        columns: ['Attribute', 'Description', 'Type', 'Default'],
        data: [
          ['mode', 'Menu mode, optional: <code>vertical</code><code>horizontal</code><code>inline</code>', 'String', 'vertical'],
          ['size', 'optional: <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>', 'String', '-'],
          ['indexDelimiter', 'option.index delimiter', 'String', '-'],
          ['default-active', 'default active option.index', 'String', '-']
        ],
        subData: [
          ['mode', 'optional: <code>vertical</code><code>horizontal</code><code>inline</code>', 'String', 'vertical'],
          ['trigger', 'trigger event name, optional: <code>hover</code><code>click</code>', 'String', 'hover'],
          ['indexDelimiter', 'option.index delimiter', 'String', '-'],
          ['index', 'unique key of option', 'String', '-']
        ],
        optionData: [
          ['index', 'unique key of option', 'String', '-'],
          ['content', 'show text', 'String', '-'],
          ['disabled', 'whether it is disabled', 'Boolean', 'false']
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
