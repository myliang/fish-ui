<template>
  <div class="fish carousel">
    <div class="content" :style="{'width': `${width}px`}">
      <ul class="list" 
        @mouseover="pause = true"
        @mouseout="pause = false"
        @click="clickHandler($event)"
        :style="{
          width: `${width * childrenLength}px`,
          transform: `translate3d(-${activeIndex * width}px, 0px, 0px)`,
          transition: '-webkit-transform 500ms ease'
        }">
        <slot></slot>
      </ul>
    </div>
    <ul class="dots" v-if="childrenLength <= 10">
      <li :style="dotStyle" v-for="(i, index) in childrenLength" :class="{'active': activeIndex === index}" @click.stop="dotClickHandler(index)" :key="index"></li>
    </ul>
    <div class="count" v-else>{{activeIndex + 1}} / {{childrenLength}}</div>
  </div>
</template>
<script>
  export default {
    name: 'fish-carousel',
    props: {
      dotStyle: { type: String, default: '' },
      autoPlay: { type: Boolean, default: false }
    },
    data () {
      return {
        pause: false,
        width: 0,
        childrenLength: 0,
        activeIndex: 0
      }
    },
    mounted () {
      this.width = this.$el.offsetWidth
      this.childrenLength = this.$children.length
      this.$children.forEach((ele, index) => {
        ele.$el.style.width = this.width + 'px'
        if (index > 2) {
          ele.$el.style.display = 'none'
        }
      })
      // auto play
      if (this.autoPlay) {
        setInterval(() => {
          if (!this.pause) this.playNext()
        }, 5000)
      }
    },
    methods: {
      clickHandler (evt) {
        this.playNext()
      },
      playNext () {
        if (this.activeIndex >= this.childrenLength - 1) {
          this.activeIndex = 0
        } else {
          ++this.activeIndex
        }
        this.$emit('change', this.activeIndex)
        if (this.activeIndex > 1 && this.activeIndex < this.childrenLength - 1) {
          this.$children[this.activeIndex + 1].$el.style.display = 'block'
        }
      },
      dotClickHandler (index) {
        this.activeIndex = index
      }
    }
  }
</script>
