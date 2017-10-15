<template>
  <main-layout menuActiveIndex="tree">
    <h3>Tree 树</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="可编辑tree" desc="可以添加，修改，删除树节点，默认展开等功能。">
          <demo-tree-edit slot="demo"></demo-tree-edit>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="vue">&lt;template&gt;
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
            <pre v-highlightjs><code class="vue"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
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
      }
    }
  }
</script>