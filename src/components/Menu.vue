<template>
  <ul :class="classObject" @click.stop="clickHandler">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'vui-menu',
    props: {
      size: { type: String },
      mode: { type: String, default: 'vertical' }, // vertical, horizontal, inline
      compact: { type: Boolean, default: false }, // 紧凑
      defaultActive: { type: String }
    },
    data () {
      return {
        items: {},
        activeItem: null,
        lastActiveIndex: null
      }
    },
    mounted () {
      this.items = {}
      this.$children.forEach((ele) => {
        if (ele._isVue) this.items[ele.index] = ele
      })
      if (this.defaultActive) {
        this.setActive(this.defaultActive)
      }
    },
    computed: {
      classObject () {
        return [
          'vui menu',
          this.mode,
          this.size,
          {'compact': this.compact}
        ]
      }
    },
    methods: {
      clickHandler (evt) {
        if (evt.index === undefined) return
        this.setActive(evt.index)
        this.$emit('change', evt.index)
        this.$emit('click', evt)
      },
      setActive (index) {
        if (index === undefined) return
        // console.log('index:', index, 'lastIndex:', this.lastActiveIndex)
        let items = this.items
        this.lastActiveIndex && this.lastActiveIndex.toString().split('-').forEach((i) => {
          // console.log('last.i:', i, '>>>', items[i])
          items[i].active = false
          try {
            if (items[i].mode === 'inline') items[i].visible = false
            items = items[i].$children
          } catch (e) {}
        })

        this.lastActiveIndex = index
        items = this.items
        index.toString().split('-').forEach((i) => {
          // console.log('::::::::::', i, '>>>', items[i])
          items[i].active = true
          try {
            if (items[i].mode === 'inline') items[i].visible = true
            items = items[i].$children
          } catch (e) {}
        })
      }
    }

  }
</script>
