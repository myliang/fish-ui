<template>
  <fish-table :columns="columns" :data="data" counting @tr-click="trClick"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-base',
    data () {
      return {
        columns: [{title: 'Name', key: 'name'},
          {title: 'age', key: 'age'},
          {title: 'Address', key: 'address'},
          {title: 'Operate',
            key: 'operate',
            render: (h, record, column) => h('a', '编辑')}],
        data: [
          {name: 'yanbin.hu', age: 0, address: 'haidi part 1, xihu, Hangzhou'},
          {name: 'yanzu.wu', age: 1, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu', age: 2, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'}
        ]
      }
    },
    methods: {
      trClick (item, rIndex) {
        console.log('>>>tr-click:', item, rIndex)
      }
    }
  }
</script>
