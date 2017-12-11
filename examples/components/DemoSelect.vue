<template>
  <main-layout menuActiveIndex="select">
    <h3>Select</h3>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-select v-model="singleSelectedValue">
              <fish-option index="0" content="Option-1"></fish-option>
              <fish-option index="1" content="Option-2"></fish-option>
              <fish-option index="2" content="Option-3"></fish-option>
              <fish-option index="3" content="Option-4"></fish-option>
              <fish-option index="4" content="Option-5"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-select v-model=&quot;singleSelectedValue&quot;&gt;
    &lt;fish-option index=&quot;0&quot; content=&quot;Option-1&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1&quot; content=&quot;Option-2&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;2&quot; content=&quot;Option-3&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3&quot; content=&quot;Option-4&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;4&quot; content=&quot;Option-5&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {singleSelectedValue: ''} }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Disabled" desc="Disabled">
          <template slot="demo">
            <fish-select v-model="singleSelectedValue" disabled>
              <fish-option index="0" content="Option-1"></fish-option>
              <fish-option index="1" content="Option-2"></fish-option>
              <fish-option index="2" content="Option-3"></fish-option>
              <fish-option index="3" content="Option-4"></fish-option>
              <fish-option index="4" content="Option-5"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-select v-model=&quot;singleSelectedValue&quot; disabled&gt;
    &lt;fish-option index=&quot;0&quot; content=&quot;Option-1&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1&quot; content=&quot;Option-2&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;2&quot; content=&quot;Option-3&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3&quot; content=&quot;Option-4&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;4&quot; content=&quot;Option-5&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {singleSelectedValue: ''} }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Search" desc="Search the options while expanded.">
          <template slot="demo">
            <fish-select search v-model="singleSelectedValueWthSearch1">
              <fish-option index="10" content="abcd"></fish-option>
              <fish-option index="11" content="abc"></fish-option>
              <fish-option index="12" content="ab"></fish-option>
              <fish-option index="13" content="abd"></fish-option>
              <fish-option index="14" content="abdf"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-select search v-model=&quot;singleSelectedValueWthSearch1&quot;&gt;
    &lt;fish-option index=&quot;10&quot; content=&quot;abcd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;11&quot; content=&quot;abc&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;12&quot; content=&quot;ab&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;13&quot; content=&quot;abd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;14&quot; content=&quot;abdf&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {singleSelectedValueWthSearch1: ''} }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Multiple" desc="Multiple selection">
          <template slot="demo">
            <fish-select multiple v-model="multipleValues" @change="changeHandler">
              <fish-option index="0" content="abcd"></fish-option>
              <fish-option index="1" content="abc"></fish-option>
              <fish-option index="2" content="ab"></fish-option>
              <fish-option index="3" content="abd"></fish-option>
              <fish-option index="4" content="abdf"></fish-option>
              <fish-option index="5" content="abdf5"></fish-option>
              <fish-option index="6" content="abdf6"></fish-option>
              <fish-option index="7" content="abdf7"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-select multiple v-model=&quot;multipleValues&quot; style=&quot;width: 300px;&quot; @change=&quot;changeHandler&quot;&gt;
    &lt;fish-option index=&quot;0&quot; content=&quot;abcd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1&quot; content=&quot;abc&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;2&quot; content=&quot;ab&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3&quot; content=&quot;abd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;4&quot; content=&quot;abdf&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;5&quot; content=&quot;abdf5&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;6&quot; content=&quot;abdf6&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;7&quot; content=&quot;abdf7&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {multipleValues: []} },
    methods: {
      changeHandler (values) {
        console.log(&#x27;values:&#x27;, values)
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Search, Multiple" desc="Search, Multiple selection。">
          <template slot="demo">
            <fish-select search multiple v-model="multipleValues1" @change="changeHandler">
              <fish-option index="0" content="abcd"></fish-option>
              <fish-option index="1" content="abc"></fish-option>
              <fish-option index="2" content="ab"></fish-option>
              <fish-option index="3" content="abd"></fish-option>
              <fish-option index="4" content="abdf"></fish-option>
              <fish-option index="5" content="abdf5"></fish-option>
              <fish-option index="6" content="abdf6"></fish-option>
              <fish-option index="7" content="abdf7"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-select search multiple v-model=&quot;multipleValues1&quot; style=&quot;width: 300px;&quot; @change=&quot;changeHandler&quot;&gt;
    &lt;fish-option index=&quot;0&quot; content=&quot;abcd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;1&quot; content=&quot;abc&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;2&quot; content=&quot;ab&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;3&quot; content=&quot;abd&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;4&quot; content=&quot;abdf&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;5&quot; content=&quot;abdf5&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;6&quot; content=&quot;abdf6&quot;&gt;&lt;/fish-option&gt;
    &lt;fish-option index=&quot;7&quot; content=&quot;abdf7&quot;&gt;&lt;/fish-option&gt;
  &lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {multipleValues1: []} },
    methods: {
      changeHandler (values) {
        console.log(&#x27;values:&#x27;, values)
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Select Attributes</h3>
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

    <h3>Select Events</h3>
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

    <h3>Select Option Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in optionData">
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
        multipleValues: [],
        multipleValues1: [],
        singleSelectedValue: '',
        singleSelectedValueWthSearch: [],
        singleSelectedValueWthSearch1: '',
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(values)', 'callback when changing', '<code>values</code>']
        ],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'v-model', 'String, Array', ''],
          ['hint', 'hint', 'String', 'Please select'],
          ['multiple', 'whether it is multiple or not', 'Boolean', 'false'],
          ['search', 'whether it is search or not', 'Boolean', 'false'],
          ['iconDownArrow', 'icon down arrow', 'String', 'fa fa-angle-down'],
          ['iconClose', 'icon close', 'String', 'fa fa-close'],
          ['iconCloseCircle', 'icon close circle', 'String', 'fa fa-times-circle']
        ],
        optionData: [
          ['index', 'unique key of the select', 'String', '-'],
          ['content', 'content', 'String', '-'],
          ['disabled', 'whether it is disabled or not', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      changeHandler (values) {
        console.log('values:', values)
      }
    }
  }
</script>
