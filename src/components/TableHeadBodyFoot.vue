<template>
  <table :style="{'table-layout': type === 'full' ? 'auto' : 'fixed'}">
    <colgroup>
      <col v-for="column in columns" :width="column.width"/>
      <col v-if="type === 'head' && scrollY" width="15"/>
    </colgroup>
    <fish-table-head :rows="rows" :scrollY="scrollY"
                    @select="headSelectHandler"
                    @filter-change="headFilterChangeHandler"
                    v-if="type === 'full' || type === 'head'"></fish-table-head>
    <fish-table-body :columns="columns" :data="data" :scrollY="scrollY"
                    @select="bodySelectHandler"
                    v-if="type === 'full' || type === 'body'"></fish-table-body>
  </table>
</template>
<script>
  import fishTableHead from './TableHead.vue'
  import fishTableBody from './TableBody.vue'

  export default {
    components: {
      fishTableBody,
      fishTableHead
    },
    name: 'fish-table-head-body-foot',
    props: {
      type: { type: String, default: 'full' }, // full, head, body
      columns: { type: Array, required: true },
      rows: { type: Array },
      data: { type: Array },
      scrollY: { type: Boolean, default: false }
    },
    methods: {
      headSelectHandler (evt) {
        this.$emit('head-select', evt)
      },
      headFilterChangeHandler (evt, filterMap) {
        this.$emit('head-filter-change', evt, filterMap)
      },
      bodySelectHandler (evt) {
        this.$emit('body-select', evt)
      }
    }
  }
</script>
