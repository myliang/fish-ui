<template>
  <ul class="fish tree">
    <li v-for="(item, index) in data" :key="item.key"
      :class="{'active': selectedKey === item.key}">
      <i :class="item.children && visible[index] ? iconCaretDown : iconCaretRight"
         v-if="item.children && item.children.length > 0"
         @click.stop="showChildrenHandler(item, index)"></i>
      <i v-else>&nbsp;</i>
      <fish-checkbox :index="item.key"
                     :state="dataKeyMap[item.key][0]"
                     @click.stop="onItemChecked(item)"
                     ref="checkboxes" v-if="checkabled(multiple, item)"></fish-checkbox>

      <span class="title"
            @contextmenu.prevent="onItemContextmenu(item)"
            @click="onItemClick(item)"
            @dblclick="onItemDblclick(item)" v-html="onItemRender(item)">
      </span>


      <slot v-bind="item"
            @contextmenu.prevent="onItemContextmenu(item)"
            @click="onItemClick(item)"
            @dblclick="onItemDblclick(item)"></slot>

      <strong v-if="edited && (!item.children || item.children.length <= 0)"
              @click="itemRemoveHandler(item, index, $event)">&times;</strong>
      <fish-tree-node
          :data="item.children || []"
          :multiple="multiple"
          :edited="edited"
          :expand="expand"
          :checkabled="checkabled"
          :selected-key="selectedKey"
          :data-key-map="dataKeyMap"
          :on-item-checked="onItemChecked"
          :on-item-contextmenu="onItemContextmenu"
          :on-item-dblclick="onItemDblclick"
          :on-item-click="onItemClick"
          :on-item-remove="onItemRemove"
          :on-item-render="onItemRender"
          v-if="item.children && visible[index]">
          <template slot-scope="item"><slot v-bind="item"></slot></template>
          </fish-tree-node>
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
      checkabled: { type: Function },
      data: { type: Array, required: true }, // [{title: '', key: '', children: '', checked: false}]
      dataKeyMap: { type: Object }, // {key: [state, [[key, state]]}
      edited: { type: Boolean, default: false },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' },
      onItemContextmenu: { type: Function, default: (item) => {} },
      onItemChecked: { type: Function, default: (item) => {} },
      onItemDblclick: { type: Function, default: (item) => {} },
      onItemClick: { type: Function, default: (item) => {} },
      onItemRemove: { type: Function, default: (data, item, index, evt) => {} },
      onItemRender: { type: Function, default: (item) => item.title }
    },
    data () {
      return {
        visible: this.data.map((ele) => ele.expand === undefined ? this.expand : ele.expand)
      }
    },
    methods: {
      showChildrenHandler (item, index) {
        this.visible.splice(index, 1, !this.visible[index])
      },
      itemRemoveHandler (item, index, evt) {
        // this.data.splice(index, 1)
        this.onItemRemove(this.data, item, index, evt)
      }
    }
  }
</script>
