<template>
  <fish-table :columns="columns" :data="data" @change="changeHandler"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-column-filters',
    data () {
      const data = [
        {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
        {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
        {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
        {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
      ]
      return {
        columns: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: '姓名', key: 'name'},
          {title: '年龄', key: 'age', filters: [{label: '32岁', value: 32}, {label: '35岁', value: 35}]},
          {title: '住址', key: 'address'}
        ],
        data,
        oldData: data
      }
    },
    methods: {
      changeHandler (pagination, filters) {
        let nData = this.oldData
        for (let key of Object.keys(filters)) {
          nData = nData.filter((item) => filters[key].includes(item[key]))
        }
        this.data = nData
        console.log('pagination:', pagination, ', filters:', filters)
      }
    }
  }
</script>