<template>
  <main-layout menuActiveIndex="tree">
    <h3>Tree 树</h3>
    <fish-card>
      <fish-tree :data="data" edited v-model="v" @item-remove="itemRemoveHandler"></fish-tree>[{{ v }}]
      <div slot="footer">
        <pre v-highlightjs><code class="html"></code></pre>
      </div>
    </fish-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        v: 'xihu',
        data: [
          ['zhejiang', 'Zhejiang', [
            ['hangzhou', 'Hangzhou', [
              ['xihu', 'West Lake'],
              ['xihu2', 'West Lake2']
            ]]
          ]],
          ['jiangsu', 'Jiangsu', [
            ['nanjing', 'Nanjing', [
              ['zhonghuamen', 'Zhong Hua Men']
            ]]
          ]]
        ]
      }
    },
    methods: {
      itemRemoveHandler (items, item, index) {
        console.log(':::', items, item, index)
      }
    }
  }
</script>