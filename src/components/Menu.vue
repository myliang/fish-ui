<template>
  <ul :class="classObject" @click.stop="clickHandler">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'fish-menu',
    props: {
      size: { type: String },
      mode: { type: String, default: 'vertical' }, // vertical, horizontal, inline
      compact: { type: Boolean, default: false }, // 紧凑
      indexDelimiter: { type: String, default: '-' }, // option index内容的分隔符
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
        if (ele.$options.name === 'fish-optgroup') {
          ele.$children.forEach((e) => {
            if (e.$options.name === 'fish-option') this.items[e.index] = e
          })
        } else if (['fish-option', 'fish-submenu'].includes(ele.$options.name)) {
          this.items[ele.index] = ele
        }
      })
      // console.log('items:', this.items)
      if (this.defaultActive) {
        this.setActive(this.defaultActive)
      }
    },
    computed: {
      classObject () {
        return [
          'fish menu',
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
        this.lastActiveIndex && this.lastActiveIndex.toString().split(this.indexDelimiter).forEach((i) => {
          // console.log('last.i:', i, '>>>', items[i])
          items[i].active = false
          try {
            if (items[i].mode === 'inline') items[i].visible = false
            items = items[i].items
          } catch (e) {}
        })

        this.lastActiveIndex = index
        items = this.items
        index.toString().split(this.indexDelimiter).forEach((i) => {
          // console.log('::::::::::', i, '>>>', items[i])
          if (items[i] !== undefined) {
            items[i].active = true
            try {
              if (items[i].mode === 'inline') items[i].visible = true
              // console.log('sub', items[i])
              items = items[i].items
            } catch (e) {}
          }
        })
      }
    }

  }
</script>
