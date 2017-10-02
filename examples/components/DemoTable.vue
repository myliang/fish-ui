<template>
  <main-layout menuActiveIndex="table">
    <h3>Table 表格</h3>
    <vui-card>
      <vui-checkbox index="loading" v-model="loading">Loading</vui-checkbox>
      <vui-table :columns="columns_1" :data="data_1" :loading="loading"></vui-table><br/>
      <vui-table :columns="columns_2" :data="data_2" :loading="loading" :expandedRowRender="(record)=>record"></vui-table>
      <br/>
      <vui-table :columns="columns_3" :data="data_3" border  :pagination="pagination" @change="changeHandler"></vui-table>
      <br/>
      <vui-table :columns="columns_4" :data="data_4" border height="200"></vui-table>
      <br/>
      <vui-table :columns="columns_5" :data="data_5" border></vui-table>
      <br/>
      <vui-table :columns="columns_6" :data="data_6" border height="200"></vui-table>
      <br/>
      <vui-table :columns="columns_7" :data="data_7" border height="200"></vui-table>
      <footer slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-checkbox index=&quot;loading&quot; v-model=&quot;loading&quot;&gt;Loading&lt;/vui-checkbox&gt;
&lt;vui-table :columns=&quot;columns_1&quot; :data=&quot;data_1&quot; :loading=&quot;loading&quot;&gt;&lt;/vui-table&gt;&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_2&quot; :data=&quot;data_2&quot; :loading=&quot;loading&quot; :expandedRowRender=&quot;(record)=&gt;record&quot;&gt;&lt;/vui-table&gt;
&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_3&quot; :data=&quot;data_3&quot; border  :pagination=&quot;pagination&quot; @change=&quot;changeHandler&quot;&gt;&lt;/vui-table&gt;
&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_4&quot; :data=&quot;data_4&quot; border height=&quot;200&quot;&gt;&lt;/vui-table&gt;
&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_5&quot; :data=&quot;data_5&quot; border&gt;&lt;/vui-table&gt;
&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_6&quot; :data=&quot;data_6&quot; border height=&quot;200&quot;&gt;&lt;/vui-table&gt;
&lt;br/&gt;
&lt;vui-table :columns=&quot;columns_7&quot; :data=&quot;data_7&quot; border height=&quot;200&quot;&gt;&lt;/vui-table&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">data () {
  return {
    loading: false,
    pagination: {total: 50, current: 1},
    columns_1: [{title: '姓名', key: 'name'}, {title: '年龄', key: 'age'}, {title: '住址', key: 'address'}],
    data_1: [
      {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
    ],
    columns_2: [{title: '姓名', key: 'name'}, {title: '年龄', key: 'age'}, {title: '住址', key: 'address'}],
    data_2: [
      {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
    ],
    columns_3: [
      {title: '#', type: 'index', width: '50', align: 'center'},
      {title: '', key: 'name', type: 'checkbox', width: '50', align: 'center'},
      {title: '姓名', key: 'name'},
      {title: '年龄', key: 'age', filters: [{label: '32岁', value: 32}, {label: '35岁', value: 35}]},
      {title: '住址', key: 'address'}
    ],
    data_3: [
      {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
      {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
    ],
    columns_4: [
      {title: '日期', key: 'date'},
      {
        title: '配送信息',
        children: [
          {title: '姓名', key: 'name'},
          {
            title: '地址',
            children: [
            {title: '省份', key: 'province'},
            {title: '市区', key: 'city'},
            {title: '地址', key: 'address'},
            {title: '邮编', key: 'zip'}
            ]
          }
        ]
      }
    ],
    data_4: [
      {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-08', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-06', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-07', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}
    ],
    columns_5: [
      {title: '日期', key: 'date', width: '200'},
      {title: '姓名', key: 'name', width: '200'},
      {title: '性别', key: 'sex', width: '200'},
      {title: '出生日期', key: 'birthDate', width: '200'},
      {title: '大学', key: 'university', width: '300'},
      {title: '省份', key: 'province', width: '200'},
      {title: '市区', key: 'city', width: '200'},
      {title: '地址', key: 'address', width: '300'},
      {title: '邮编', key: 'zip', width: '200'}],
    data_5: [
      {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海',city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}],
    columns_6: [
      {title: '日期', key: 'date', width: '200'},
      {title: '姓名', key: 'name', width: '200'},
      {title: '性别', key: 'sex', width: '200'},
      {title: '出生日期', key: 'birthDate', width: '200'},
      {title: '大学', key: 'university', width: '300'},
      {title: '省份', key: 'province', width: '200'},
      {title: '市区', key: 'city', width: '200'},
      {title: '地址', key: 'address', width: '300'},
      {title: '邮编', key: 'zip', width: '200'}],
    data_6: [
      {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}],
    columns_7: [
      {title: '日期', key: 'date', width: '200', fixed: 'left'},
      {title: '姓名', key: 'name', width: '200'},
      {title: '性别', key: 'sex', width: '200'},
      {title: '出生日期', key: 'birthDate', width: '200'},
      {title: '大学', key: 'university', width: '300'},
      {title: '省份', key: 'province', width: '200'},
      {title: '市区', key: 'city', width: '200'},
      {title: '地址', key: 'address', width: '300'},
      {title: '邮编', key: 'zip', width: '200', fixed: 'right'}],
    data_7: [
      {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
      {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学',
          province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}]
  },
  methods: {
    changeHandler (pagination, filters) {
      console.log('pagination: ', pagination, '; filters:', filters)
    }
  }
}</code></pre>
      </footer>
    </vui-card>

    <h3>Table Attributes</h3>
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
    <h3>Table Column Attributes</h3>
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
  import VuiCard from '../src/components/Card.vue'
  import VuiTable from '../src/components/Table.vue'
  import VuiRow from '../src/components/Row.vue'
  import VuiCol from '../src/components/Col.vue'
  import VuiCheckbox from '../src/components/Checkbox.vue'

  export default {
    components: {
      VuiCheckbox,
      VuiCol,
      VuiRow,
      VuiTable,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        loading: false,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['columns', '列信息 Column', 'Array', '-'],
          ['data', '数据信息 [{key: v, key2: v2, ...}]', 'Array', '-'],
          ['border', '是否带有纵向边框', 'boolean', 'false'],
          ['stripe', '是否为斑马纹', 'boolean', 'false'],
          ['loading', '是否加载中', 'boolean', 'false'],
          ['height', '固定高度', 'string, number', '-'],
          ['expandedRowRender', '展开渲染函数,参数record', 'function(record)', '-']
        ],
        api_data2: [
          ['title', '标题', 'string', '-'],
          ['key', '列column.key', 'string', '-'],
          ['type', '列类型，可选值：<code>index</code> <code>checkbox</code>', 'string', '-'],
          ['fixed', '列是否固定，可选 <code>left</code> <code>right</code>', 'string', 'left'],
          ['render', '生成复杂数据的渲染函数，参数分别为当前行的值', 'function(record, column)', '-'],
          ['filters', '头的筛选菜单项', 'Array[{lable: \'\', value: \'\'}]', '-']
        ],
        pagination: {total: 50, current: 1},
        columns_1: [{title: '姓名', key: 'name'}, {title: '年龄', key: 'age'}, {title: '住址', key: 'address'}],
        data_1: [
          {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
        ],
        columns_2: [{title: '姓名', key: 'name'}, {title: '年龄', key: 'age'}, {title: '住址', key: 'address'}],
        data_2: [
          {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
        ],
        columns_3: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: '', key: 'name', type: 'checkbox', width: '50', align: 'center'},
          {title: '姓名', key: 'name'},
          {title: '年龄', key: 'age', filters: [{label: '32岁', value: 32}, {label: '35岁', value: 35}]},
          {title: '住址', key: 'address'}
        ],
        data_3: [
          {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
        ],
        columns_4: [
          {title: '日期', key: 'date'},
          {
            title: '配送信息',
            children: [
              {title: '姓名', key: 'name'},
              {
                title: '地址',
                children: [
                {title: '省份', key: 'province'},
                {title: '市区', key: 'city'},
                {title: '地址', key: 'address'},
                {title: '邮编', key: 'zip'}
                ]
              }
            ]
          }
        ],
        data_4: [
          {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-08', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-06', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-07', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}
        ],
        columns_5: [
          {title: '日期', key: 'date', width: '200'},
          {title: '姓名', key: 'name', width: '200'},
          {title: '性别', key: 'sex', width: '200'},
          {title: '出生日期', key: 'birthDate', width: '200'},
          {title: '大学', key: 'university', width: '300'},
          {title: '省份', key: 'province', width: '200'},
          {title: '市区', key: 'city', width: '200'},
          {title: '地址', key: 'address', width: '300'},
          {title: '邮编', key: 'zip', width: '200'}],
        data_5: [
          {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}],
        columns_6: [
          {title: '日期', key: 'date', width: '200'},
          {title: '姓名', key: 'name', width: '200'},
          {title: '性别', key: 'sex', width: '200'},
          {title: '出生日期', key: 'birthDate', width: '200'},
          {title: '大学', key: 'university', width: '300'},
          {title: '省份', key: 'province', width: '200'},
          {title: '市区', key: 'city', width: '200'},
          {title: '地址', key: 'address', width: '300'},
          {title: '邮编', key: 'zip', width: '200'}],
        data_6: [
          {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}],
        columns_7: [
          {title: '日期', key: 'date', width: '200', fixed: 'left'},
          {title: '姓名', key: 'name', width: '200'},
          {title: '性别', key: 'sex', width: '200'},
          {title: '出生日期', key: 'birthDate', width: '200'},
          {title: '大学', key: 'university', width: '300'},
          {title: '省份', key: 'province', width: '200'},
          {title: '市区', key: 'city', width: '200'},
          {title: '地址', key: 'address', width: '300'},
          {title: '邮编', key: 'zip', width: '200', fixed: 'right'}],
        data_7: [
          {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}]
      }
    },
    methods: {
      changeHandler (pagination, filters) {
        console.log('pagination: ', pagination, '; filters:', filters)
      }
    }
  }
</script>
