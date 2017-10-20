<template>
  <fish-chart-line :labels="labels" :data="data"></fish-chart-line>
</template>
<script>
  export default {
    name: 'demo-chart-line',
    data () {
      return {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        data: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      }
    }
  }
</script>