<template>
  <div>
    <div :class="['fish table', {'bordered': bordered, 'bordered-header': borderedHeader, 'striped': striped}]" ref="root">
      <div :class="['fish dimmer loading', {'active': loading}]"></div>
      <div class="header" ref="header">
        <fish-table-head :columns="allLeafColumns" :rows="rows" :scrollY="scrollY"
                         :expandedRowRender="fixedLeftColumns.length <= 0 && fixedRightColumns.length <= 0 && expandedRowRender || undefined"
                         :disabledCheckbox="!data || data.length <= 0"
                         @select="headSelectHandler"
                         @sort-change="sortChangeHandler"
                         @filter-change="filterChangeHandler" ref="vth"></fish-table-head>
      </div>
      <div class="body" ref="body">
        <fish-table-body :columns="allLeafColumns" :rows="data" :scrollY="scrollY" :noMoreText="noMoreText" :counting="counting"
                        :expandedRowRender="fixedLeftColumns.length <= 0 && fixedRightColumns.length <= 0 && expandedRowRender || undefined"
                        @tr-click="bodyTrClickHandler" @select="bodySelectHandler" ref="vtb"></fish-table-body>
      </div>
      <!-- fixed column -->
      <div class="fixed left" v-if="fixedLeftColumns.length > 0 && maxRows <= 1">
        <div class="header" ref="flHeader">
          <fish-table-head :columns="fixedLeftColumns" :rows="[fixedLeftColumns]" @select="headSelectHandler" ref="lVth"></fish-table-head>
        </div>
        <div class="body" ref="flBody">
          <fish-table-body :columns="fixedLeftColumns" :rows="data" :counting="counting"
            @tr-click="bodyTrClickHandler" @select="bodySelectHandler" ref="lVtb"></fish-table-body>
        </div>
      </div>
      <div class="fixed right" v-if="fixedRightColumns.length > 0 && maxRows <= 1" ref="fixedRight">
        <div class="patch" :style="{'height': `${trHeight * rows.length}px`}" v-if="scrollY"></div>
        <div class="header" ref="frHeader">
          <fish-table-head :columns="fixedRightColumns" :rows="[fixedRightColumns]" @select="headSelectHandler" ref="rVth"></fish-table-head>
        </div>
        <div class="body" ref="frBody">
          <fish-table-body :columns="fixedRightColumns" :rows="data" :counting="counting"
            @tr-click="bodyTrClickHandler" @select="bodySelectHandler" ref="rVtb"></fish-table-body>
        </div>
      </div>
    </div>
    <div style="margin: 10px 0; overflow: hidden" v-if="$slots.bottomLeft || pagination">
      <div style="float: left"><slot name="bottomLeft"></slot></div>
      <div style="float: right" v-if="pagination">
        <fish-pagination :total="pagination.total"
                         :current="currentPage"
                         :rows="pagination.rows"
                         :noMoreText="pagination.noMoreText"
                         @change="pageChangeHandler"></fish-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import fishTableHead from './TableHead.vue'
  import fishTableBody from './TableBody.vue'
  import fishPagination from './Pagination.vue'

  const SCROLL_WIDTH = 15

  export default {
    components: {
      fishTableBody,
      fishTableHead,
      fishPagination
    },
    name: 'fish-table',
    props: {
      columns: { type: Array, required: true }, // [{title: '', key: '', width: 100, render: () => {}}]
      data: { type: Array, required: true },
      bordered: { type: Boolean, default: false },
      borderedHeader: { type: Boolean, default: false },
      striped: { type: Boolean, default: false },
      loading: { type: Boolean, default: false },
      expandedRowRender: { type: Function, default: null }, // 没有fixed列，方可展开详情
      height: [Number, String], // 指定高度，固定表头
      noMoreText: { type: String, default: 'No more data...' },
      counting: { type: Boolean, default: false }, // 是否有统计行
      pagination: { type: Object, default: undefined } // 关联pagination组件
    },
    data () {
      return {
        currentPage: this.pagination ? this.pagination.current : 1,
        scrollY: false,
        windowWidth: getWindowWidth(),
        maxRows: getMaxDeepColumns(this.columns),
        allColumns: getColumns(this.columns),
        rows: [],
        allLeafColumns: [],
        fixedLeftColumns: [],
        fixedRightColumns: [],
        filters: {}, // 表头的过滤返回值
        sorter: null,
        trHeight: 38
      }
    },
    watch: {
      data (nval, oval) {
        this.calScroll()
      },
      columns (nval, oval) {
        // console.log('::::::columns.nval:', nval)
        this.init()
      },
      pagination (nval, oval) {
        this.currentPage = nval ? nval.current : 1
      }
    },
    mounted () {
      this.init()
      window.addEventListener('resize', this.calScroll)
    },
    destroyed () {
      window.removeEventListener('resize', this.calScroll)
    },
    methods: {
      init () {
        this.maxRows = getMaxDeepColumns(this.columns)
        this.allColumns = getColumns(this.columns)
        this.rows = getRows(this.allColumns, this.maxRows)
        this.allLeafColumns = this.allColumns.filter((c) => { return !c.children })

        // fixed columns
        this.columns.forEach((column) => {
          if (column.fixed !== undefined) {
            if (column.fixed === 'left') {
              this.fixedLeftColumns.push(column)
            } else if (column.fixed === 'right') {
              this.fixedRightColumns.push(column)
            }
          }
        })
        this.calScroll()
      },
      pageChangeHandler (currentPage) {
        this.currentPage = currentPage
        this.changeHandler()
      },
      filterChangeHandler (filters) {
        this.filters = filters
        this.changeHandler()
      },
      sortChangeHandler (orderKey, orderBy) {
        this.sorter = {key: orderKey, by: orderBy}
        this.changeHandler()
      },
      changeHandler () {
        this.$emit('change', this.currentPage, this.filters, this.sorter)
      },
      headSelectHandler ($vue) {
        let checkbox = $vue.$refs.checkboxes[0]
        const { vtb, lVtb, rVtb } = this.$refs
        Array.of(vtb, lVtb, rVtb).forEach((tb) => {
          if (tb && tb.$refs.checkboxes) {
            tb.$refs.checkboxes.forEach((cb) => { cb.active = checkbox.active })
          }
        })
        this.$emit('select', vtb.$refs.checkboxes.filter((cb) => cb.active).map((cb) => { return this.data[cb.index] }))
      },
      bodySelectHandler (event, $vue) {
        let checkboxes = $vue.$refs.checkboxes
        let activeCheckboxes = checkboxes.filter((cb) => { return cb.active })
        let headActiveCheckbox = checkboxes.length === activeCheckboxes.length
        const { vth, lVth, rVth, vtb } = this.$refs
        Array.of(vth, lVth, rVth).forEach((th) => { if (th) th.$refs.checkboxes[0].active = headActiveCheckbox })

        this.$emit('select', vtb.$refs.checkboxes.filter((cb) => cb.active).map((cb) => { return this.data[cb.index] }))
      },
      bodyTrClickHandler (item, rowIndex) {
        this.$emit('tr-click', item, rowIndex)
      },
      calScroll () {
        this.$nextTick(() => this.calScrollY())
        this.calScrollX()
      },
      calScrollY () {
        // 是否需要滚动条
        const { height, data } = this
        if (height === undefined) return
        const rootHeight = this.$refs.root.offsetHeight
        // console.log('rootHeight:', rootHeight)
        if (height >= rootHeight) return
        const { body, flBody, frBody, fixedRight } = this.$refs
        const trLength = data.length + 1
        const trHeight = height / trLength + 1 // 1 border width
        body.style.height = `${height - trHeight}px`
        body.style.overflowY = 'scroll'
        Array.of(flBody, frBody).forEach((b) => {
          if (b !== undefined) {
            // 15 为滚动条的宽度
            b.style.height = `${height - trHeight - SCROLL_WIDTH}px`
          }
        })
        if (fixedRight) {
          fixedRight.style.right = `${SCROLL_WIDTH}px`
        }
        const addScrollListener = (src, dests) => {
          if (src === undefined) return
          src.addEventListener('scroll', (event) => {
            dests.forEach((b) => {
              if (b !== undefined) {
                b.scrollTop = event.target.scrollTop
              }
            })
          }, false)
        }
        addScrollListener(body, [flBody, frBody])
        this.scrollY = true
      },
      calScrollX () {
        let rootWidth = this.$refs.root.getBoundingClientRect().width
        const currentWindowWidth = getWindowWidth()
        rootWidth += currentWindowWidth - this.windowWidth
        const totalWidth = this.allLeafColumns.map((e) => e.width || 0).reduce((arg1, arg2) => { return parseInt(arg1) + parseInt(arg2) }, 0)
        const { header, body, root } = this.$refs
        if (totalWidth <= rootWidth) {
          root.style.width = 'auto'
          body.style.overflowX = 'hidden'
          return
        }
        root.style.width = `${rootWidth}px`
        body.style.overflowX = 'scroll'
        body.addEventListener('scroll', (event) => {
          header.scrollLeft = event.target.scrollLeft
        }, false)
        this.windowWidth = currentWindowWidth
      },
      cellRender (item, column) {
        return column.render === undefined ? item[column.key] : column.render(item[column.key], column)
      }
    }
  }

  // 获取表头行信息
  const getRows = (allColumns = [], maxRows) => {
    const rows = []
    for (let i = 0; i < maxRows; i++) rows.push([])
    allColumns.forEach((column) => {
      column.rowSpan = column.children ? 1 : maxRows - column.level
      rows[column.level].push(column)
    })
    return rows
  }

  // 获得所有列的总数
  const getColumns = (columns = [], level = 0) => {
    let ret = []
    columns.forEach((column) => {
      column.level = level
      ret.push(column)
      if (column.children) {
        let nRet = getColumns(column.children, level + 1)
        column.colSpan = nRet.filter((c) => !c.children).length
        ret = ret.concat(nRet)
      } else {
        column.colSpan = 1
      }
    })
    return ret
  }

  // 获得列的最大深度
  const getMaxDeepColumns = (columns = []) => {
    const maxDeeps = []
    columns.forEach((column, index) => {
      maxDeeps[index] = 1
      if (column.children !== undefined && column.children.length > 0) {
        maxDeeps[index] += getMaxDeepColumns(column.children)
      }
    })
    if (maxDeeps.length <= 0) return 1
    return Math.max.apply(null, maxDeeps)
  }

  const getWindowWidth = () => {
    if (window.innerWidth) {
      return window.innerWidth
    } else {
      return document.body.clientWidth
    }
  }
</script>
