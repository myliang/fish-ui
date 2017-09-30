<template>
  <main-layout menuActiveIndex="tabs">
    <h3>Tabs 标签页</h3>
    <vui-card>
      <vui-tabs value="role">
        <vui-tab-pane label="用户管理" index="user">用户管理</vui-tab-pane>
        <vui-tab-pane label="角色管理" index="role">角色管理</vui-tab-pane>
        <vui-tab-pane label="配置管理" index="config">配置管理</vui-tab-pane>
      </vui-tabs><br/>
      <vui-tabs type="card" value="user" @tab-change="tabChangeHandler">
        <vui-tab-pane label="用户管理" index="user">用户管理</vui-tab-pane>
        <vui-tab-pane label="角色管理" index="role">角色管理</vui-tab-pane>
        <vui-tab-pane label="配置管理" index="config">配置管理</vui-tab-pane>
      </vui-tabs>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-tabs value=&quot;role&quot;&gt;
  &lt;vui-tab-pane label=&quot;用户管理&quot; index=&quot;user&quot;&gt;用户管理&lt;/vui-tab-pane&gt;
  &lt;vui-tab-pane label=&quot;角色管理&quot; index=&quot;role&quot;&gt;角色管理&lt;/vui-tab-pane&gt;
  &lt;vui-tab-pane label=&quot;配置管理&quot; index=&quot;config&quot;&gt;配置管理&lt;/vui-tab-pane&gt;
&lt;/vui-tabs&gt;&lt;br/&gt;
&lt;vui-tabs type=&quot;card&quot; value=&quot;user&quot; @tab-change=&quot;tabChangeHandler&quot;&gt;
  &lt;vui-tab-pane label=&quot;用户管理&quot; index=&quot;user&quot;&gt;用户管理&lt;/vui-tab-pane&gt;
  &lt;vui-tab-pane label=&quot;角色管理&quot; index=&quot;role&quot;&gt;角色管理&lt;/vui-tab-pane&gt;
  &lt;vui-tab-pane label=&quot;配置管理&quot; index=&quot;config&quot;&gt;配置管理&lt;/vui-tab-pane&gt;
&lt;/vui-tabs&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">tabChangeHandler (index) {
  console.log('tab.index: ', index)
}</code></pre>
      </div>
    </vui-card>

    <h3>Tabs Attributes</h3>
    <div class="vui table attributes">
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
    <div class="vui table attributes">
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
    <div class="vui table attributes">
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
  import VuiCard from '../components/Card.vue'
  import VuiTabs from '../components/Tabs.vue'
  import VuiTabPane from '../components/TabPane.vue'

  export default {
    components: {
      VuiTabPane,
      VuiTabs,
      VuiCard,
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
