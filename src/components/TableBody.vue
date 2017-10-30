<template>
  <table>
    <colgroup>
      <col v-if="expandedRowRender" width="40"/>
      <col v-for="column in columns" :width="column.width"/>
    </colgroup>
    <tbody>
    <template  v-for="(item, rowIndex) in rows">
    <tr>
      <td v-if="expandedRowRender" style="text-align: center;"><i :class="expandIcon" @click.stop="expandHandler(rowIndex)"></i></td>
      <td v-for="column in columns" :style="{'text-align': column.align || 'left'}">
        <div v-if="'index' === column.type">{{ rowIndex + 1 }}</div>
        <div v-else-if="'checkbox' === column.type">
          <fish-checkbox :index="rowIndex" @click="checkboxSelectHandler" ref="checkboxes"></fish-checkbox>
        </div>
        <content-render :render="column.render || ((h, item, column) => h('div', item[column.key]))" :params="[item, column]" v-else></content-render>
      </td>
      <td v-if="scrollY" style="width: 0;"></td>
    </tr>
    <tr v-if="expandedRowRender && expands[rowIndex]">
      <td :colspan="columns.length + 1">
        <content-render :render="expandedRowRender" :params="[item]"></content-render>
      </td>
    </tr>
    </template>
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
      scrollY: { type: Boolean, default: false }
    },
    data () {
      return {
        expands: this.rows.map((row) => false)
      }
    },
    methods: {
      checkboxSelectHandler (evt) {
        this.$emit('select', evt, this)
      },
      expandHandler (rowIndex) {
        this.expands.splice(rowIndex, 1, !this.expands[rowIndex])
      }
    }
  }
</script>
