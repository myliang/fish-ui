<template>
  <ul class="fish tree">
    <li v-for="(item, index) in data" :key="item[0]" :class="{'active': valueIncludes(item[0])}">
      <i :class="item[2] && visible[index] ? iconCaretDown : iconCaretRight" v-if="item[2]" @click.stop="showChildrenHandler(item, index)"></i>
      <i v-else>&nbsp;</i>
      <span class="title" @click="selectHandler(item)" @dbclick="itemDoubleClickHandler(item)">{{ item[1] }}</span>
      <strong v-if="item.length < 3 && edited" @click="itemRemoveHandler(item, index)">&times;</strong>
      <fish-tree :data="item[2]" v-if="item[2] && visible[index]"
                 :edited="edited"
                 :expand="expand"
                 :value="value"
                 @select="selectHandler" @item-remove="itemRemoveHandler"></fish-tree>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'fish-tree',
    props: {
      value: { type: [String, Array], default: '' },
      expand: { type: Boolean, default: false },
      data: { type: Array, required: true },
      edited: { type: Boolean, default: false },
      iconCaretRight: { type: String, default: 'fa fa-caret-right' },
      iconCaretDown: { type: String, default: 'fa fa-caret-down' }
    },
    data () {
      return {
        visible: this.data.map((ele) => this.expand)
      }
    },
    computed: {
      multiple () {
        return typeof this.value !== 'string'
      }
    },
    methods: {
      showChildrenHandler (item, index) {
        this.visible.splice(index, 1, !this.visible[index])
      },
      itemDoubleClickHandler (item) {
        this.$emit('item-dbclick', item)
      },
      itemRemoveHandler (item, index) {
        this.$emit('item-remove', this.data, item, index)
      },
      selectHandler (item) {
        if (!this.multiple) {
          this.$emit('select', item)
          this.$emit('input', item[0])
        } else {
//          let vSet = new Set(this.value)
//          if (vSet.has(item[0])) {
//            vSet.delete(item[0])
//          } else {
//            vSet.add(item[0])
//          }
//          this.$emit('select', values)
//          this.$emit('input', [...values])
        }
      },
      valueIncludes (v) {
        if (!this.multiple) {
          return this.value === v
        } else {
          return this.value.includes(v)
        }
      }
    }
  }
</script>
