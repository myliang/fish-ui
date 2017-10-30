<template>
  <fish-table :columns="columns" :data="data"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-base',
    data () {
      return {
        columns: [{title: '姓名', key: 'name'},
          {title: '年龄', key: 'age'},
          {title: '住址', key: 'address'},
          {title: '操作',
            key: 'operate',
            render: (h, record, column) => h('a', '编辑')}],
        data: [
          {name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'},
          {name: '吴彦祖', age: 35, address: '西湖区湖底公园5号'}
        ]
      }
    }
  }
</script>