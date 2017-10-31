<template>
  <fish-table :columns="columns" :data="data" @change="changeHandler"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-column-filters',
    data () {
      const data = [
        {name: 'yanbin.hu', age: 32, address: 'haidi part 1, xihu, Hangzhou'},
        {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'},
        {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'},
        {name: 'yanzu.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'}
      ]
      return {
        columns: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: 'Name', key: 'name'},
          {title: 'age', key: 'age', filters: [{label: '32岁', value: 32}, {label: '35岁', value: 35}]},
          {title: 'Address', key: 'address'}
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