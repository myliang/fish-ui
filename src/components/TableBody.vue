<template>
  <table>
    <colgroup>
      <col v-if="rows.length > 0 && expandedRowRender" width="40"/>
      <col v-for="(column, i) in columns" :width="column.width" :key="`${i}_col`"/>
    </colgroup>
    <tbody>
    <template v-for="(item, rowIndex) in rows">
      <tr :key="rowIndex" @mouseenter="trMouseenter(item, rowIndex)" @mouseleave="trMouseleave(item, rowIndex)" @click="trClick(item, rowIndex)" :class="{'count': hasCounting(rowIndex), 'hover': hoverTrIndex === rowIndex, 'active': activeTrIndex === rowIndex}" ref="tr">
        <td v-if="expandedRowRender" style="text-align: center;"><i :class="expandIcon" @click.stop="expandHandler(rowIndex)"></i></td>
        <td v-for="(column, ci) in columns" :style="{'text-align': column.align || 'left'}" :key="`${rowIndex}_${column.key || ci}`">
          <div v-if="'index' === column.type">{{ hasCounting(rowIndex) ? '' : (rowIndex + 1) }}</div>
          <div v-else-if="'checkbox' === column.type">
            <fish-checkbox :index="rowIndex" @click="checkboxSelectHandler" ref="checkboxes" v-if="!hasCounting(rowIndex)"></fish-checkbox>
          </div>
          <content-render :render="column.render || ((h, item, column, rowIndex) => h('div', itemValue(item, column)))" :params="[item, column, rowIndex]" v-else></content-render>
        </td>
      </tr>
      <tr :key="`${rowIndex}_expand`" v-if="expandedRowRender && expands[rowIndex]">
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
        hoverTrIndex: null,
        activeTrIndex: null,
        expands: []
      }
    },
    watch: {
      rows (nVal, oVal) {
        this.expands = nVal.map((row) => false)
        this.hoverTrIndex = null
        this.activeTrIndex = null
      }
    },
    methods: {
      itemValue (item, { key }) {
        let v = item
        for (const k of key.split('#')) {
          if (v[k] !== undefined && v[k] !== null) v = v[k]
          else return ''
        }
        return v !== undefined && v !== null ? v : ''
      },
      trHeights () {
        const { tr } = this.$refs
        if (tr) {
          return tr.map(it => getComputedStyle(it).height)
        }
        return [0]
      },
      setTrHeights (heights) {
        const { tr } = this.$refs
        if (tr) {
          for (let i = 0; i < heights.length; i++) {
            tr[i].style.height = `${heights[i]}`
          }
        }
      },
      setActiveTrIndex (index) {
        this.activeTrIndex = index
      },
      setHoverTrIndex (index) {
        this.hoverTrIndex = index
      },
      trClick (item, rIndex) {
        if (this.hasCounting(rIndex)) return
        this.activeTrIndex = rIndex
        this.$emit('tr-click', item, rIndex)
      },
      trMouseleave (item, rIndex) {
        // this.hoverTrIndex = rIndex
        this.$emit('tr-mouseleave', item, rIndex)
      },
      trMouseenter (item, rIndex) {
        this.hoverTrIndex = rIndex
        this.$emit('tr-mouseenter', item, rIndex)
      },
      checkboxSelectHandler (evt) {
        this.$emit('select', evt, this)
      },
      expandHandler (rowIndex) {
        this.expands.splice(rowIndex, 1, !this.expands[rowIndex])
      },
      hasCounting (rIndex) {
        return this.counting === true && rIndex === 0
      }
    }
  }
</script>
