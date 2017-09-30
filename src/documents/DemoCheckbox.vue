<template>
  <main-layout menuActiveIndex="checkbox">
    <h3>Checkbox 多选</h3>
    <vui-card>
      <vui-checkbox index="x">Checkbox</vui-checkbox>
      <vui-checkbox index="x" disabled>Checkbox</vui-checkbox>
      <vui-checkboxes v-model="checkboxesValue">
        <vui-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:<span v-html="c"></span></vui-checkbox>
      </vui-checkboxes>
      <vui-checkboxes v-model="checkboxesValue" mode="vertical">
        <vui-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:<span v-html="c"></span></vui-checkbox>
      </vui-checkboxes>
      [{{checkboxesValue}}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-checkbox index=&quot;x&quot;&gt;Checkbox&lt;/vui-checkbox&gt;
&lt;vui-checkbox index=&quot;x&quot; disabled&gt;Checkbox&lt;/vui-checkbox&gt;
&lt;vui-checkboxes v-model=&quot;checkboxesValue&quot;&gt;
  &lt;vui-checkbox :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;checkbox:&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/vui-checkbox&gt;
&lt;/vui-checkboxes&gt;
&lt;vui-checkboxes v-model=&quot;checkboxesValue&quot; type=&quot;list&quot;&gt;
  &lt;vui-checkbox :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;checkbox:&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/vui-checkbox&gt;
&lt;/vui-checkboxes&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">data () {
  return {
    checkboxesValue: []
  }
}</code></pre>
      </div>
    </vui-card>

    <h3>Checkboxes Attributes</h3>
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

    <h3>Checkbox Attributes</h3>
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
  import VuiCheckbox from '../components/Checkbox.vue'
  import VuiCheckboxes from '../components/Checkboxes.vue'

  export default {
    components: {
      VuiCheckboxes,
      VuiCheckbox,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        checkboxesValue: [],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['mode', '类型，现在支持垂直<code>vertical</code>、水平<code>horizontal</code>', 'String', 'horizontal']
        ],
        api_data2: [
          ['index', '对应的唯一值', 'String, Number', '-'],
          ['disabled', '是否可用', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
