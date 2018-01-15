<template>
  <div :class="['item', {'active': show}]">
    <div class="title" @click="clickTitleHandler">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fish-collapse-item',
  props: {
    title: { type: String },
    index: { type: [String, Number], requred: true }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    clickTitleHandler () {
      this.show = !this.show
      this.$emit('click', this.index, this.show)
    }
  }
}
</script>

