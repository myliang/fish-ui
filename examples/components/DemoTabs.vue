<template>
  <main-layout menuActiveIndex="tabs">
    <h3>Tabs 标签页</h3>
    <code-card title="基本用法" desc="可用通过value指定默认选中的tab">
      <template slot="demo">
        <fish-tabs value="role">
          <fish-tab-pane label="用户管理" index="user">用户管理</fish-tab-pane>
          <fish-tab-pane label="角色管理" index="role">角色管理</fish-tab-pane>
          <fish-tab-pane label="配置管理" index="config">配置管理</fish-tab-pane>
        </fish-tabs>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tabs value=&quot;role&quot;&gt;
  &lt;fish-tab-pane label=&quot;用户管理&quot; index=&quot;user&quot;&gt;用户管理&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;角色管理&quot; index=&quot;role&quot;&gt;角色管理&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;配置管理&quot; index=&quot;config&quot;&gt;配置管理&lt;/fish-tab-pane&gt;
&lt;/fish-tabs&gt;</code></pre>
    </code-card>

    <code-card title="卡片展示" desc="以卡片形式展示，可以 @tab-change 执行变换回调">
      <template slot="demo">
        <fish-tabs type="card" value="user" @tab-change="tabChangeHandler">
          <fish-tab-pane label="用户管理" index="user">用户管理</fish-tab-pane>
          <fish-tab-pane label="角色管理" index="role">角色管理</fish-tab-pane>
          <fish-tab-pane label="配置管理" index="config">配置管理</fish-tab-pane>
        </fish-tabs>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tabs type=&quot;card&quot; value=&quot;user&quot; @tab-change=&quot;tabChangeHandler&quot;&gt;
    &lt;fish-tab-pane label=&quot;用户管理&quot; index=&quot;user&quot;&gt;用户管理&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;角色管理&quot; index=&quot;role&quot;&gt;角色管理&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;配置管理&quot; index=&quot;config&quot;&gt;配置管理&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      tabChangeHandler (index) {
        console.log(&#x27;tab.index: &#x27;, index)
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Tabs Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Tabs Events</h3>
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

    <h3>TabPanel Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data2">
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

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['tab-change(index)', '切换tab时触发', 'TabPanel.index <code>index</code>']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值，必填', 'String, Number', '-'],
          ['type', '类型，可选值：<code>card</code> 可空', 'String', '-']
        ],
        api_data2: [
          ['label', '显示的tab标题，必填', 'String', '-'],
          ['index', '唯一值', 'String', '-']
        ]
      }
    },
    methods: {
      tabChangeHandler (index) {
        console.log('tab.index: ', index)
      }
    }
  }
</script>
