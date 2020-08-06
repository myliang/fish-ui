<template>
  <div>
    <fish-button @click="addItem">Add Item</fish-button>
    <fish-tree :data="data" :default-selected-key="'0-0-0'"
               @item-click="selectHandler"
               @item-contextmenu="contextmenuHandler"
               :onItemRender="treeRenderContent"
               @item-remove="itemRemove"
               @item-dblclick="itemDoubleClick" edited></fish-tree>

    <fish-modal title="add tree item" :visible.sync="modalShow">
      <fish-input v-model="name"></fish-input>
      <fish-button @click="saveItem">Save Item</fish-button>
    </fish-modal>
  </div>
</template>
<script>
  export default {
    name: 'demo-tree-edit',
    data () {
      return {
        currentItem: null,
        editItem: null,
        treeState: '',
        modalShow: false,
        name: '',
        data: [{
          title: '0-0',
          key: '0-0',
          expand: true,
          children: [{
            title: '0-0-0',
            key: '0-0-0',
            children: [
              { title: '0-0-0-0', key: '0-0-0-0' },
              { title: '0-0-0-1', key: '0-0-0-1' },
              { title: '0-0-0-2', key: '0-0-0-2' }
            ]
          }, {
            title: '0-0-1',
            key: '0-0-1',
            expand: false,
            children: [
              { title: '0-0-1-0', key: '0-0-1-0' },
              { title: '0-0-1-1', key: '0-0-1-1' },
              { title: '0-0-1-2', key: '0-0-1-2' }
            ]
          }, {
            title: '0-0-2',
            key: '0-0-2'
          }]
        }, {
          title: '0-1',
          key: '0-1',
          children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
          ]
        }, {
          title: '0-2',
          key: '0-2'
        }]
      }
    },
    methods: {
      treeRenderContent (item) {
        return `-${item.title}-`
      },
      addItem (evt) {
        this.modalShow = !this.modalShow
      },
      itemRemove (data, item, index) {
        data.splice(index, 1)
        console.log('remove item:', item)
      },
      saveItem () {
        const { name, currentItem } = this
        if (!/^\s*$/.test(name)) {
          if (this.treeState !== 'edit') {
            if (currentItem === null) this.data.push({title: name, key: name, children: []})
            else {
              let nary = (currentItem.children || [])
              nary.push({title: name, key: name})
              this.$set(currentItem, 'children', nary)
            }
          } else {
            currentItem.title = name
            // currentItem.splice(1, 1, name)
            this.treeState = ''
          }
        }
        this.modalShow = false
      },
      selectHandler (item) {
        this.currentItem = item
      },
      contextmenuHandler (item) {
        console.log('item:', item)
      },
      itemDoubleClick (item) {
        this.treeState = 'edit'
        this.currentItem = item
        this.name = item.title
        this.modalShow = true
      }
    }
  }
</script>
