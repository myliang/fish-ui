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
    name: 'fish-tag',
    props: {
      icon: String,
      iconClose: { type: String, default: 'fa fa-close' },
      index: { type: [String, Number], required: true },
      size: { type: String, default: '' },
      color: { type: String, default: '' },
      shape: { type: String, default: 'square' }, // square, circle
      floating: { type: Boolean, default: false },
      attached: { type: String } // 依附在什么地方 top, bottom, top left, top left, bottom left, bottom right
    },
    data () {
      return {
        closed: false
      }
    },
    computed: {
      classObject () {
        return [
          'fish tag',
          this.size,
          this.color,
          this.shape,
          {'floating': this.floating},
          {'attached': this.attached},
          this.attached
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
