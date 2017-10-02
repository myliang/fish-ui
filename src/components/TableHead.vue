<template>
  <table>
    <colgroup>
      <col v-if="expandedRowRender" width="40"/>
      <col v-for="column in columns" :width="column.width"/>
      <col v-if="scrollY" width="15"/>
    </colgroup>
    <thead>
    <tr v-for="row in rows">
      <th v-if="expandedRowRender">&nbsp;</th>
      <th v-for="column in row" :rowspan="column.rowSpan" :colspan="column.colSpan" :style="{'text-align': column.align || 'left'}">
        <template v-if="'index' === column.type">{{ column.title }}</template>
        <template v-else-if="'checkbox' === column.type">
          <fish-checkbox index="-1" @click="checkboxSelectHandler" ref="checkboxes"></fish-checkbox>
        </template>
        <template v-else-if="column.filters">
          <fish-table-head-filter :title="column.title" :items="column.filters" :index="column.key"
                                 ref="filters" @change="clickFilterHandler">
          </fish-table-head-filter>
        </template>
        <template v-else>
          {{ column.title }}
        </template>
      </th>
      <th v-if="scrollY" style="width: 15px;"></th>
    </tr>
    </thead>
  </table>
</template>
<script>
  import fishTableHeadFilter from './TableHeadFilter.vue'
  import fishCheckbox from './Checkbox.vue'

  export default {
    components: {
      fishCheckbox,
      fishTableHeadFilter
    },
    name: 'fish-table-head',
    props: {
      columns: { type: Array, required: true }, // [{title: '', key: '', width: 100, type: [index, checkbox], render: () => {}, align: 'left'}]
      rows: { type: Array, required: true },
      expandedRowRender: { type: Function, default: null }, // 没有fixed列，方可展开详情
      scrollY: { type: Boolean, default: false }
    },
    methods: {
      checkboxSelectHandler (evt) {
        this.$emit('select', this)
      },
      clickFilterHandler (evt) {
        const { filters } = this.$refs
        const filterMap = {}
        filters.forEach((filter) => {
          if (filter.values.length > 0) filterMap[filter.index] = filter.values
        })
        this.$emit('filter-change', filterMap)
      }
    }
  }
</script>
