<template>
  <fish-table :columns="columns" :data="data" border height="200"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-scroll-xy',
    data () {
      return {
        columns: [
          {title: 'Date', key: 'date', width: '200'},
          {title: 'Name', key: 'name', width: '200'},
          {title: 'Sex', key: 'sex', width: '200'},
          {title: 'birthDate', key: 'birthDate', width: '200'},
          {title: 'University', key: 'university', width: '300'},
          {title: 'Province', key: 'province', width: '200'},
          {title: 'City', key: 'city', width: '200'},
          {title: 'Address', key: 'address', width: '300'},
          {title: 'Postcode', key: 'zip', width: '200'}],
        data: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.data = [
          {date: '2016-05-03', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-02', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-04', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333},
          {date: '2016-05-01', name: 'xiaohu.wang', sex: 'male', birthDate: '2001-01-01', university: 'Beijing University', province: 'Shanghai', city: 'Putuo', address: 'Shanghai City Putuo jinshajing 1518 ', zip: 200333}]
      }, 2000)
    }
  }
</script>
