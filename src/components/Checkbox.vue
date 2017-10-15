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
      disabled: { type: Boolean, default: false },
      state: { type: String, default: '' } // checked, open
    },
    data () {
      return {
        active: this.state === 'checked'
      }
    },
    watch: {
      state (nowVal, oldVal) {
        this.active = nowVal === 'checked'
      }
    },
    computed: {
      classObject () {
        return [
          'fish checkbox',
          {'active': this.state === 'checked' || this.active},
          {'open': this.state === 'open'},
          {'disabled': this.disabled}
        ]
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
