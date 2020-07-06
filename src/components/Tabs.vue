<template>
  <div :class="['fish tabs', `-${this.type}`]">
    <div class="content" :style="contentStyle" v-if="navPosition === 'bottom' || navPosition === 'right'">
      <slot></slot>
    </div>
    <ul :class="['nav', navPosition, {'center': navCenter}]">
      <li v-for="(tab, index) in tabs" v-html="tab" :key="tab"
          :class="{'active': index === activeIndex }"
          @click.stop="tabClickHandler(index)"></li>
    </ul>
    <div class="content" :style="contentStyle" v-if="navPosition === 'top' || navPosition === 'left'">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-tabs',
    props: {
      value: { type: [Number, String], required: true },
      type: { type: String, default: '' },
      navPosition: { type: String, default: 'top' },
      navCenter: { type: Boolean, default: false },
      padding: { type: String },
      height: { type: String },
      minHeight: { type: String, default: '' },
      maxHeight: { type: String, default: '' },
      overflow: { type: String, default: '' }
    },
    data () {
      return {
        tabs: [],
        activeIndex: 0
      }
    },
    watch: {
      value (nVal, oVal) {
        this.init(nVal)
      }
    },
    computed: {
      contentStyle () {
        const { padding, height, overflow, minHeight, maxHeight } = this
        return {
          padding,
          height,
          minHeight,
          maxHeight,
          overflow
        }
      }
    },
    mounted () {
      this.init(this.value)
    },
    methods: {
      init (indexValue) {
        this.tabs = []
        this.$children.forEach((ele, index) => {
          this.tabs.push(ele.label)
          // if (ele.index !== undefined) index = ele.index
          if (ele.index === indexValue) {
            ele.visible = true
            this.activeIndex = index
          } else {
            ele.visible = false
          }
        })
      },
      updateTabLabel (oldLabel, label) {
        const index = this.tabs.findIndex(it => it === oldLabel)
        if (index >= 0) {
          this.tabs.splice(index, 1, label)
        }
      },
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
