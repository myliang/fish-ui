<template>
  <ul class="fish tree">
    <li v-for="(item, index) in data" :key="item[0]" :class="{'active': valueIncludes(item[0])}">
      <i class="fa fa-caret-right" v-if="item[2]" @click.stop="showChildrenHandler(item, index)"></i>
      <i v-else>&nbsp;</i>
      <span class="title" @click="selectHandler(item)">{{ item[1] }}</span>
      <fish-tree :data="item[2]" v-if="item[2] && visible[index]"
                :expand="expand"
                :value="value"
                @select="selectHandler"></fish-tree>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'fish-tree',
    props: {
      value: { type: [String, Array], default: '' },
      expand: { type: Boolean, default: false },
      data: { type: Array, required: true }
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
