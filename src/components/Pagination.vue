<template>
  <ul class="fish pagination" v-if="total > 0">
    <li class="item total" v-html="totalRender(total, [(currentInt - 1) * rows + 1, currentInt * rows])"></li>
    <li :class="['item', {'disabled': currentInt <= 1}]" @click.stop.prevent="prevHandler" v-html="prevRender()"></li>
    <template v-if="simple">
      <li class="item">
        <input type="text" :value="current" @keydown.enter="toPageHandler($event.target.value)" @input="inputHandler($event)"/>
      </li>
    </template>
    <template v-else>
      <li :class="['item', { 'active': currentInt === 1 }]" @click.stop.prevent="firstHandler">1</li>
      <li class="item disabled" v-if="pages > 5 && currentInt > 3">...</li>
      <template v-for="i in pages">
        <li :class="['item', { 'active': currentInt == i }]" @click.stop.prevent="clickHandler(i)" v-if="inFive(i)" :key="i">{{ i }}</li>
      </template>
      <li class="item disabled" v-if="pages > 5 && (pages - currentInt) > 3">...</li>
      <li :class="['item', { 'active': currentInt === pages }]" @click.stop.prevent="lastHandler" v-if="pages > 1">{{ pages }}</li>
    </template>
    <li :class="['item', {'disabled': currentInt >= pages}]" @click.stop.prevent="nextHandler" v-html="nextRender()"></li>
  </ul>
</template>
<script>
  export default {
    name: 'fish-pagination',
    props: {
      total: { type: Number, required: true },
      current: { type: [Number, String], default: 1 },
      rows: { type: Number, default: 10 },
      simple: { type: Boolean, default: false },
      noMoreText: { type: String, default: 'No more data...' },
      prevRender: { type: Function, default: () => '<i class="fa fa-angle-left" style="margin-right:0; width: auto;"></i>' },
      nextRender: { type: Function, default: () => '<i class="fa fa-angle-right" style="margin-right:0; width: auto;"></i>' },
      totalRender: { type: Function, default: (total, range) => `${range[0]}-${range[1]} / ${total}` }
    },
    computed: {
      pages () {
        return Math.ceil(this.total / this.rows)
      },
      currentInt () {
        return parseInt(this.current + '')
      }
    },
    data () {
      return {
      }
    },
    methods: {
      toPageHandler (v) {
        if (/^\s*$/.test(v)) {
          this.clickHandler(this.currentInt)
        } else {
          this.clickHandler(parseInt(v))
        }
      },
      inputHandler (evt) {
        const v = evt.target.value
        if (/^\s*$/.test(v)) {
          return
        }
        if (/(^\d+$)/.test(v) && parseInt(v) >= 1 && parseInt(v) <= this.pages) {
          return
        } else {
          evt.target.value = this.currentInt
        }
      },
      clickHandler (index) {
        if (index !== this.currentInt) {
          // this.current = index
          this.$emit('change', index)
        }
      },
      firstHandler () {
        if (this.currentInt > 1) {
          // this.current = 1
          this.$emit('change', 1)
        }
      },
      lastHandler () {
        if (this.currentInt < this.pages) {
          // this.current = this.pages
          this.$emit('change', this.pages)
        }
      },
      prevHandler () {
        if (this.currentInt > 1) {
          // this.current--
          this.$emit('change', this.currentInt - 1)
        }
      },
      nextHandler () {
        if (this.currentInt < this.pages) {
          // this.current++
          this.$emit('change', this.currentInt + 1)
        }
      },
      inFive (index) {
        if (index > 1 && index < this.pages) {
          // console.log(this.current)
          let before = this.currentInt - 2
          let after = this.currentInt + 2
          if (before <= 0) after -= (before - 1)
          if (after >= this.pages) {
            before -= after - this.pages
            after = index
          }
          // console.log(before, '::', after)
          if (before <= index && after >= index) return true
          return false
        }
        return false
      }
    }
  }
</script>
