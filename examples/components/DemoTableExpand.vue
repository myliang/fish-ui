<template>
  <fish-table :columns="columns" :data="data" :expandedRowRender="(h, record)=> h('fish-button', JSON.stringify(record))"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-expand',
    data () {
      return {
        columns: [{title: 'Name', key: 'name'}, {title: 'age', key: 'age'}, {title: 'Address', key: 'address'}],
        data: [
          {name: 'yanbin.hu65', age: 365, address: 'haidi part 1, xihu, Hangzhou'},
          {name: 'yanzu.wu-64', age: 364, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-63', age: 363, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-62', age: 362, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-61', age: 361, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-60', age: 360, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-59', age: 359, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-58', age: 358, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-57', age: 357, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-56', age: 356, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-55', age: 355, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-54', age: 354, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-53', age: 353, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-52', age: 352, address: 'haidi part 5, xihu, Hangzhou'},
          {name: 'yanzu.wu-51', age: 351, address: 'haidi part 5, xihu, Hangzhou'}
        ]
      }
    }
  }
</script>