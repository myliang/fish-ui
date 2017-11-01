<template>
  <fish-table :columns="columns" :data="data"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-scroll-y',
    data () {
      return {
        columns: [
          {title: 'Date', key: 'date'},
          {title: 'Name', key: 'name'},
          {title: 'Sex', key: 'sex'},
          {title: 'birthDate', key: 'birthDate'},
          {title: 'University', key: 'university'},
          {title: 'Province', key: 'province'},
          {title: 'City', key: 'city'},
          {title: 'Address', key: 'address'},
          {title: 'Postcode', key: 'zip'}],
        data: [
          {date: '2016-05-03', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-02', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-01', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333}]
      }
    }
  }
</script>