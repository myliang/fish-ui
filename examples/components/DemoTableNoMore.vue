<template>
  <fish-table :columns="columns" :data="data" noMoreText="no more data>>>"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-no-more',
    data () {
      return {
        columns: [{title: 'Name', key: 'name'},
          {title: 'age', key: 'age'},
          {title: 'Address', key: 'address'},
          {title: 'Operate',
            key: 'operate',
            render: (h, record, column) => h('a', '编辑')}],
        data: []
      }
    }
  }
</script>