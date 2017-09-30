<template>
  <div :class="['vui input date-picker']"
       @click="clickHandler"
       @mouseover="mouseOverHandler"
       @mouseout="mouseOutHandler"
       v-clickoutside="awayHandler">
    <input type="text" :placeholder="hint" :value="value" readonly/>
    <i class="fa fa-times-circle" style="opacity: .6;" @click.stop="clearHandler" v-if="showClear && !valueEmpty"></i>
    <i class="fa fa-calendar" v-else></i>
    <div class="content" v-if="visible">
      <vui-calendar @select="selectHandler"
                  :cellRenderTemplate="cellRender"
                  :min="min" :max="max" :mode="mode"
                  :value="value === '' ? undefined : value"></vui-calendar>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import clickoutside from '../directives/clickoutside'
  import VuiCalendar from './Calendar.vue'

  const formats = {
    year: 'YYYY',
    month: 'YYYY-MM',
    day: 'YYYY-MM-DD',
    hour: 'YYYY-MM-DD HH',
    minute: 'YYYY-MM-DD HH:mm',
    second: 'YYYY-MM-DD HH:mm:ss'
  }

  export default {
    name: 'vui-date-picker',
    directives: { clickoutside },
    components: {VuiCalendar},
    props: {
      value: { type: String },
      mode: { type: String, default: 'day' }, // second, minute, hour, day, month, year
      min: { type: String, default: '-1' },
      max: { type: String, default: '-1' },
      format: { type: String },
      hint: { type: String, default: 'Please date' }
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
        this.$emit('input', '')
      },
      awayHandler () {
        this.visible = false
        this.showClear = false
      },
      selectHandler (item) {
        this.visible = false
        this.showClear = false
        const v = moment(item).format(this.format || formats[this.mode])
        this.$emit('input', v)
        this.$emit('change', v)
      },
      cellRender (title, content) {
        return title
      }
    }
  }
</script>
