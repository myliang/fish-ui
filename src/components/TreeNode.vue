<template>
  <ul class="fish tree">
    <li v-for="(item, index) in data" :key="item.key" :class="{'active': selectedKey === item.key}">
      <i :class="item.children && visible[index] ? iconCaretDown : iconCaretRight"
         v-if="item.children && item.children.length > 0"
         @click.stop="showChildrenHandler(item, index)"></i>
      <i v-else>&nbsp;</i>
      <fish-checkbox :index="item.key"
                     :state="dataKeyMap[item.key][0]"
                     @click.stop="onItemChecked(item)"
                     ref="checkboxes" v-if="multiple"></fish-checkbox>
      <span class="title"
            @click="onItemClick(item)"
            @dblclick="onItemDblclick(item)">
        {{ item.title }}
      </span>
      <strong v-if="edited && (!item.children || item.children.length <= 0)"
              @click="itemRemoveHandler(item, index)">&times;</strong>
      <fish-tree-node
          :data="item.children || []"
          :multiple="multiple"
          :edited="edited"
          :expand="expand"
          :selected-key="selectedKey"
          :data-key-map="dataKeyMap"
          :on-item-checked="onItemChecked"
          :on-item-dblclick="onItemDblclick"
          :on-item-click="onItemClick"
          v-if="item.children && visible[index]"></fish-tree-node>
    </li>
  </ul>
</template>
<script>
  import FishCheckbox from './Checkbox.vue'

  export default {
    components: {FishCheckbox},
    name: 'fish-tree-node',
    props: {
      selectedKey: { type: String, default: '' },
      multiple: { type: Boolean, default: false },
      expand: { type: Boolean, default: false },
      data: { type: Array, required: true }, // [{title: '', key: '', children: '', checked: false}]
      dataKeyMap: { type: Object }, // {key: [state, [[key, state]]}
      edited: { type: Boolean, default: false },
      delimiter: { type: String, default: '-' },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' },
      onItemChecked: { type: Function, default: (item) => {} },
      onItemDblclick: { type: Function, default: (item) => {} },
      onItemClick: { type: Function, default: (item) => {} }
    },
    data () {
      return {
        visible: this.data.map((ele) => this.expand)
      }
    },
    methods: {
      showChildrenHandler (item, index) {
        this.visible.splice(index, 1, !this.visible[index])
      },
      itemRemoveHandler (item, index) {
        this.data.splice(index, 1)
      }
    }
  }
</script>
