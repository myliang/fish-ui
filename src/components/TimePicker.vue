<template>
  <div class="vui input time-picker"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <input type="text" :placeholder="hint" :value="value" style="width: 125px;" readonly/>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-calendar" v-else></i>
    <div v-if="visible" class="content" :style="{width: `${(62 + 2) * groups.length}px`}">
      <ul class="vui menu vertical" v-for="(group, groupIndex) in groups">
        <li :class="['item', {'active': item === (value.split(':')[groupIndex] || '00')}]"
            @click.stop="selectHandler(item, groupIndex)"
            v-for="item in group">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { calendar } from '../config'
  export default {
    name: 'vui-time-picker',
    directives: { clickoutside },
    props: {
      value: { type: String, default: '00:00:00' },
      hint: { type: String, default: 'Please time' }
    },
    data () {
      return {
        showClear: false,
        visible: false,
        groups: [calendar.hours, calendar.minutes, calendar.seconds]
      }
    },
    computed: {
      valueEmpty () {
        return /^\s*$/.test(this.value)
      }
    },
    methods: {
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      clickHandler () {
        this.visible = !this.visible
      },
      selectHandler (item, index) {
        let values = (this.valueEmpty ? '00:00:00' : this.value).split(':')
        values[index] = item
        this.$emit('input', values.join(':'))
        this.$emit('change', values.join(':'))
      },
      clearHandler () {
        this.visible = false
        this.$emit('input', '')
        this.$emit('change', '')
      },
      awayHandler () {
        this.visible = false
        this.showClear = false
      }
    }
  }
</script>
