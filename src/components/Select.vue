<template>
  <div :class="['fish select', {'active': visible, 'multiple': multiple, 'disabled': disabled, 'search': search}]"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <template v-if="multiple">
      <i :class="iconDownArrow" v-if="!searchIsFunction"></i>
      <i :class="iconSearch" v-if="searchIsFunction"></i>
      <a class="tag" @click.stop="() => {}"
         v-for="(item, index) in selectedItems" :key="index">
        {{ item.content }}
        <i :class="iconClose" @click.stop="closeItemHandler(index, item, $event)"></i>
      </a>
      <input autocomplete="off" ref="inputSearch" v-if="search"
             @input.stop="searchInputHandler($event.target.value)"
             @keyup.up.stop="keyUpHandler"
             @keyup.down.stop="keyDownHandler"
             @keyup.enter.stop="keyEnterHandler"
             @focus="visible = true"
             :style="{'width': `${multipleInputWidth}em`}"
             />
      <div class="text hint" v-html="hint" :style="{visibility: valueEmpty && !visible ? 'visible' : 'hidden'}" v-if="selectedItems.length <= 0"></div>
    </template>
    <template v-else>
      <i :class="iconCloseCircle" v-if="showClear && !valueEmpty" style="opacity: .6;" @click.stop="clearHandler"></i>
      <i :class="iconDownArrow" v-else-if="!searchIsFunction"></i>
      <i :class="iconSearch" v-else-if="searchIsFunction"></i>
      <input autocomplete="off" ref="inputSearch" v-if="search"
             @input.stop="searchInputHandler($event.target.value)"
             @keyup.up.stop="keyUpHandler"
             @keyup.down.stop="keyDownHandler"
             @keyup.enter.stop="keyEnterHandler"/>
      <div :class="['text', {'hint': valueEmpty}]" :style="{visibility: showText ? 'visible' : 'hidden'}">
        {{ selectedItems.length > 0 && selectedItems[0].content || hint }}
      </div>
    </template>
    <ul class="fish menu vertical" v-show="visible && $slots.default"
        @click.stop="menuClickHandler($event)"
        @mouseover.stop="() => {}" @mouseout.stop="() => {}">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { notify } from '../config'
  export default {
    name: 'fish-select',
    directives: { clickoutside },
    props: {
      value: [Number, String, Array],
      hint: { type: String, default: '' },
      multiple: { type: Boolean, default: false },
      search: { type: [Boolean, Function], default: false },
      disabled: { type: Boolean, default: false },
      iconDownArrow: { type: String, default: 'fa fa-angle-down' },
      iconClose: { type: String, default: 'fa fa-close' },
      iconCloseCircle: { type: String, default: 'fa fa-times-circle' },
      iconSearch: { type: String, default: 'fa fa-search' }
    },
    data () {
      return {
        visible: false,
        selectedHtml: null,
        selectedItems: [],
        showText: true,
        reRenderChildren: false,
        showClear: false,
        multipleInputWidth: 1,
        displayItems: [], // 查询使用
        keyChildrenIndex: -1 // 子元素的索引,键盘上下操作
      }
    },
    mounted () {
      this.initData()
    },
    watch: {
      value (nowVal, oldVal) {
        if (nowVal === '' || nowVal === null) {
          if (!this.searchIsFunction) {
            this.selectedItems = []
          }
        } else {
          this.initData()
        }
      }
    },
    computed: {
      valueEmpty () {
        return this.values.length === 0
      },
      currentItem () {
        if (this.keyChildrenIndex === -1) {
          return this.displayItems[0]
        }
        return this.displayItems[this.keyChildrenIndex]
      },
      searchIsFunction () {
        return this.search && this.search instanceof Function
      },
      values () {
        return Array.isArray(this.value) ? this.value : (this.value && this.value.toString() !== '' ? [this.value] : [])
      }
    },
    methods: {
      initData () {
        this.selectedItems = []
        this.$children.forEach((ele) => {
          ele.$el.style.display = 'block'
          if (this.values.includes(ele.index)) {
            ele.active = true
            this.selectedItems.push(ele)
          } else {
            ele.active = false
          }
        })
        this.displayItems = this.$children
      },
      searchInputHandler (v) {
        if (this.searchIsFunction) {
          this.search(v)
          this.$nextTick(() => {
            this.displayItems = this.$children
          })
          // return
        }
        if (!/^\s+$/.test(v)) {
          this.displayItems = []
          this.$children.forEach((ele) => {
            if (ele.content.toLowerCase().startsWith(v.toLowerCase())) {
              ele.$el.style.display = 'block'
              this.displayItems.push(ele)
            } else {
              ele.$el.style.display = 'none'
            }
          })
          this.keyChildrenIndex = -1
          this.showText = false
          this.multipleInputWidth = v.length > 0 ? v.length : 1
        } else {
          this.showText = true
          this.displayItems = this.$children
          this.multipleInputWidth = 1
        }
      },
      keyUpHandler () {
        let dLength = this.displayItems.length
        if (dLength <= 0) return
        if (!this.values.includes(this.currentItem.index)) {
          this.currentItem.active = false
        }
        if (this.keyChildrenIndex <= 0) {
          this.keyChildrenIndex = dLength - 1
        } else {
          this.keyChildrenIndex--
        }
        this.currentItem.active = true
      },
      keyDownHandler () {
        let dLength = this.displayItems.length
        // console.log(dLength, ':::', this.keyChildrenIndex)
        if (dLength <= 0) return
        if (!this.values.includes(this.currentItem.index)) {
          this.currentItem.active = false
        }
        if (this.keyChildrenIndex >= dLength - 1) {
          this.keyChildrenIndex = 0
        } else {
          this.keyChildrenIndex++
        }
        this.currentItem.active = true
      },
      keyEnterHandler () {
        if (this.displayItems.length <= 0) return
        if (!this.values.includes(this.currentItem.index)) {
          this.currentItem.active = false
          this.changeHandler(this.currentItem)
        }
        this.displayItems = this.$children
        this.multipleInputWidth = 1
        // if (this.search) this.$refs.inputSearch.blur()
      },
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      closeItemHandler (index, item, evt) { // 针对多选
        let nValue = Array.from(this.values)
        this.selectedItems.splice(index, 1)
        this.$children.forEach((e) => {
          if (e.index === item.index) {
            e.active = false
          }
        })
        this.emitChange(nValue.filter((ele) => ele !== item.index))
        this.resetValues()
      },
      clearHandler () { // 针对单选
        this.selectedItems = []
        this.awayHandler()
        this.emitChange([])
      },
      clickHandler () {
        this.visible = !this.visible
        if (this.search) this.$refs.inputSearch.focus()
      },
      menuClickHandler (evt) {
        // this.selectedItems.push(evt.target.__vue__)
        this.changeHandler(evt.target.__vue__)
      },
      changeHandler (vt) {
        // console.log(this.multiple, '::', vt.index)
        if (this.multiple) {
          // console.log('value:', this.value, vt.active, this.selectedItems)
          let nValue = Array.from(this.values)
          if (vt.active) {
            vt.active = false
            nValue = nValue.filter((ele) => ele !== vt.index)
            this.selectedItems = this.selectedItems.filter((ele) => ele.index !== vt.index)
          } else {
            vt.active = true
            this.selectedItems.push(vt)
            nValue.push(vt.index)
          }
          // console.log('value:', this.value, vt.active, this.selectedItems)
          this.emitChange(nValue)
          this.resetValues()
        } else {
          this.selectedItems.splice(0, 1, vt)
          this.emitChange([vt.index])
          this.awayHandler()
        }
      },
      emitChange (values) {
        let v = this.multiple ? values : values[0]
        this.$emit('input', v)
        this.$emit('change', v)
        notify.field.change(this)
      },
      awayHandler () {
        this.visible = false
        this.resetValues()
      },
      resetValues () {
        this.showText = true
        this.reRenderChildren = true
        this.keyChildrenIndex = -1
        // 选择之后clear input search
        if (this.search) {
          this.$refs.inputSearch.value = ''
        }
      }
    }
  }
</script>
