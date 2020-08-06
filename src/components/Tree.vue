<template>
  <fish-tree-node
      :data="data"
      :multiple="multiple"
      :selected-key="selectedKey"
      :data-key-map="dataKeyMap"
      :expand="expand"
      :edited="edited"
      :checkabled="checkabled"
      :on-item-render="onItemRender"
      :iconCaretRight="iconCaretRight"
      :iconCaretDown="iconCaretDown"
      :on-item-checked="onItemChecked"
      :on-item-contextmenu="onItemContextmenu"
      :on-item-dblclick="onItemDblclick"
      :on-item-remove="onItemRemove"
      :on-item-click="onItemClick" v-if="data && data.length > 0">
      <template slot-scope="item">
        <slot v-bind="item"></slot>
      </template>
  </fish-tree-node>
</template>
<script>
  import FishTreeNode from './TreeNode.vue'

  export default {
    components: {FishTreeNode},
    name: 'fish-tree',
    props: {
      defaultSelectedKey: { type: String, default: '' },
      defaultCheckedKeys: { type: Array, default: () => [] },
      multiple: { type: Boolean, default: false },
      expand: { type: Boolean, default: false },
      checkabled: { type: Function, default: (multiple) => multiple },
      data: { type: Array, required: true }, // [{title: '', key: '', children: '', disabled: false}]
      edited: { type: Boolean, default: false },
      onItemRender: { type: Function, default: (item) => item.title },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' }
    },
    data () {
      return {
        selectedKey: this.defaultSelectedKey,
        dataKeyMap: this.getResetDataKeyMap()
      }
    },
    watch: {
      defaultSelectedKey (nowVal, oldVal) {
        this.selectedKey = nowVal
      },
      defaultCheckedKeys (nowVal, oldVal) {
        this.dataKeyMap = this.getResetDataKeyMap()
      }
    },
    methods: {
      getResetDataKeyMap () {
        const dataKeyMap = {}
        initDataKeysMap(dataKeyMap, new Set(this.defaultCheckedKeys), this.data, '-')
        return dataKeyMap
      },
      onItemChecked (item) {
        if (this.dataKeyMap[item.key][0] === 'checked') {
          this.setAllChildrenState(item.key, '')
        } else {
          this.setAllChildrenState(item.key, 'checked')
        }
        this.setAllParentState(item.key)
        this.$emit('item-checked', this.getCheckedKeys())
      },
      onItemContextmenu (item) {
        this.selectedKey = item.key
        this.$emit('item-contextmenu', item)
      },
      onItemDblclick (item) {
        this.$emit('item-dblclick', item)
      },
      onItemClick (item) {
        this.selectedKey = item.key
        this.$emit('item-click', item)
      },
      onItemRemove (data, item, itemIndex, evt) {
        this.$emit('item-remove', data, item, itemIndex, evt)
      },
      getCheckedKeys () {
        // 获取选择的keys
        let checkedKeys = Object.keys(this.dataKeyMap).filter((key) => {
          return this.dataKeyMap[key][0] === 'checked'
        })
        return checkedKeys.filter((key, index) => {
          for (let k of checkedKeys) {
            if (k !== key && this.dataKeyMap[key][2] === k) {
              return false
            }
          }
          return true
        })
      },
      setAllChildrenState (key, state) {
        // 设置所有子节点的状态
        this.dataKeyMap[key].splice(0, 1, state)
        this.dataKeyMap[key][1] && this.dataKeyMap[key][1].forEach((child) => {
          this.setAllChildrenState(child, state)
        })
      },
      setAllParentState (key) {
        // 设置所有父亲节点的状态
        if (this.dataKeyMap[key]) {
          let parentKey = this.dataKeyMap[key][2]
          if (parentKey === '') return
          if (this.dataKeyMap[parentKey] && this.dataKeyMap[parentKey][1]) {
            let parentAllChildrenChecked = this.dataKeyMap[parentKey][1].every((child) => {
              return this.dataKeyMap[child][0] === 'checked'
            })
            let parentAllChildrenOpen = this.dataKeyMap[parentKey][1].some((child) => {
              return this.dataKeyMap[child][0] === 'open' || this.dataKeyMap[child][0] === 'checked'
            })
            this.dataKeyMap[parentKey].splice(0, 1, parentAllChildrenChecked ? 'checked' : (parentAllChildrenOpen ? 'open' : ''))
          }
          this.setAllParentState(parentKey)
        }
      }
    }
  }

  const getKeyState = (dataKeysMap, setKeys, key, parentKey) => {
    if (setKeys.has(key)) return 'checked'
    // console.log(':::::setKeys:', setKeys, ', key:', key, ', dataKeysMap:', dataKeysMap[parentKey])
    for (let setKey of setKeys.keys()) {
      if (setKey.startsWith(key + '-')) return 'open'
      if (key.startsWith(setKey)) return 'checked'
    }
    return ''
  }
  const initDataKeysMap = (dataKeysMap, setKeys, items, parentKey) => {
    items && items.forEach((item) => {
      // console.log('::::::', item)
      dataKeysMap[item.key] = [
        getKeyState(dataKeysMap, setKeys, item.key, parentKey),
        item.children && item.children.map((child) => child.key),
        parentKey]
      initDataKeysMap(dataKeysMap, setKeys, item.children, item.key)
    })
  }
</script>
