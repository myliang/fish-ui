<template>
  <fish-table :columns="columns" :data="data" border height="200"></fish-table>
</template>
<script>
  export default {
    name: 'demo-table-fixed-header',
    data () {
      return {
        columns: [
          {title: '日期', key: 'date'},
          {
            title: '配送信息',
            children: [
              {title: '姓名', key: 'name'},
              {
                title: '地址',
                children: [
                  {title: '省份', key: 'province'},
                  {title: '市区', key: 'city'},
                  {title: '地址', key: 'address'},
                  {title: '邮编', key: 'zip'}
                ]
              }
            ]
          }
        ],
        data: [
          {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-08', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-06', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-07', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}
        ]
      }
    }
  }
</script>