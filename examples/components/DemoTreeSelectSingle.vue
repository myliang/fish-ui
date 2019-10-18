<template>
  <div>
    <fish-tree-select :data="data" v-model="v" @change="changeHandler"></fish-tree-select>
    <fish-tree-select :data="data" v-model="v1" @change="changeHandler"></fish-tree-select>
    <fish-button @click="v = ''">清空数据</fish-button>
  </div>
</template>
<script>
  export default {
    name: 'demo-tree-select-single',
    data () {
      return {
        v: '0-0-0-1',
        v1: '',
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
    },
    methods: {
      changeHandler (keys) {
        console.log('keys:', keys)
      }
    }
  }
</script>