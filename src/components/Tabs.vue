<template>
  <div :class="['vui tabs', `-${this.type}`]">
    <ul :class="['nav', position]">
      <li v-for="(tab, index) in tabs" v-html="tab" :key="tab"
          :class="{'active': index === activeIndex }"
          @click.stop="tabClickHandler(index)"></li>
    </ul>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vui-tabs',
    props: {
      value: { type: [Number, String], required: true },
      type: { type: String, default: '' },
      position: { type: String, default: 'top' }
    },
    data () {
      return {
        tabs: [],
        activeIndex: 0
      }
    },
    mounted () {
      this.$children.forEach((ele, index) => {
        this.tabs.push(ele.label)
        // if (ele.index !== undefined) index = ele.index
        if (ele.index === this.value) {
          ele.visible = true
          this.activeIndex = index
        } else {
          ele.visible = false
        }
      })
    },
    methods: {
      tabClickHandler (index) {
        this.$children[this.activeIndex].visible = false
        let ele = this.$children[index]
        ele.visible = true
        this.activeIndex = index
        this.$emit('input', ele.index)
        this.$emit('tab-change', ele.index)
      }
    }
  }
</script>
