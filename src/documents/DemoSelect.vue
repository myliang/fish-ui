<template>
  <main-layout menuActiveIndex="select">
    <h3>Select 下拉选框</h3>
    <vui-card>
      <vui-select v-model="singleSelectedValue">
        <vui-option index="0" content="Option-1"></vui-option>
        <vui-option index="1" content="Option-2"></vui-option>
        <vui-option index="2" content="Option-3"></vui-option>
        <vui-option index="3" content="Option-4"></vui-option>
        <vui-option index="4" content="Option-5"></vui-option>
      </vui-select>
      <vui-select search v-model="singleSelectedValueWthSearch">
        <vui-option index="10" content="abcd"></vui-option>
        <vui-option index="11" content="abc"></vui-option>
        <vui-option index="12" content="ab"></vui-option>
        <vui-option index="13" content="abd"></vui-option>
        <vui-option index="14" content="abdf"></vui-option>
      </vui-select>
      [{{ singleSelectedValueWthSearch }}]
      <vui-select search multiple v-model="multipleValues" style="width: 300px;" @change="changeHandler">
        <vui-option index="0" content="abcd"></vui-option>
        <vui-option index="1" content="abc"></vui-option>
        <vui-option index="2" content="ab"></vui-option>
        <vui-option index="3" content="abd"></vui-option>
        <vui-option index="4" content="abdf"></vui-option>
        <vui-option index="5" content="abdf5"></vui-option>
        <vui-option index="6" content="abdf6"></vui-option>
        <vui-option index="7" content="abdf7"></vui-option>
      </vui-select>
      [{{ multipleValues }}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-select v-model=&quot;singleSelectedValue&quot;&gt;
  &lt;vui-option index=&quot;0&quot; content=&quot;Option-1&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;1&quot; content=&quot;Option-2&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;2&quot; content=&quot;Option-3&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;3&quot; content=&quot;Option-4&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;4&quot; content=&quot;Option-5&quot;&gt;&lt;/vui-option&gt;
&lt;/vui-select&gt;
&lt;vui-select search v-model=&quot;singleSelectedValueWthSearch&quot;&gt;
  &lt;vui-option index=&quot;10&quot; content=&quot;abcd&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;11&quot; content=&quot;abc&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;12&quot; content=&quot;ab&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;13&quot; content=&quot;abd&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;14&quot; content=&quot;abdf&quot;&gt;&lt;/vui-option&gt;
&lt;/vui-select&gt;
&lt;vui-select search multiple v-model=&quot;multipleValues&quot; style=&quot;width: 300px;&quot; @change=&quot;changeHandler&quot;&gt;
  &lt;vui-option index=&quot;0&quot; content=&quot;abcd&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;1&quot; content=&quot;abc&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;2&quot; content=&quot;ab&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;3&quot; content=&quot;abd&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;4&quot; content=&quot;abdf&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;5&quot; content=&quot;abdf5&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;6&quot; content=&quot;abdf6&quot;&gt;&lt;/vui-option&gt;
  &lt;vui-option index=&quot;7&quot; content=&quot;abdf7&quot;&gt;&lt;/vui-option&gt;
&lt;/vui-select&gt;</code></pre>
      <pre v-highlightjs><code class="javascript">data () {
  return {
    multipleValues: [],
    singleSelectedValue: [],
    singleSelectedValueWthSearch: []
  }
},
methods: {
  changeHandler (values) {
    console.log('values:', values)
  }
}</code></pre>
      </div>
    </vui-card>

    <h3>Select Attributes</h3>
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

    <h3>Select Events</h3>
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

    <h3>Select Option Attributes</h3>
    <div class="vui table attributes">
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
  import VuiCard from '../components/Card.vue'
  import VuiSelect from '../components/Select.vue'
  import VuiOption from '../components/Option.vue'

  export default {
    components: {
      VuiOption,
      VuiSelect,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        multipleValues: [],
        singleSelectedValue: [],
        singleSelectedValueWthSearch: [],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(values)', '选择Option的时候触发', '值数组 <code>values</code>']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值，用v-model绑定', 'Array', '[]'],
          ['hint', '提示信息', 'String', 'Please select'],
          ['multiple', '是否为多选', 'Boolean', 'false'],
          ['search', '是否支持查询', 'Boolean', 'false'],
          ['iconDownArrow', '下拉图标', 'String', 'fa fa-angle-down'],
          ['iconClose', '清空图标', 'String', 'fa fa-close'],
          ['iconCloseCircle', '删除选项(多选)', 'String', 'fa fa-times-circle']
        ],
        optionData: [
          ['index', '唯一标志, 必填', 'String', '-'],
          ['content', '显示内容', 'String', '-'],
          ['disabled', '是否禁用', 'Boolean', 'false']
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
