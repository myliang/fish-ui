<template>
  <div class="fish carousel">
    <div class="content" :style="{'width': `${width}px`}">
      <ul class="list" 
        @click="clickHandler($event)"
        :style="{
          width: `${width * childrenLength}px`,
          transform: `translate3d(-${activeIndex * width}px, 0px, 0px)`,
          transition
        }">
        <slot></slot>
      </ul>
    </div>
    <template v-if="showCount">
      <ul class="dots" v-if="childrenLength <= 10">
        <li :style="dotStyle" v-for="(i, index) in childrenLength" :class="{'active': activeIndex === index}" @click.stop="dotClickHandler(index)" :key="index"></li>
      </ul>
      <div class="count" v-else>{{activeIndex + 1}} / {{childrenLength}}</div>
    </template>
    <div class="play-toolbar-wrapper" v-else>
      <div class="play-toolbar">
        <div :class="['play-toolbar-item', activeIndex == 0 ? 'disabled' : '']" @click.stop="prev()"><i class="fa fa-arrow-left"/></div>
        <div class="play-toolbar-item" @click.stop="clickPlayHandler"><i :class="`fa fa-${!pause ? 'pause' : 'play'}-circle`"/></div>
        <div :class="['play-toolbar-item', activeIndex === childrenLength ? 'disabled' : '']" @click.stop="next()"><i class="fa fa-arrow-right"/></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-carousel',
    props: {
      transition: { type: String, default: '-webkit-transform 500ms ease' },
      dotStyle: { type: String, default: '' },
      showCount: { type: Boolean, default: true },
      timeout: { type: Number, default: 3000 },
      autoPlay: { type: Boolean, default: false }
    },
    data () {
      return {
        pause: !this.autoPlay,
        timer: null,
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
        this.startTimer()
      }
    },
    methods: {
      clickPlayHandler () {
        if (this.pause) {
          this.startTimer()
        } else {
          this.stopTimer()
        }
        this.pause = !this.pause
      },
      startTimer () {
        this.timer = setInterval(() => {
          this.next()
        }, this.timeout)
      },
      stopTimer () {
        console.log('stop-timer')
        if (this.timer != null) {
          clearInterval(this.timer)
        }
        this.timer = null
      },
      clickHandler (evt) {
        this.next()
      },
      prev () {
        if (this.activeIndex <= 0) {
          this.activeIndex = 0
        } else {
          --this.activeIndex
        }
        this.$emit('change', this.activeIndex)
        if (this.activeIndex >= 1 && this.activeIndex < this.childrenLength - 1) {
          this.$children[this.activeIndex - 1].$el.style.display = 'block'
        }
      },
      next () {
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
