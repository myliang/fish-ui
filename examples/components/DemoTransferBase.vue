<template>
  <fish-transfer v-model="v" :data="data">
  </fish-transfer>
</template>
<script>
  export default {
    name: 'demo-transfer-base',
    data () {
      return {
        data: [
          { key: 'o_1', label: 'option 1', disabled: true },
          { key: 'o_2', label: 'option 2' },
          { key: 'o_3', label: 'option 3' },
          { key: 'o_4', label: 'option 4' },
          { key: 'o_5', label: 'option 5', disabled: true },
          { key: 'o_6', label: 'option 6' },
          { key: 'o_7', label: 'option 7' },
          { key: 'o_8', label: 'option 8' },
          { key: 'o_9', label: 'option 9' },
          { key: 'o_10', label: 'option 10' },
          { key: 'o_11', label: 'option 11' },
          { key: 'o_12', label: 'option 12' },
          { key: 'o_13', label: 'option 13' },
          { key: 'o_14', label: 'option 14' },
          { key: 'o_15', label: 'option 15' }
        ],
        v: []
      }
    }
  }
</script>