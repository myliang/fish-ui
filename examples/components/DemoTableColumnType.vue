<template>
  <fish-table :columns="columns" :data="data" @select="selectHandler" counting></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-column-type',
    data () {
      return {
        columns: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: '', type: 'checkbox', width: '50', align: 'center'},
          {title: 'Name', key: 'name'},
          {title: 'age', key: 'age'},
          {title: 'Address', key: 'address'},
          {title: 'obj#key', key: 'obj#key'}
        ],
        data: [
          {name: 'yanbin.hu', age: 32, address: 'haidi part 1, xihu, Hangzhou', obj: { key: 'key1' }},
          {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou', obj: { key: 'key2' }},
          {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou', obj: { key: 'key3' }},
          {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'}
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