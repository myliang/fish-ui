<template>
  <main-layout menuActiveIndex="table">
    <h3>Table 表格</h3>
    <code-card title="基本用法" desc="简单的表格，最后一列是各种操作。">
      <template slot="demo">
        <demo-table-base></demo-table-base>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-base&#x27;,
    data () {
      return {
        columns: [{title: &#x27;姓名&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;年龄&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;住址&#x27;, key: &#x27;address&#x27;},
          {title: &#x27;操作&#x27;,
            key: &#x27;operate&#x27;,
            render: (h, record, column) =&gt; h(&#x27;a&#x27;, &#x27;编辑&#x27;)}],
        data: [
          {name: &#x27;胡彦斌&#x27;, age: 32, address: &#x27;西湖区湖底公园1号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="指定列类型" desc="列类型可以指定：<code>index</code>, <code>checkbox</code>">
      <template slot="demo">
        <demo-table-column-type></demo-table-column-type>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; @select=&quot;selectHandler&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-column-type&#x27;,
    data () {
      return {
        columns: [
          {title: &#x27;#&#x27;, type: &#x27;index&#x27;, width: &#x27;50&#x27;, align: &#x27;center&#x27;},
          {title: &#x27;&#x27;, key: &#x27;name&#x27;, type: &#x27;checkbox&#x27;, width: &#x27;50&#x27;, align: &#x27;center&#x27;},
          {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;年龄&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;住址&#x27;, key: &#x27;address&#x27;}
        ],
        data: [
          {name: &#x27;胡彦斌&#x27;, age: 32, address: &#x27;西湖区湖底公园1号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;}
        ]
      }
    },
    methods: {
      selectHandler (selectedItems) {
        console.log(&#x27;selectedItems:&#x27;, selectedItems)
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="筛选" desc="使用受控属性对筛选进行控制 <code>columns.filters</code>。">
      <template slot="demo">
        <demo-table-column-filters></demo-table-column-filters>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-column-filters&#x27;,
    data () {
      const data = [
        {name: &#x27;胡彦斌&#x27;, age: 32, address: &#x27;西湖区湖底公园1号&#x27;},
        {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
        {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
        {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;}
      ]
      return {
        columns: [
          {title: &#x27;#&#x27;, type: &#x27;index&#x27;, width: &#x27;50&#x27;, align: &#x27;center&#x27;},
          {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;年龄&#x27;, key: &#x27;age&#x27;, filters: [{label: &#x27;32岁&#x27;, value: 32}, {label: &#x27;35岁&#x27;, value: 35}]},
          {title: &#x27;住址&#x27;, key: &#x27;address&#x27;}
        ],
        data,
        oldData: data
      }
    },
    methods: {
      changeHandler (pagination, filters) {
        let nData = this.oldData
        for (let key of Object.keys(filters)) {
          nData = nData.filter((item) =&gt; filters[key].includes(item[key]))
        }
        this.data = nData
        console.log(&#x27;pagination:&#x27;, pagination, &#x27;, filters:&#x27;, filters)
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="带边框" desc="添加表格边框线。">
      <template slot="demo">
        <demo-table-border></demo-table-border>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; border&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-border&#x27;,
    data () {
      return {
        columns: [{title: &#x27;姓名&#x27;, key: &#x27;name&#x27;}, {title: &#x27;年龄&#x27;, key: &#x27;age&#x27;}, {title: &#x27;住址&#x27;, key: &#x27;address&#x27;}],
        data: [
          {name: &#x27;胡彦斌&#x27;, age: 32, address: &#x27;西湖区湖底公园1号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="可展开" desc="当表格内容较多不能一次性完全展示时。">
      <template slot="demo">
        <demo-table-expand></demo-table-expand>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; :expandedRowRender=&quot;(h, record)=&gt; h(&#x27;fish-button&#x27;, JSON.stringify(record))&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-expand&#x27;,
    data () {
      return {
        columns: [{title: &#x27;姓名&#x27;, key: &#x27;name&#x27;}, {title: &#x27;年龄&#x27;, key: &#x27;age&#x27;}, {title: &#x27;住址&#x27;, key: &#x27;address&#x27;}],
        data: [
          {name: &#x27;胡彦斌&#x27;, age: 32, address: &#x27;西湖区湖底公园1号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;},
          {name: &#x27;吴彦祖&#x27;, age: 35, address: &#x27;西湖区湖底公园5号&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="固定表头" desc="方便一页内展示大量数据">
      <template slot="demo">
        <demo-table-fixed-header></demo-table-fixed-header>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; border height=&quot;200&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-fixed-header&#x27;,
    data () {
      return {
        columns: [
          {title: &#x27;日期&#x27;, key: &#x27;date&#x27;},
          {
            title: &#x27;配送信息&#x27;,
            children: [
              {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;},
              {
                title: &#x27;地址&#x27;,
                children: [
                  {title: &#x27;省份&#x27;, key: &#x27;province&#x27;},
                  {title: &#x27;市区&#x27;, key: &#x27;city&#x27;},
                  {title: &#x27;地址&#x27;, key: &#x27;address&#x27;},
                  {title: &#x27;邮编&#x27;, key: &#x27;zip&#x27;}
                ]
              }
            ]
          }
        ],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-08&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-06&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-07&#x27;, name: &#x27;王小虎&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;,
            address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="横向滚动" desc="方便一行内展示大量数据">
      <template slot="demo">
        <demo-table-scroll-y></demo-table-scroll-y>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-scroll-y&#x27;,
    data () {
      return {
        columns: [
          {title: &#x27;日期&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;性别&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;出生日期&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;大学&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;省份&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;市区&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;地址&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;邮编&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333}]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="横向,纵向滚动" desc="方便一行，列内展示大量数据">
      <template slot="demo">
        <demo-table-scroll-xy></demo-table-scroll-xy>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; border height=&quot;200&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-scroll-xy&#x27;,
    data () {
      return {
        columns: [
          {title: &#x27;日期&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;性别&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;出生日期&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;大学&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;省份&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;市区&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;地址&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;邮编&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333}]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="固定左，右列" desc="适合同时展示有大量数据和数据列">
      <template slot="demo">
        <demo-table-column-fixed></demo-table-column-fixed>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; border height=&quot;200&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-column-fixed&#x27;,
    data () {
      return {
        columns: [
          {title: &#x27;日期&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;, fixed: &#x27;left&#x27;},
          {title: &#x27;姓名&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;性别&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;出生日期&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;大学&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;省份&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;市区&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;地址&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;邮编&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;, fixed: &#x27;right&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;王小虎&#x27;, sex: &#x27;男&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;北京大学&#x27;, province: &#x27;上海&#x27;, city: &#x27;普陀区&#x27;, address: &#x27;上海市普陀区金沙江路 1518 弄&#x27;, zip: 200333}]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <h3>Table Attributes</h3>
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
    <h3>Table Column Attributes</h3>
    <div class="fish table attributes">
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
  import CodeCard from './CodeCard.vue'
  import DemoTableBase from './DemoTableBase.vue'
  import DemoTableColumnType from './DemoTableColumnType.vue'
  import DemoTableColumnFilters from './DemoTableColumnFilters.vue'
  import DemoTableBorder from './DemoTableBorder.vue'
  import DemoTableExpand from './DemoTableExpand.vue'
  import DemoTableFixedHeader from './DemoTableFixedHeader.vue'
  import DemoTableScrollY from './DemoTableScrollY.vue'
  import DemoTableScrollXy from './DemoTableScrollXY.vue'
  import DemoTableColumnFixed from './DemoTableColumnFixed.vue'

  export default {
    components: {
      DemoTableColumnFixed,
      DemoTableScrollXy,
      DemoTableScrollY,
      DemoTableFixedHeader,
      DemoTableExpand,
      DemoTableBorder,
      DemoTableColumnFilters,
      DemoTableColumnType,
      DemoTableBase,
      CodeCard,
      MainLayout
    },
    data () {
      return {
        loading: false,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['columns', '列信息 Column', 'Array', '-'],
          ['data', '数据信息 [{key: v, key2: v2, ...}]', 'Array', '-'],
          ['bordered', '是否带有纵向边框', 'boolean', 'false'],
          ['striped', '是否为斑马纹', 'boolean', 'false'],
          ['loading', '是否加载中', 'boolean', 'false'],
          ['height', '固定高度', 'string, number', '-'],
          ['expandedRowRender', '展开渲染函数,参数record', 'function(h, record)', '-']
        ],
        api_data2: [
          ['title', '标题', 'string', '-'],
          ['key', '列column.key', 'string', '-'],
          ['type', '列类型，可选值：<code>index</code> <code>checkbox</code>', 'string', '-'],
          ['fixed', '列是否固定，可选 <code>left</code> <code>right</code>', 'string', 'left'],
          ['render', '生成复杂数据的渲染函数，参数分别为当前行的值', 'function(h, record, column)', '-'],
          ['filters', '头的筛选菜单项', 'Array[{lable: \'\', value: \'\'}]', '-']
        ]
      }
    },
    methods: {
      changeHandler (pagination, filters) {
        console.log('pagination: ', pagination, '; filters:', filters)
      }
    }
  }
</script>
