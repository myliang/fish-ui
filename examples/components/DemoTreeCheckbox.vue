<template>
  <div>
    <fish-tree :data="data" :default-checked-keys="['0-0-1-1', '0-0-2']" multiple></fish-tree> {{ data }}
  </div>
</template>
<script>
  export default {
    name: 'demo-tree-checkbox',
    data () {
      return {
        values: [],
        data: [{
          title: '0-0',
          key: '0-0',
          children: [{
            title: '0-0-0',
            key: '0-0-0',
            children: [
              { title: '0-0-0-0', key: '0-0-0-0' },
              { title: '0-0-0-1', key: '0-0-0-1' },
              { title: '0-0-0-2', key: '0-0-0-2' }
            ]
          }, {
            title: '0-0-1',
            key: '0-0-1',
            children: [
              { title: '0-0-1-0', key: '0-0-1-0' },
              { title: '0-0-1-1', key: '0-0-1-1' },
              { title: '0-0-1-2', key: '0-0-1-2' }
            ]
          }, {
            title: '0-0-2',
            key: '0-0-2'
          }]
        }, {
          title: '0-1',
          key: '0-1',
          children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
          ]
        }, {
          title: '0-2',
          key: '0-2'
        }]
      }
    }
  }
</script>