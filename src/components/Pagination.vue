<template>
  <ul class="vui pagination">
    <li class="item total" v-html="totalRender(total, [(current - 1) * rows + 1, current * rows])"></li>
    <li :class="['item', {'disabled': current <= 1}]" @click.stop.prevent="prevHandler" v-html="prevRender()"></li>
    <li :class="['item', { 'active': current == 1 }]" @click.stop.prevent="firstHandler">1</li>
    <li class="item disabled" v-if="pages > 5 && current > 3">...</li>
    <template v-for="i in pages">
      <li :class="['item', { 'active': current == i }]" @click.stop.prevent="clickHandler(i)" v-if="inFive(i)">{{ i }}</li>
    </template>
    <li class="item disabled" v-if="pages > 5 && (pages - current) > 3">...</li>
    <li :class="['item', { 'active': current == pages }]" @click.stop.prevent="lastHandler">{{ pages }}</li>
    <li :class="['item', {'disabled': current >= pages}]" @click.stop.prevent="nextHandler" v-html="nextRender()"></li>
  </ul>
</template>
<script>
  export default {
    name: 'ui-pagination',
    props: {
      total: { type: Number, required: true },
      current: { type: Number, default: 1 },
      rows: { type: Number, default: 10 },
      prevRender: { type: Function, default: () => '<i class="fa fa-angle-left" style="margin-right:0; width: auto;"></i>' },
      nextRender: { type: Function, default: () => '<i class="fa fa-angle-right" style="margin-right:0; width: auto;"></i>' },
      totalRender: { type: Function, default: (total, range) => `${range[0]}-${range[1]} / ${total}` }
    },
    computed: {
      pages () {
        return this.total / this.rows
      }
    },
    data () {
      return {
      }
    },
    methods: {
      clickHandler (index) {
        if (index !== this.current) {
          // this.current = index
          this.$emit('change', index)
        }
      },
      firstHandler () {
        if (this.current > 1) {
          // this.current = 1
          this.$emit('change', 1)
        }
      },
      lastHandler () {
        if (this.current < this.pages) {
          // this.current = this.pages
          this.$emit('change', this.pages)
        }
      },
      prevHandler () {
        if (this.current > 1) {
          // this.current--
          this.$emit('change', this.current - 1)
        }
      },
      nextHandler () {
        if (this.current < this.pages) {
          // this.current++
          this.$emit('change', this.current + 1)
        }
      },
      inFive (index) {
        if (index > 1 && index < this.pages) {
          // console.log(this.current)
          let before = this.current - 2
          let after = this.current + 2
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
