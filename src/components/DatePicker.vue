<template>
  <div :class="['fish input date-picker']"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <input type="text" :placeholder="hint" :value="value" readonly/>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-calendar" v-else></i>
    <div class="content" @click.stop="()=>{}" v-if="visible">
      <fish-calendar @select="selectHandler"
                  :cellRender="cellRender"
                  :min="min" :max="max" :mode="mode"
                  :tody="today" :weeks="weeks" :months="months"
                  :value="value === '' ? undefined : value"></fish-calendar>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import clickoutside from '../directives/clickoutside'
  import fishCalendar from './Calendar.vue'
  import { notify, calendar } from '../config'

  const formats = {
    year: 'YYYY',
    month: 'YYYY-MM',
    day: 'YYYY-MM-DD',
    hour: 'YYYY-MM-DD HH',
    minute: 'YYYY-MM-DD HH:mm',
    second: 'YYYY-MM-DD HH:mm:ss'
  }

  export default {
    name: 'fish-date-picker',
    directives: { clickoutside },
    components: {fishCalendar},
    props: {
      value: { type: String },
      mode: { type: String, default: 'day' }, // second, minute, hour, day, month, year
      min: { type: String, default: '-1' },
      max: { type: String, default: '-1' },
      today: { type: String, default: calendar.today },
      weeks: { type: Array, default: () => calendar.weeks },
      months: { type: Array, default: () => calendar.months },
      format: { type: String },
      hint: { type: String, default: '' }
    },
    data () {
      return {
        visible: false,
        showClear: false
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
      clearHandler () {
        this.visible = false
        this.changeHandler('')
      },
      awayHandler () {
        this.visible = false
        this.showClear = false
      },
      selectHandler (item) {
        this.visible = false
        this.showClear = false
        const v = moment(item).format(this.format || formats[this.mode])
        this.changeHandler(v)
      },
      cellRender (h, item) {
        return h('span', item)
      },
      changeHandler (v) {
        this.$emit('input', v)
        this.$emit('change', v)
        notify.field.change(this)
      }
    }
  }
</script>
