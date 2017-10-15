<template>
  <fish-tree-node
      :data="data"
      :multiple="multiple"
      :selected-key="selectedKey"
      :data-key-map="dataKeyMap"
      :expand="expand"
      :edited="edited"
      :delimiter="delimiter"
      :iconCaretRight="iconCaretRight"
      :iconCaretDown="iconCaretDown"
      :on-item-checked="onItemChecked"
      :on-item-dblclick="onItemDblclick"
      :on-item-click="onItemClick">
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
      data: { type: Array, required: true }, // [{title: '', key: '', children: '', checked: false}]
      edited: { type: Boolean, default: false },
      delimiter: { type: String, default: '-' },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' }
    },
    data () {
      const setKeys = new Set(this.defaultCheckedKeys)
      const dataKeyMap = {}
      initDataKeysMap(dataKeyMap, setKeys, this.data)
      console.log('>>>', setKeys, dataKeyMap)
      return {
        selectedKey: this.defaultSelected,
        // checkedKeys: Array.from(this.defaultCheckedKeys),
        dataKeyMap
      }
    },
    methods: {
      onItemChecked (item) {
        if (this.dataKeyMap[item.key][0] === 'checked') {
          this.dataKeyMap[item.key].splice(0, 1, '')
        } else {
          this.dataKeyMap[item.key].splice(0, 1, 'checked')
        }
        this.$emit('item-checked', item)
      },
      onItemDblclick (item) {
        this.$emit('item-dblclick', item)
      },
      onItemClick (item) {
        this.selectedKey = item.key
        this.$emit('item-click', item)
      }
    }
  }

  const getKeyState = (setKeys, key) => {
    if (setKeys.has(key)) return 'checked'
    for (let setKey of setKeys.keys()) {
      if (setKey.startsWith(key)) return 'open'
    }
    return ''
  }
  const initDataKeysMap = (dataKeysMap, setKeys, items) => {
    items && items.forEach((item) => {
      dataKeysMap[item.key] = [
        getKeyState(setKeys, item.key),
        item.children && item.children.map((child) => [child.key, getKeyState(setKeys, child.key)])]
      initDataKeysMap(dataKeysMap, setKeys, item.children)
    })
  }
</script>