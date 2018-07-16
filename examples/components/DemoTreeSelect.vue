<template>
  <main-layout menuActiveIndex="tree_select">
    <h3>Tree Select</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Single" desc="Single Tree Select">
          <demo-tree-select-single slot="demo"></demo-tree-select-single>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-tree-select :data=&quot;data&quot; v-model=&quot;v&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-tree-select&gt;
    &lt;fish-tree-select :data=&quot;data&quot; v-model=&quot;v1&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-tree-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-tree-select-single&#x27;,
    data () {
      return {
        v: &#x27;0-0-0-1&#x27;,
        v1: '',
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
      changeHandler (keys) {
        console.log(&#x27;keys:&#x27;, keys)
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Multiple" desc="Multiple Tree Select">
          <demo-tree-select-multiple slot="demo"></demo-tree-select-multiple>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-tree-select :data=&quot;data&quot; v-model=&quot;v&quot; multiple @change=&quot;changeHandler&quot;&gt;&lt;/fish-tree-select&gt;
    &lt;fish-tree-select :data=&quot;data&quot; v-model=&quot;v1&quot; multiple @change=&quot;changeHandler&quot;&gt;&lt;/fish-tree-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-tree-select-multiple&#x27;,
    data () {
      return {
        v: [&#x27;0-0-0-1&#x27;, &#x27;0-2&#x27;],
        v1: [],
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
      changeHandler (keys) {
        console.log(&#x27;keys:&#x27;, keys)
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Tree Select Attributes</h3>
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

    <h3>Tree Select Events</h3>
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
  import CodeCard from './CodeCard.vue'
  import DemoTreeSelectSingle from './DemoTreeSelectSingle.vue'
  import DemoTreeSelectMultiple from './DemoTreeSelectMultiple.vue'

  export default {
    components: {
      DemoTreeSelectMultiple,
      DemoTreeSelectSingle,
      CodeCard,
      MainLayout},
    data () {
      return {
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'v-model', 'Array', '[]'],
          ['data', 'tree data', 'Array', ''],
          ['hint', 'hint', 'String', 'Please'],
          ['multiple', 'whether it is multiple or not', 'Boolean', 'false'],
          ['expand', 'whether it is expand or not', 'Boolean', 'false'],
          ['delimiter', 'data.key delimiter', 'String', '-']
        ],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(keys)', 'callback when changing', 'keys']
        ]
      }
    }
  }
</script>