<template>
  <main-layout menuActiveIndex="checkbox">
    <h3>Checkbox</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic usage of checkbox.">
          <template slot="demo">
            <fish-checkbox index="x">Checkbox</fish-checkbox>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-checkbox index=&quot;x&quot;&gt;Checkbox&lt;/fish-checkbox&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Disabled" desc="Disabled checkbox">
          <template slot="demo">
            <fish-checkbox index="x" disabled>Checkbox</fish-checkbox>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-checkbox index=&quot;x&quot; disabled&gt;Checkbox&lt;/fish-checkbox&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Checkbox Group" desc="Generate a group of checkboxes from an array.">
          <template slot="demo">
            <fish-checkboxes v-model="checkboxesValue">
              <fish-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:<span v-html="c"></span></fish-checkbox>
            </fish-checkboxes>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-checkboxes v-model=&quot;checkboxesValue&quot;&gt;
    &lt;fish-checkbox :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;checkbox:&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-checkbox&gt;
  &lt;/fish-checkboxes&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {checkboxesValue: []} }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Vertical checkbox group" desc="Vertical checkbox group">
          <template slot="demo">
            <fish-checkboxes v-model="checkboxesValue1" mode="vertical">
              <fish-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:<span v-html="c"></span></fish-checkbox>
            </fish-checkboxes>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-checkboxes v-model=&quot;checkboxesValue1&quot; mode=&quot;vertical&quot;&gt;
    &lt;fish-checkbox :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;checkbox:&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-checkbox&gt;
  &lt;/fish-checkboxes&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {checkboxesValue1: []} }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Checkboxes Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Checkbox Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data2" :key="index">
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
        checkboxesValue: [],
        checkboxesValue1: [],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['mode', 'Can be set to <code>vertical</code><code>horizontal</code>', 'String', 'horizontal'],
          ['disabled', 'Whether checkbox is disabled or not', 'Boolean', 'false']
        ],
        api_data2: [
          ['index', 'unique id of checkbox', 'String, Number', '-'],
          ['disabled', 'whether checkbox is disabled or not', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
