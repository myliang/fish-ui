<template>
  <div :class="classObject" @click="clickHandler">
    <input type="checkbox"/>
    <label></label>
    <span class="label" v-if="$slots.default"><slot/></span>
  </div>
</template>
<script>
  export default {
    name: 'fish-checkbox',
    props: {
      index: { type: [String, Number], required: true },
      disabled: { type: Boolean, default: false }
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      classObject () {
        return ['fish checkbox', {'active': this.active}, {'disabled': this.disabled}]
      }
    },
    methods: {
      clickHandler (evt) {
        this.active = !this.active
        evt.index = this.index
        this.$emit('click', evt)
        this.$emit('input', this.active)
      }
    }
  }
</script>
