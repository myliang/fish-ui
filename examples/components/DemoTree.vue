<template>
  <main-layout menuActiveIndex="tree">
    <h3>Tree 树</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="可编辑tree" desc="可以添加，修改，删除树节点，默认展开等功能。">
          <demo-tree-edit slot="demo"></demo-tree-edit>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;addItem&quot;&gt;Add Item&lt;/fish-button&gt;
    &lt;fish-tree :data=&quot;data&quot; v-model=&quot;v&quot; expand
               :on-item-click=&quot;selectHandler&quot;
               :on-item-dblclick=&quot;itemDoubleClick&quot; edited&gt;&lt;/fish-tree&gt;

    &lt;fish-modal title=&quot;add tree item&quot; :visible.sync=&quot;modalShow&quot;&gt;
      &lt;fish-input v-model=&quot;name&quot;&gt;&lt;/fish-input&gt;
      &lt;fish-button @click=&quot;saveItem&quot;&gt;Save Item&lt;/fish-button&gt;
    &lt;/fish-modal&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-tree-edit&#x27;,
    data () {
      return {
        v: &#x27;xihu&#x27;,
        currentItem: null,
        editItem: null,
        treeState: &#x27;&#x27;,
        modalShow: false,
        name: &#x27;&#x27;,
        data: [
          [&#x27;0-0&#x27;, &#x27;0-0&#x27;, [
            [&#x27;0-0-0&#x27;, &#x27;0-0-0&#x27;, [
              [&#x27;0-0-0-0&#x27;, &#x27;0-0-0-0&#x27;],
              [&#x27;0-0-0-1&#x27;, &#x27;0-0-0-1&#x27;],
              [&#x27;0-0-0-2&#x27;, &#x27;0-0-0-2&#x27;]
            ]],
            [&#x27;0-0-1&#x27;, &#x27;0-0-1&#x27;, [
              [&#x27;0-0-1-0&#x27;, &#x27;0-0-1-0&#x27;],
              [&#x27;0-0-1-1&#x27;, &#x27;0-0-1-1&#x27;],
              [&#x27;0-0-1-2&#x27;, &#x27;0-0-1-2&#x27;]
            ]],
            [&#x27;0-0-2&#x27;, &#x27;0-0-2&#x27;]
          ]],
          [&#x27;0-1&#x27;, &#x27;0-1&#x27;, [
            [&#x27;0-1-0-0&#x27;, &#x27;0-1-0-0&#x27;],
            [&#x27;0-1-0-1&#x27;, &#x27;0-1-0-1&#x27;],
            [&#x27;0-1-0-2&#x27;, &#x27;0-1-0-2&#x27;]
          ]],
          [&#x27;0-2&#x27;, &#x27;0-2&#x27;]
        ]
      }
    },
    methods: {
      addItem (evt) {
        this.modalShow = !this.modalShow
      },
      saveItem () {
        const { name, currentItem } = this
        if (!/^\s*$/.test(name)) {
          if (this.treeState !== &#x27;edit&#x27;) {
            currentItem === null ? this.data.push([name, name, []]) : (currentItem[2] = currentItem[2] || []).push([name, name])
          } else {
            currentItem.splice(1, 1, name)
            this.treeState = &#x27;&#x27;
          }
        }
        this.modalShow = false
      },
      selectHandler (item) {
        this.currentItem = item
      },
      itemDoubleClick (item) {
        this.treeState = &#x27;edit&#x27;
        this.currentItem = item
        this.name = item[1]
        this.modalShow = true
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="多选tree" desc="最简单的用法，展示可勾选，可选中。">
          <demo-tree-checkbox slot="demo"></demo-tree-checkbox>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-tree :data=&quot;data&quot; :default-checked-keys=&quot;[&#x27;0-0-1-1&#x27;, &#x27;0-0-2&#x27;]&quot; multiple @item-checked=&quot;itemCheckedHandler&quot;&gt;&lt;/fish-tree&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-tree-checkbox&#x27;,
    data () {
      return {
        values: [],
        data: [{
          title: &#x27;0-0&#x27;,
          key: &#x27;0-0&#x27;,
          children: [{
            title: &#x27;0-0-0&#x27;,
            key: &#x27;0-0-0&#x27;,
            children: [
              { title: &#x27;0-0-0-0&#x27;, key: &#x27;0-0-0-0&#x27; },
              { title: &#x27;0-0-0-1&#x27;, key: &#x27;0-0-0-1&#x27; },
              { title: &#x27;0-0-0-2&#x27;, key: &#x27;0-0-0-2&#x27; }
            ]
          }, {
            title: &#x27;0-0-1&#x27;,
            key: &#x27;0-0-1&#x27;,
            children: [
              { title: &#x27;0-0-1-0&#x27;, key: &#x27;0-0-1-0&#x27; },
              { title: &#x27;0-0-1-1&#x27;, key: &#x27;0-0-1-1&#x27; },
              { title: &#x27;0-0-1-2&#x27;, key: &#x27;0-0-1-2&#x27; }
            ]
          }, {
            title: &#x27;0-0-2&#x27;,
            key: &#x27;0-0-2&#x27;
          }]
        }, {
          title: &#x27;0-1&#x27;,
          key: &#x27;0-1&#x27;,
          children: [
            { title: &#x27;0-1-0-0&#x27;, key: &#x27;0-1-0-0&#x27; },
            { title: &#x27;0-1-0-1&#x27;, key: &#x27;0-1-0-1&#x27; },
            { title: &#x27;0-1-0-2&#x27;, key: &#x27;0-1-0-2&#x27; }
          ]
        }, {
          title: &#x27;0-2&#x27;,
          key: &#x27;0-2&#x27;
        }]
      }
    },
    methods: {
      itemCheckedHandler (checkedKeys) {
        console.log(&#x27;checkedKeys:&#x27;, checkedKeys)
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Tree Attributes</h3>
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

    <h3>Tree Events</h3>
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
  import DemoTreeEdit from './DemoTreeEdit.vue'
  import CodeCard from './CodeCard.vue'
  import DemoTreeCheckbox from './DemoTreeCheckbox.vue'
  export default {
    components: {
      DemoTreeCheckbox,
      CodeCard,
      DemoTreeEdit,
      MainLayout
    },
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['defaultSelectedKey', '默认选中的key', 'String', '-'],
          ['defaultCheckedKeys', '默认checked的key, 再multiple下有效', 'Array', '[]'],
          ['multiple', '是否为多选模式', 'Boolean', 'false'],
          ['expand', '是否自动展开', 'Boolean', 'false'],
          ['data', '展示使用的数据，必填。<strong style="color: red;">其中key的规则是有层级关系的，比如本级00,那么自己就是00-11..., 通过key可以知道上级的key</strong>', 'Array', ''],
          ['edited', '是否可编辑', 'Boolean', 'false'],
          ['delimiter', 'data中key的分割符号', 'String', '-']
        ],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['item-checked(checkedKeys)', '当选中节点的时候触发，触发的基本条件是：必须是多选模式', '选中的key'],
          ['item-dblclick(item)', '双击item触发', '当前节点的数据'],
          ['item-click(item)', '点击item触发', '当前节点的数据']
        ]
      }
    }
  }
</script>