<template>
  <div :class="['fish select tree-select', {'multiple': multiple}]"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <template v-if="multiple">
      <a class="tag" @click.stop="()=>{}"
         v-for="(item, index) in checkedItems" :key="index">
        {{ item.title }}
        <i :class="iconClose" @click.stop="closeItemHandler(item)"></i>
      </a>
      <div class="text hint" v-html="valueEmpty ? hint : ''"></div>
    </template>
    <div :class="['text', {'hint': valueEmpty}]" v-else>
      {{ selectedItem && selectedItem.title || hint }}
    </div>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-angle-down" v-else></i>
    <div class="content" v-show="visible" @click.stop="()=>{}">
      <fish-tree
          :data="data"
          :default-selected-key="selectedKey"
          :default-checked-keys="checkedKeys"
          :multiple="multiple"
          :expand="expand"
          :checkabled="checkabled"
          :iconCaretRight="iconCaretRight"
          :iconCaretDown="iconCaretDown"
          @item-click="itemClickHandler"
          @item-checked="itemCheckedHandler"></fish-tree>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { notify } from '../config'
  import fishTree from './Tree.vue'

  export default {
    components: {fishTree},
    name: 'fish-tree-select',
    directives: { clickoutside },
    props: {
      value: { type: [String, Number, Array] },
      data: { type: Array, required: true },
      hint: { type: String, default: '' },
      expand: { type: Boolean, default: false },
      multiple: { type: Boolean, default: false },
      checkabled: { type: Function, default: (multiple) => multiple },
      iconClose: { type: String, default: 'fa fa-close' },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' }
    },
    data () {
      return {
        selectedItem: null,
        selectedKey: '',
        checkedItems: [],
        checkedKeys: [],
        showClear: false,
        visible: false
      }
    },
    mounted () {
      // this.resetValuesWithData(this.data)
      this.initData(this.value)
    },
    watch: {
      value (nowVal, oldValue) {
        // console.log('nowVal: ', nowVal, this.data)
        this.initData(nowVal)
      }
    },
    computed: {
      valueEmpty () {
        return Array.isArray(this.value) ? this.value.length <= 0 : (this.value === undefined || this.value === null || this.value.toString() === '')
      }
    },
    methods: {
      initData (v) {
        this.selectedKey = Array.isArray(v) ? (v[0] || '') : v || ''
        this.checkedKeys = this.multiple ? v || [] : []
        this.checkedItems = []
        this.selectedItem = null
        this.resetValuesWithData(this.data)
      },
      resetValuesWithData (items) {
        items && items.forEach((item) => {
          if (this.multiple) {
            if (this.checkedKeys.includes(item.key)) {
              this.checkedItems.push(item)
            }
          } else if (this.selectedKey === item.key) {
            this.selectedItem = item
          }
          this.resetValuesWithData(item.children)
        })
      },
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      clickHandler () {
        this.visible = !this.visible
      },
      itemClickHandler (item) {
        if (this.multiple) return
        this.emitChange(item.key, item)
        this.awayHandler()
      },
      itemCheckedHandler (checkedKeys) {
        this.emitChange(checkedKeys, [])
      },
      closeItemHandler (item) {
        this.emitChange(this.checkedKeys.filter((key) => key !== item.key), [])
      },
      clearHandler () {
        this.visible = false
        this.emitChange([], [])
      },
      emitChange (v, vv) {
        if (this.multiple) {
          this.checkedKeys = v
          this.checkedItems = []
        } else {
          if (v.length <= 0) v = ''
          this.selectedKey = v || ''
          this.selectedItem = null
        }
        this.resetValuesWithData(this.data)
        this.$emit('input', v)
        this.$emit('change', v, vv)
        notify.field.change(this)
      },
      awayHandler () {
        this.visible = false
        this.showClear = false
      }
    }
  }
</script>
