<template>
  <fish-table :columns="columns" :data="data" border height="200"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-fixed-header',
    data () {
      return {
        columns: [
          {title: 'Date', key: 'date'},
          {
            title: 'Delivery',
            children: [
              {title: 'Name', key: 'name'},
              {
                title: 'Address',
                children: [
                  {title: 'Province', key: 'province'},
                  {title: 'City', key: 'city'},
                  {title: 'Address', key: 'address'},
                  {title: 'Postcode', key: 'zip'}
                ]
              }
            ]
          }
        ],
        data: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.data = [
          {date: '2016-05-03', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-02', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-01', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-08', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-06', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-07', name: 'xiaohu.wang', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333}]
      }, 2000)
    }
  }
</script>
