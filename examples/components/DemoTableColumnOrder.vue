<template>
  <fish-table :columns="columns" :data="data" @change="changeHandler"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-column-order',
    data () {
      const data = [
        {name: 'a.hu', age: 32, address: 'haidi part 1, xihu, Hangzhou'},
        {name: 'b.wu', age: 33, address: 'haidi part 5, xihu, Hangzhou'},
        {name: 'c.wu', age: 34, address: 'haidi part 5, xihu, Hangzhou'},
        {name: 'd.wu', age: 35, address: 'haidi part 5, xihu, Hangzhou'}
      ]
      return {
        columns: [
          {title: '#', type: 'index', width: '50', align: 'center'},
          {title: 'Name', key: 'name', sortable: true},
          {title: 'age', key: 'age', filters: [{label: '32岁', value: 32}], sortable: true},
          {title: 'Address', key: 'address'}
        ],
        data,
        oldData: data
      }
    },
    methods: {
      changeHandler (pagination, filters, sorter) {
        console.log('::::::::::>>>')
        let nData = this.oldData
        for (let key of Object.keys(filters)) {
          nData = nData.filter((item) => filters[key].includes(item[key]))
        }
        if (sorter) {
          nData.sort((a, b) => {
            let bv = b[sorter.key] + ''
            let av = a[sorter.key] + ''
            return sorter.by === 'desc' ? bv.localeCompare(av) : av.localeCompare(bv)
          })
        }

        this.data = nData
      }
    }
  }
</script>