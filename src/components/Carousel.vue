<template>
  <div class="fish carousel">
    <div class="content" :style="{'width': `${width}px`}">
      <ul class="list" 
        @click="clickHandler($event)"
        :style="{
          width: `${width * childrenLength}px`,
          transform: `translate3d(-${activeIndex * width}px, 0px, 0px)`,
          transition: '-webkit-transform 500ms ease'
        }">
        <slot></slot>
      </ul>
    </div>
    <ul class="dots">
      <li :style="dotStyle" v-for="(i, index) in childrenLength" :class="{'active': activeIndex === index}" @click.stop="dotClickHandler(index)"></li>
    </ul>
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
      })
      // auto play
      if (this.autoPlay) {
        setInterval(() => {
          if (this.childrenLength - 1 === this.activeIndex) {
            this.activeIndex = 0
          } else {
            ++this.activeIndex
          }
        }, 5000)
      }
    },
    methods: {
      clickHandler (evt) {
        if (this.activeIndex >= this.childrenLength - 1) {
          this.activeIndex = 0
        } else {
          ++this.activeIndex
        }
      },
      dotClickHandler (index) {
        this.activeIndex = index
      }
    }
  }
</script>
