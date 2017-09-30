<template>
  <transition enter-active-class="tag-enter-active" leave-active-class="tag-leave-active" v-if="closeExists && !closed">
    <a :class="classObject" @click="clickHandler($event)">
      <slot></slot>
      <i :class="icon" v-if="icon"></i>
      <i :class="iconClose" @click="closeHandler($event)"></i>
    </a>
  </transition>
  <a :class="classObject" @click="clickHandler($event)" v-else-if="!closeExists">
    <slot></slot>
    <i :class="icon" v-if="icon"></i>
  </a>
</template>
<script>
  export default {
    name: 'vui-tag',
    props: {
      icon: String,
      iconClose: { type: String, default: 'fa fa-close' },
      index: { type: [String, Number], required: true },
      size: { type: String, default: '' },
      color: { type: String, default: '' }
    },
    data () {
      return {
        closed: false
      }
    },
    computed: {
      classObject () {
        return [
          'vui tag',
          this.size,
          this.color
        ]
      },
      closeExists () {
        return this._events.close
      }
    },
    methods: {
      clickHandler (event) {
        this.$emit('click', this.index)
      },
      closeHandler (event) {
        this.$emit('close', this.index)
        this.closed = true
      }
    }
  }
</script>
