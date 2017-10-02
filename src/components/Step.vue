<template>
  <div :class="classObject">
    <i :class="iClassObject">{{ this.icon ? '' : index }}</i>
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description" v-if="description">{{ description }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-step',
    props: {
      icon: { type: String },
      title: { type: String, required: true },
      description: { type: String },
      active: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false }
    },
    data () {
      return {
        index: 9
      }
    },
    computed: {
      classObject () {
        return [
          'fish step',
          { 'active': this.active },
          { 'disabled': this.disabled }
        ]
      },
      iClassObject () {
        return [
          this.icon ? 'icon ' + this.icon : ''
        ]
      }
    }
  }
</script>
