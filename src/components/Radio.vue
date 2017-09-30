<template>
  <div :class="classObject" @click="clickHandler">
    <input type="radio"/>
    <label></label>
    <span><slot/></span>
  </div>
</template>
<script>
  export default {
    name: 'vui-radio',
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
        return ['vui radio', {'active': this.active}, {'disabled': this.disabled}]
      }
    },
    methods: {
      clickHandler (evt) {
        this.active = true
        evt.index = this.index
      }
    }
  }
</script>
