<template>
  <li :class="classObject" @click="clickHandler">
    <slot>{{ content }}</slot>
  </li>
</template>
<script>
  export default {
    name: 'fish-option',
    props: {
      disabled: { type: Boolean, default: false },
      index: { type: [String, Number], required: true },
      content: { type: String }
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      classObject () {
        return [
          'item',
          { 'active': this.active },
          { 'disabled': this.disabled }
        ]
      }
    },
    methods: {
      clickHandler (evt) {
        evt.index = this.index
        this.$emit('click', evt)
      }
    }
  }
</script>
