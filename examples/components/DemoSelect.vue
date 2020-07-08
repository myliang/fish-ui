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
      <fish-col span="8">
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
      <fish-col span="8">
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
      <fish-col span="8">
        <code-card title="Cascaded" desc="Cascaded selection width search。">
           <template slot="demo">
           <fish-row>
            <fish-col span="10" style="margin-right: 5px;">
            <fish-select search v-model="cascadedValue" @change="changeCascadedHandler">
              <fish-option index="0" content="C0"></fish-option>
              <fish-option index="1" content="C1"></fish-option>
              <fish-option index="2" content="C2"></fish-option>
              <fish-option index="3" content="C3"></fish-option>
              <fish-option index="4" content="C4"></fish-option>
              <fish-option index="5" content="C5"></fish-option>
              <fish-option index="6" content="C6"></fish-option>
              <fish-option index="7" content="C7"></fish-option>
              <fish-option index="8" content="C8"></fish-option>
              <fish-option index="9" content="C9"></fish-option>
              <fish-option index="10" content="C10"></fish-option>
              <fish-option index="11" content="C11"></fish-option>
              <fish-option index="12" content="C12"></fish-option>
              <fish-option index="13" content="C13"></fish-option>
            </fish-select>
            </fish-col>
            <fish-col span="12">
            <fish-select v-model="cascaded2Value">
              <fish-option :index="v" :content="v" :key="v" v-for="v in cascaded2Values"></fish-option>
            </fish-select>
            </fish-col>
           </fish-row>
           </template>
           <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-row&gt;
    &lt;fish-col span=&quot;10&quot; style=&quot;margin-right: 5px;&quot;&gt;
    &lt;fish-select search v-model=&quot;cascadedValue&quot; @change=&quot;changeCascadedHandler&quot;&gt;
      &lt;fish-option index=&quot;0&quot; content=&quot;C0&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;1&quot; content=&quot;C1&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;2&quot; content=&quot;C2&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;3&quot; content=&quot;C3&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;4&quot; content=&quot;C4&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;5&quot; content=&quot;C5&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;6&quot; content=&quot;C6&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;7&quot; content=&quot;C7&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;8&quot; content=&quot;C8&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;9&quot; content=&quot;C9&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;10&quot; content=&quot;C10&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;11&quot; content=&quot;C11&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;12&quot; content=&quot;C12&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;13&quot; content=&quot;C13&quot;&gt;&lt;/fish-option&gt;
    &lt;/fish-select&gt;
    &lt;/fish-col&gt;
    &lt;fish-col span=&quot;12&quot;&gt;
    &lt;fish-select v-model=&quot;cascaded2Value&quot;&gt;
      &lt;fish-option :index=&quot;v&quot; :content=&quot;v&quot; :key=&quot;v&quot; v-for=&quot;v in cascaded2Values&quot;&gt;&lt;/fish-option&gt;
    &lt;/fish-select&gt;
    &lt;/fish-col&gt;
   &lt;/fish-row&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      cascadedValue: &#x27;&#x27;,
      cascaded2Value: &#x27;&#x27;,
      cascaded2Values: [],
    },
    methods: {
      changeCascadedHandler (v) {
        if (v === &#x27;1&#x27;) {
          this.cascaded2Values = [&#x27;test&#x27;, &#x27;test1&#x27;]
        } else {
          this.cascaded2Values = []
          this.cascaded2Value = &#x27;&#x27;
        }
      }
    }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="AutoComplete" desc="AutoComplete selection">
          <template slot="demo">
            <fish-select v-model="autoCompleteValue" :search="searchChangeHandler">
              <fish-option :index="item.index" :content="item.content" v-for="item in autoCompleteData" :key="item.index"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
&lt;fish-select v-model=&quot;autoCompleteValue&quot; :search=&quot;searchChangeHandler&quot;&gt;
  &lt;fish-option :index=&quot;item.index&quot; :content=&quot;item.content&quot; v-for=&quot;item in autoCompleteData&quot; :key=&quot;item.index&quot;&gt;&lt;/fish-option&gt;
&lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data () {
    return {
      autoCompleteValue: &#x27;&#x27;,
      autoCompleteData: []
    }
  },
  methods: {
    searchChangeHandler (v) {
      console.log(&#x27;v:&#x27;, v)
      this.autoCompleteData = [
        {index: &#x60;${v}11&#x60;, content: &#x60;${v}11&#x60;}, 
        {index: &#x60;${v}12&#x60;, content: &#x60;${v}12&#x60;},
        {index: &#x60;${v}13&#x60;, content: &#x60;${v}13&#x60;},
        {index: &#x60;${v}14&#x60;, content: &#x60;${v}14&#x60;},
        {index: &#x60;${v}15&#x60;, content: &#x60;${v}15&#x60;}
      ]
    }
  }
}
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="AutoComplete multiple" desc="AutoComplete multiple selection">
          <template slot="demo">
            <fish-select v-model="autoCompleteMultipleValue" :search="mulitpleSearchChangeHandler" multiple>
              <fish-option :index="item.index" :content="item.content" v-for="item in autoCompleteMultipleData" :key="item.index"></fish-option>
            </fish-select>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
&lt;fish-select v-model=&quot;autoCompleteMultipleValue&quot; :search=&quot;mulitpleSearchChangeHandler&quot; multiple&gt;
  &lt;fish-option :index=&quot;item.index&quot; :content=&quot;item.content&quot; v-for=&quot;item in autoCompleteMultipleData&quot; :key=&quot;item.index&quot;&gt;&lt;/fish-option&gt;
&lt;/fish-select&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  data () {
    return {
      autoCompleteMultipleValue: [],
      autoCompleteMultipleData: []
    }
  },
  methods: {
    mulitpleSearchChangeHandler (v) {
      console.log(&#x27;v:&#x27;, v)
      this.autoCompleteMultipleData = [
        {index: &#x60;${v}11&#x60;, content: &#x60;${v}11&#x60;}, 
        {index: &#x60;${v}12&#x60;, content: &#x60;${v}12&#x60;},
        {index: &#x60;${v}13&#x60;, content: &#x60;${v}13&#x60;},
        {index: &#x60;${v}14&#x60;, content: &#x60;${v}14&#x60;},
        {index: &#x60;${v}15&#x60;, content: &#x60;${v}15&#x60;}
      ]
    }
  }
}
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Select Attributes</h3>
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

    <h3>Select Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in event_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Select Option Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in optionData" :key="index">
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
        cascadedValue: '',
        cascaded2Value: '',
        cascaded2Values: [],
        multipleValues: [],
        multipleValues1: [],
        singleSelectedValue: '',
        singleSelectedValueWthSearch: [],
        singleSelectedValueWthSearch1: '',
        autoCompleteValue: '',
        autoCompleteMultipleValue: [],
        autoCompleteData: [],
        autoCompleteMultipleData: [],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(values)', 'callback when changing', '<code>values</code>']
        ],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'v-model', 'String, Array', ''],
          ['hint', 'placeholder', 'String', 'Please select'],
          ['multiple', 'whether it is multiple or not', 'Boolean', 'false'],
          ['search', 'autoComplete when it is Function, search current item when it is true', '[Boolean, Function]', 'false'],
          ['iconDownArrow', 'icon down arrow', 'String', 'fa fa-angle-down'],
          ['iconClose', 'icon close', 'String', 'fa fa-close'],
          ['iconCloseCircle', 'icon close circle', 'String', 'fa fa-times-circle']
        ],
        optionData: [
          ['index', 'unique key of the select', 'String', '-'],
          ['content', '-content-', 'String', '-'],
          ['disabled', 'whether it is disabled or not', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      changeCascadedHandler (v) {
        if (v === '1') {
          this.cascaded2Values = ['test', 'test1']
        } else {
          this.cascaded2Values = []
          this.cascaded2Value = ''
        }
      },
      changeHandler (values) {
        console.log('values:', values)
      },
      searchChangeHandler (v) {
        console.log('v:', v)
        this.autoCompleteData = [
          {index: `${v}11`, content: `${v}11`}, 
          {index: `${v}12`, content: `${v}12`},
          {index: `${v}13`, content: `${v}13`},
          {index: `${v}14`, content: `${v}14`},
          {index: `${v}15`, content: `${v}15`}
        ]
      },
      mulitpleSearchChangeHandler (v) {
        this.autoCompleteMultipleData = [
          {index: `${v}11`, content: `${v}11`}, 
          {index: `${v}12`, content: `${v}12`},
          {index: `${v}13`, content: `${v}13`},
          {index: `${v}14`, content: `${v}14`},
          {index: `${v}15`, content: `${v}15`}
        ]
      }
    }
  }
</script>
