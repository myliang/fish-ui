<template>
  <main-layout menuActiveIndex="tag">
    <h3>Tag 标签</h3>
    <vui-card>
      <vui-tag index="1">标签</vui-tag>
      <vui-tag index="2">TAG</vui-tag>
      <vui-tag index="3" @close="{}">关闭</vui-tag>
      <vui-tag index="3" color="primary">关闭</vui-tag><br/><br/>
      <vui-tags :items="tags" edited @close="groupCloseHandler" @add="addCheckHandler"></vui-tags> {{ tags }}
      <vui-tags :items="tags1" @click="checkClickHandler"></vui-tags>{{ tags1 }}
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-tag index=&quot;1&quot;&gt;标签&lt;/vui-tag&gt;
&lt;vui-tag index=&quot;2&quot;&gt;TAG&lt;/vui-tag&gt;
&lt;vui-tag index=&quot;3&quot; @close=&quot;{}&quot;&gt;关闭&lt;/vui-tag&gt;
&lt;vui-tag index=&quot;3&quot; color=&quot;primary&quot;&gt;关闭&lt;/vui-tag&gt;&lt;br/&gt;&lt;br/&gt;
&lt;vui-tags :items=&quot;tags&quot; edited @close=&quot;groupCloseHandler&quot; @add=&quot;addCheckHandler&quot;&gt;&lt;/vui-tags&gt;
&lt;vui-tags :items=&quot;tags1&quot; @click=&quot;checkClickHandler&quot;&gt;&lt;/vui-tags&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">data () {
  return {
    tags1: [[true, 'tag1-radio'], [false, 'tag2-radio'], [false, 'tag3-radio']],
    tags: ['tag1', 'tag2', 'tag3']
  }
},
methods: {
  checkClickHandler (event, index, checked) {
    this.tags1.splice(index, 1, [checked, this.tags1[index][1]])
  },
  addCheckHandler (event, v) {
    this.tags.push(v)
  },
  groupCloseHandler (event, index) {
    this.tags.splice(index, 1)
  }
}</code></pre>
      </div>
    </vui-card>

    <h3>Tags Attributes</h3>
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

    <h3>Tags Events</h3>
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

    <h3>Tag Attributes</h3>
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

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['size', '大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['edited', '是否可编辑', 'Boolean', 'false'],
          ['items', '标签项', 'Array', '-']
        ],
        api_data2: [
          ['icon', '图标, fontawesome icon 字体', 'String', '-'],
          ['index', '子菜单唯一标志, 必填', 'string', '-'],
          ['size', '设置菜单大小，可选值为<code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['color', '颜色类型', 'String', '-']
        ],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['add (v)', '添加新标签触发，当可编辑是，此方法会触发', '输入的内容'],
          ['close (index)', '删除标签触发，当可编辑是，此方法会触发', '标签组中标签的索引index'],
          ['click (index, checked)', '点击标签触发，当不可编辑是，此方法会触发', '标签组中标签的索引index, checked是否选中']
        ],
        tags1: [[true, 'tag1-radio'], [false, 'tag2-radio'], [false, 'tag3-radio']],
        tags: ['tag1', 'tag2', 'tag3']
      }
    },
    methods: {
      checkClickHandler (index, checked) {
        this.tags1.splice(index, 1, [checked, this.tags1[index][1]])
      },
      addCheckHandler (v) {
        this.tags.push(v)
      },
      groupCloseHandler (index) {
        this.tags.splice(index, 1)
      }
    }
  }
</script>
