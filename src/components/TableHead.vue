<template>
  <table>
    <colgroup>
      <col v-if="expandedRowRender" width="40"/>
      <col v-for="(column, cindex) in columns" :width="column.width" :key="cindex"/>
      <col v-if="scrollY" width="15"/>
    </colgroup>
    <thead>
    <tr v-for="(row, rindex) in rows" :key="rindex">
      <th v-if="expandedRowRender">&nbsp;</th>
      <th v-for="(column, cindex) in row" :rowspan="column.rowSpan" :colspan="column.colSpan"
          :style="{'text-align': column.align || 'left'}"
          :class="{'sortable': column.sortable}"
          :key="`${rindex}-${cindex}`"
          @click="thClickHandler(column)">
        <template v-if="'index' === column.type">{{ column.title }}</template>
        <template v-else-if="'checkbox' === column.type">
          <fish-checkbox index="-1" @click="checkboxSelectHandler" ref="checkboxes" :disabled="disabledCheckbox"></fish-checkbox>
        </template>
        <template v-else>
          {{ column.title }}
        </template>
        <strong v-if="column.sortable" v-html="orderKey === column.key ? (orderBy === 'desc' ? '&#8595;' : '&#8593;') : ''"></strong>
        <template v-if="column.filters">
          <fish-table-head-filter :title="column.title" :items="column.filters" :index="column.key"
                                  ref="filters" @change="clickFilterHandler">
          </fish-table-head-filter>
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
      columns: { type: Array, required: true }, // [{title: '', key: '', width: 100, type: [index, checkbox], render: () => {}, align: 'left', sortable: true}]
      rows: { type: Array, required: true },
      disabledCheckbox: { type: Boolean, default: false },
      expandedRowRender: { type: Function, default: null }, // 没有fixed列，方可展开详情
      scrollY: { type: Boolean, default: false }
    },
    data () {
      return {
        orderKey: null,
        orderBy: ''
      }
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
      },
      thClickHandler (column) {
        if (column.sortable) {
          if (this.orderKey !== column.key) {
            this.orderBy = ''
          }
          this.orderKey = column.key
          if (this.orderBy !== '') {
            this.orderBy = this.orderBy === 'desc' ? 'asc' : 'desc'
          } else {
            this.orderBy = 'desc'
          }
          this.$emit('sort-change', this.orderKey, this.orderBy)
        }
      }
    }
  }
</script>
