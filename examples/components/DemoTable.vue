<template>
  <main-layout menuActiveIndex="table">
    <h3>Table</h3>
    <code-card title="Basic" desc="Simple table with actions.">
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
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;},
          {title: &#x27;Operate&#x27;,
            key: &#x27;operate&#x27;,
            render: (h, record, column) =&gt; h(&#x27;a&#x27;, &#x27;编辑&#x27;)}],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="No more data" desc="No more data">
      <template slot="demo">
        <demo-table-no-more></demo-table-no-more>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; noMoreText=&quot;no more data&gt;&gt;&gt;&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-no-more&#x27;,
    data () {
      return {
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;},
          {title: &#x27;Operate&#x27;,
            key: &#x27;operate&#x27;,
            render: (h, record, column) =&gt; h(&#x27;a&#x27;, &#x27;编辑&#x27;)}],
        data: []
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Sorting" desc="Sort the data to find or compare data quickly">
      <template slot="demo">
        <demo-table-column-order></demo-table-column-order>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-column-order&#x27;,
    data () {
      const data = [
        {name: &#x27;a.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
        {name: &#x27;b.wu&#x27;, age: 33, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
        {name: &#x27;c.wu&#x27;, age: 34, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
        {name: &#x27;d.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
      ]
      return {
        columns: [
          {title: &#x27;#&#x27;, type: &#x27;index&#x27;, width: &#x27;50&#x27;, align: &#x27;center&#x27;},
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;, sortable: true},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;, filters: [{label: &#x27;32岁&#x27;, value: 32}], sortable: true},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;}
        ],
        data,
        oldData: data
      }
    },
    methods: {
      changeHandler (pagination, filters, sorter) {
        let nData = this.oldData
        for (let key of Object.keys(filters)) {
          nData = nData.filter((item) =&gt; filters[key].includes(item[key]))
        }
        if (sorter) {
          nData.sort((a, b) =&gt; {
            let bv = b[sorter.key] + &#x27;&#x27;
            let av = a[sorter.key] + &#x27;&#x27;
            return sorter.by === &#x27;desc&#x27; ? bv.localeCompare(av) : av.localeCompare(bv)
          })
        }

        this.data = nData
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Pagination" desc="table with pagination">
      <template slot="demo">
        <demo-table-pagination></demo-table-pagination>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot; :pagination=&quot;page&quot;&gt;&lt;/fish-table&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-pagination&#x27;,
    data () {
      return {
        page: {total: 15, current: 1},
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;},
          {title: &#x27;Operate&#x27;,
            key: &#x27;operate&#x27;,
            render: (h, record, column) =&gt; h(&#x27;a&#x27;, &#x27;编辑&#x27;)}],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Column type" desc="optional：<code>index</code>, <code>checkbox</code>">
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
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;}
        ],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
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

    <code-card title="Filters" desc="can be set <code>column.filters</code>。">
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
        {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
        {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
        {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
        {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
      ]
      return {
        columns: [
          {title: &#x27;#&#x27;, type: &#x27;index&#x27;, width: &#x27;50&#x27;, align: &#x27;center&#x27;},
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;, filters: [{label: &#x27;32岁&#x27;, value: 32}, {label: &#x27;35岁&#x27;, value: 35}]},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;}
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

    <code-card title="Bordered" desc="Add border to Table">
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
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;}, {title: &#x27;age&#x27;, key: &#x27;age&#x27;}, {title: &#x27;Address&#x27;, key: &#x27;address&#x27;}],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Expand" desc="Expand Table">
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
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;}, {title: &#x27;age&#x27;, key: &#x27;age&#x27;}, {title: &#x27;Address&#x27;, key: &#x27;address&#x27;}],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Fixed Table Header" desc="Fixed Table Header">
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
          {title: &#x27;Date&#x27;, key: &#x27;date&#x27;},
          {
            title: &#x27;Delivery&#x27;,
            children: [
              {title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
              {
                title: &#x27;Address&#x27;,
                children: [
                  {title: &#x27;Province&#x27;, key: &#x27;province&#x27;},
                  {title: &#x27;City&#x27;, key: &#x27;city&#x27;},
                  {title: &#x27;Address&#x27;, key: &#x27;address&#x27;},
                  {title: &#x27;Postcode&#x27;, key: &#x27;zip&#x27;}
                ]
              }
            ]
          }
        ],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-08&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-06&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-07&#x27;, name: &#x27;xiaohu.wang&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;,
            address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Scroll-Y" desc="scroll y-axis">
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
          {title: &#x27;Date&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Sex&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;birthDate&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;University&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Province&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;City&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Postcode&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333}]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Scroll-XY" desc="scroll x-axis, y-axis">
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
          {title: &#x27;Date&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Sex&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;birthDate&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;University&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Province&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;City&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Postcode&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333}]
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <code-card title="Fixed Column without scroll" desc="Fixed Column Table without scroll">
      <template slot="demo">
        <demo-table-column-fixed-scroll-x></demo-table-column-fixed-scroll-x>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml"></code></pre>
    </code-card>

    <code-card title="Fixed Column" desc="Fixed Column Table">
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
          {title: &#x27;Date&#x27;, key: &#x27;date&#x27;, width: &#x27;200&#x27;, fixed: &#x27;left&#x27;},
          {title: &#x27;Name&#x27;, key: &#x27;name&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Sex&#x27;, key: &#x27;sex&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;birthDate&#x27;, key: &#x27;birthDate&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;University&#x27;, key: &#x27;university&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Province&#x27;, key: &#x27;province&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;City&#x27;, key: &#x27;city&#x27;, width: &#x27;200&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;, width: &#x27;300&#x27;},
          {title: &#x27;Postcode&#x27;, key: &#x27;zip&#x27;, width: &#x27;200&#x27;, fixed: &#x27;right&#x27;}],
        data: [
          {date: &#x27;2016-05-03&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-02&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-04&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333},
          {date: &#x27;2016-05-01&#x27;, name: &#x27;xiaohu.wang&#x27;, sex: &#x27;male&#x27;, birthDate: &#x27;2001-01-01&#x27;,
            university: &#x27;Beijing University&#x27;, province: &#x27;Shanghai&#x27;, city: &#x27;Putuo&#x27;, address: &#x27;Shanghai City Putuo jinshajing 1518 &#x27;, zip: 200333}]
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
    <h3>Table Column Attributes</h3>
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
  import DemoTableBase from './DemoTableBase.vue'
  import DemoTableColumnType from './DemoTableColumnType.vue'
  import DemoTableColumnFilters from './DemoTableColumnFilters.vue'
  import DemoTableBorder from './DemoTableBorder.vue'
  import DemoTableExpand from './DemoTableExpand.vue'
  import DemoTableFixedHeader from './DemoTableFixedHeader.vue'
  import DemoTableScrollY from './DemoTableScrollY.vue'
  import DemoTableScrollXy from './DemoTableScrollXY.vue'
  import DemoTableColumnFixed from './DemoTableColumnFixed.vue'
  import DemoTableColumnFixedScrollX from './DemoTableColumnFixedScrollX.vue'
  import DemoTableNoMore from './DemoTableNoMore.vue'
  import DemoTablePagination from './DemoTablePagination.vue'
  import DemoTableColumnOrder from './DemoTableColumnOrder.vue'

  export default {
    components: {
      DemoTableColumnOrder,
      DemoTablePagination,
      DemoTableNoMore,
      DemoTableColumnFixed,
      DemoTableColumnFixedScrollX,
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['columns', 'table column', 'Array', '-'],
          ['data', 'table data [{key: v, key2: v2, ...}]', 'Array', '-'],
          ['pagination', '[{total: 100, current: 1, rows: 10, noMoreText: }]', 'Object', '-'],
          ['bordered', 'whether it is bordered or not', 'boolean', 'false'],
          ['striped', 'whether it is striped or not', 'boolean', 'false'],
          ['loading', 'whether it is loading or not', 'boolean', 'false'],
          ['height', 'fixed height', 'string, number', '-'],
          ['expandedRowRender(h, record)', 'callback when table row have expanded', 'function(h, record)', '-']
        ],
        api_data2: [
          ['title', 'column.title', 'string', '-'],
          ['key', 'column.key', 'string', '-'],
          ['type', 'optional：<code>index</code> <code>checkbox</code>', 'string', '-'],
          ['fixed', 'the fixed position: <code>left</code> <code>right</code>', 'string', 'left'],
          ['sortable', 'column.sortable', 'boolean', 'false'],
          ['render(h, record, column)', 'customize cell render', 'function', '-'],
          ['filters', 'column filters', 'Array[{lable: \'\', value: \'\'}]', '-']
        ]
      }
    },
    methods: {
      changeHandler (currentPage, filters) {
        console.log('pagination: ', currentPage, '; filters:', filters)
      }
    }
  }
</script>
