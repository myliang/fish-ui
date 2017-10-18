<template>
  <fish-table :columns="columns" :data="data" border height="200"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-scroll-xy',
    data () {
      return {
        columns: [
          {title: '日期', key: 'date', width: '200'},
          {title: '姓名', key: 'name', width: '200'},
          {title: '性别', key: 'sex', width: '200'},
          {title: '出生日期', key: 'birthDate', width: '200'},
          {title: '大学', key: 'university', width: '300'},
          {title: '省份', key: 'province', width: '200'},
          {title: '市区', key: 'city', width: '200'},
          {title: '地址', key: 'address', width: '300'},
          {title: '邮编', key: 'zip', width: '200'}],
        data: [
          {date: '2016-05-03', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', sex: '男', birthDate: '2001-01-01', university: '北京大学', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}]
      }
    }
  }
</script>