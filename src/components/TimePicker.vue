<template>
  <div class="fish input time-picker"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <input type="text" :placeholder="hint" :value="value" style="width: 125px;" readonly/>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-calendar" v-else></i>
    <div v-show="visible" ref="content" class="fish-time-picker-layer">
      <ul class="fish menu vertical" :key="groupIndex" v-for="(group, groupIndex) in groups">
        <li :class="['item', {'active': item === (value.split(':')[groupIndex] || '00')}]"
            @click.stop="selectHandler(item, groupIndex)"
            :key="i"
            v-for="(item, i) in group">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import { calendar, notify } from '../config'
  import { toBody } from './layer'
  export default {
    name: 'fish-time-picker',
    directives: { clickoutside },
    props: {
      value: { type: String, default: '00:00:00' },
      hint: { type: String, default: '' }
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
      visibleAfter () {
        toBody(this.visible, this.$el, this.$refs.content, false)
      },
      mouseOverHandler () {
        this.showClear = true
      },
      mouseOutHandler () {
        this.showClear = false
      },
      clickHandler () {
        this.visible = !this.visible
        this.visibleAfter()
      },
      selectHandler (item, index) {
        let values = (this.valueEmpty ? '00:00:00' : this.value).split(':')
        values[index] = item
        this.changeHandler(values.join(':'))
      },
      clearHandler () {
        this.visible = false
        this.visibleAfter()
        this.changeHandler('')
      },
      awayHandler () {
        this.visible = false
        this.visibleAfter()
        this.showClear = false
      },
      changeHandler (v) {
        this.$emit('input', v)
        this.$emit('change', v)
        notify.field.change(this)
      }
    }
  }
</script>
