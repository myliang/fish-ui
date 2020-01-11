<template>
  <div>
    <fish-tree-select :data="data" v-model="v" multiple @change="changeHandler"></fish-tree-select>
    <fish-tree-select :data="data" v-model="v1" multiple @change="changeHandler"></fish-tree-select>
  </div>
</template>
<script>
  export default {
    name: 'demo-tree-select-multiple',
    data () {
      return {
        v: ['0-0-0-1', '0-2'],
        v1: [],
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
          title: '0-1-2',
          key: '0-1-2'
        }]
      }
    },
    methods: {
      changeHandler (keys) {
        console.log('keys:', keys)
      }
    }
  }
</script>
