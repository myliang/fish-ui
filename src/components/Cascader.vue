<template>
  <div :class="['fish select cascader', {'active': visible}]"
       @click="menuClickHandler($event)"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <i class="fa fa-times-circle" v-if="showClear && !valueEmpty" style="opacity: .6;" @click.stop="clearHandler"></i>
    <i class="fa fa-angle-down" v-else></i>
    <div :class="['text', {'hint': valueEmpty}]">
      {{ selectedText || hint }}
    </div>
    <div v-show="visible" class="content" :style="{width: `${(menuWidth + 2) * groups.length + 15 * groups.length}px`}"
         @click.stop="" @mouseover.stop="" @mouseout.stop="">
      <ul class="fish menu vertical" v-for="(group, groupIndex) in groups">
        <li :class="['item', {'active': selectedItems[groupIndex] && selectedItems[groupIndex][0] === item[0], 'submenu': itemChildren(item).length > 0}]"
            v-for="(item, index) in group" @click.stop="itemClickHandler(item, groupIndex)" :key="item[0]" :style="{width: `${menuWidth}px`}">
          {{ item[1] }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { notify } from '../config'
  export default {
    name: 'fish-cascader',
    directives: { clickoutside },
    props: {
      value: Array,
      textDelimiter: { type: String, default: ' / ' },
      menuWidth: { type: Number, default: 160 },
      hint: { type: String, default: 'Please select' },
      options: { type: Array, required: true } // [[key, label, children]]
    },
    data () {
      return {
        showClear: false,
        visible: false,
        groups: [this.options],
        selectedItems: [],
        selectedText: ''
      }
    },
    mounted () {
      this.selectedItems = this.parseSelectedItems()
      this.selectedText = this.selectedItems.map((ele) => ele[1]).join(this.textDelimiter)
    },
    computed: {
      valueEmpty () {
        return this.value.length === 0
      }
    },
    methods: {
      clearHandler () {
        this.selectedText = null
        this.selectedItems = []
        this.groups = [this.options]
        this.emitChange([])
      },
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      menuClickHandler (evt) {
        this.visible = !this.visible
      },
      awayHandler () {
        this.visible = false
      },
      itemClickHandler (item, groupIndex) {
        let children = this.itemChildren(item)
        let howMany = this.selectedItems.length - groupIndex
        this.selectedItems.splice(groupIndex, howMany, item)
        // console.log('after:', this.selectedItems)
        if (children.length > 0) {
          let groupHowMany = this.groups.length - groupIndex
          this.groups.splice(groupIndex + 1, groupHowMany, children)
        } else {
          this.awayHandler()
          this.selectedText = this.selectedItems.map((ele) => ele[1]).join(this.textDelimiter)
          this.emitChange(this.selectedItems.map((ele) => ele[0]))
        }
      },
      emitChange (values) {
        this.$emit('input', values)
        this.$emit('change', values)
        notify.field.change(this)
      },
      itemChildren (item) {
        if (item.length > 2) {
          return item[item.length - 1]
        }
        return []
      },
      parseSelectedItems () {
        // console.log('>>>>:', this.value)
        let ret = []
        if (this.valueEmpty) return ret
        let os = this.options
        let vIndex = 0
        while (os && os.length > 0) {
          for (let ele in os) {
            if (this.value[vIndex] === ele[0]) {
              ret.push(ele)
              os = this.itemChildren(ele)
              break
            }
          }
          vIndex++
          if (vIndex > 10) return []
        }
        return ret
      }
    }
  }
</script>
