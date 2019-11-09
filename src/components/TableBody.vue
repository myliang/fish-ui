<template>
  <table>
    <colgroup>
      <col v-if="rows.length > 0 && expandedRowRender" width="40"/>
      <col v-for="column in columns" :width="column.width" :key="column.key"/>
    </colgroup>
    <tbody>
    <template v-for="(item, rowIndex) in rows">
      <tr :key="rowIndex" v-if="counting === true && rowIndex === 0" class="count">
        <td v-for="column in columns" :style="{'text-align': column.align || 'left'}" :key="column.key">
          <content-render :render="column.render || ((h, item, column, rowIndex) => h('div', item[column.key]))" :params="[item, column, rowIndex]"></content-render>
        </td>
      </tr>
      <tr :key="rowIndex" @click="trClick(item, rowIndex)" v-else>
        <td v-if="expandedRowRender" style="text-align: center;"><i :class="expandIcon" @click.stop="expandHandler(rowIndex)"></i></td>
        <td v-for="column in columns" :style="{'text-align': column.align || 'left'}" :key="column.key">
          <div v-if="'index' === column.type">{{ rowIndex + 1 }}</div>
          <div v-else-if="'checkbox' === column.type">
            <fish-checkbox :index="rowIndex" @click="checkboxSelectHandler" ref="checkboxes"></fish-checkbox>
          </div>
          <content-render :render="column.render || ((h, item, column, rowIndex) => h('div', item[column.key]))" :params="[item, column, rowIndex]" v-else></content-render>
        </td>
      </tr>
      <tr :key="rowIndex" v-if="expandedRowRender && expands[rowIndex]">
        <td :colspan="columns.length + 1">
          <content-render :render="expandedRowRender" :params="[item]"></content-render>
        </td>
      </tr>
    </template>
    <tr v-if="rows.length <= 0 && noMoreText">
      <td class="no-more" :colspan="columns.length">{{ noMoreText }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import fishCheckbox from './Checkbox.vue'
  import ContentRender from './ContentRender.vue'

  export default {
    components: {
      ContentRender,
      fishCheckbox},
    name: 'fish-table-body',
    props: {
      columns: { type: Array, required: true },
      rows: { type: Array, required: true },
      expandIcon: { type: String, default: 'fa fa-angle-right' },
      expandedRowRender: { type: Function, default: undefined }, // 没有fixed列，方可展开详情
      scrollY: { type: Boolean, default: false },
      counting: { type: Boolean, default: false }, // 是否有统计行
      noMoreText: { type: String }
    },
    data () {
      return {
        expands: []
      }
    },
    watch: {
      rows (nVal, oVal) {
        this.expands = nVal.map((row) => false)
      }
    },
    methods: {
      trClick (item, rIndex) {
        this.$emit('tr-click', item, rIndex)
      },
      checkboxSelectHandler (evt) {
        this.$emit('select', evt, this)
      },
      expandHandler (rowIndex) {
        this.expands.splice(rowIndex, 1, !this.expands[rowIndex])
      }
    }
  }
</script>
