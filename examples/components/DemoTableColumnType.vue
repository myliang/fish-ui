<template>
  <fish-table :columns="columns" :data="data" @select="selectHandler"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-column-type',
    data () {
      return {
        columns: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: '', key: 'name', type: 'checkbox', width: '50', align: 'center'},
          {title: '姓名', key: 'name'},
          {title: '年龄', key: 'age'},
          {title: '住址', key: 'address'}
        ],
        data: [
          {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
        ]
      }
    },
    methods: {
      selectHandler (selectedItems) {
        console.log('selectedItems:', selectedItems)
      }
    }
  }
</script>