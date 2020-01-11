<template>
  <main-layout menuActiveIndex="tree">
    <h3>Tree</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Edited" desc="Edited Tree">
          <demo-tree-edit slot="demo"></demo-tree-edit>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;addItem&quot;&gt;Add Item&lt;/fish-button&gt;
    &lt;fish-tree :data=&quot;data&quot; :default-selected-key=&quot;&#x27;0-0-0&#x27;&quot; expand
               @item-click=&quot;selectHandler&quot;
               :onItemRender=&quot;treeRenderContent&quot;
               @item-remove=&quot;itemRemove&quot;
               @item-dblclick=&quot;itemDoubleClick&quot; edited&gt;&lt;/fish-tree&gt;

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
        currentItem: null,
        editItem: null,
        treeState: &#x27;&#x27;,
        modalShow: false,
        name: &#x27;&#x27;,
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
      treeRenderContent (item) {
        return &#x60;-${item.title}-&#x60;
      },
      addItem (evt) {
        this.modalShow = !this.modalShow
      },
      itemRemove (data, item, index) {
        data.splice(index, 1)
        console.log(&#x27;remove item:&#x27;, item)
      },
      saveItem () {
        const { name, currentItem } = this
        if (!/^\s*$/.test(name)) {
          if (this.treeState !== &#x27;edit&#x27;) {
            if (currentItem === null) this.data.push({title: name, key: name, children: []})
            else {
              let nary = (currentItem.children || [])
              nary.push({title: name, key: name})
              this.$set(currentItem, &#x27;children&#x27;, nary)
            }
          } else {
            currentItem.title = name
            // currentItem.splice(1, 1, name)
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
        this.name = item.title
        this.modalShow = true
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Multiple" desc="Multiple Tree">
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['defaultSelectedKey', 'the default selected key', 'String', '-'],
          ['defaultCheckedKeys', 'the default checked key when multiple is tree', 'Array', '[]'],
          ['multiple', 'whether it is multiple or not', 'Boolean', 'false'],
          ['expand', 'whether it is expand or not', 'Boolean', 'false'],
          ['checkabled(multiple, item)', 'whether it is checked or not', 'Function', 'multiple'],
          ['data', 'tree data: [{key: "", title: "", expand: true | false, children: []}]', 'Array', ''],
          ['render', 'render show text', 'Function(item)', '() => item.title'],
          ['edited', 'whether it is edited or not', 'Boolean', 'false'],
          ['delimiter', 'the key delimiter in data', 'String', '-']
        ],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['item-checked(checkedKeys)', 'callback when item checked in multiple mode', 'key'],
          ['item-dblclick(item)', 'callback when item dblclick', 'item'],
          ['item-click(item)', 'callback when item click', 'item'],
          ['item-remove(data, item, itemIndex)', 'callback when item is removed', 'item']
        ]
      }
    }
  }
</script>
