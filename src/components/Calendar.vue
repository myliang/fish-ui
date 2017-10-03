<template>
  <div class="fish calendar" v-if="current.year">
    <div class="header">
      <a :class="['prev', {'disabled': state === 'year'}]" @click.stop.prevent="pageHandler(-1)"><i class="fa fa-chevron-left"></i></a>
      <a :class="mode" @click.stop="showItemsHandler(mode)" v-for="(mode, index) in modes" v-if="modeIndex >= index">{{ mode === 'month' ? current[mode] + 1 : current[mode] }}</a>
      <!--<a class="reset" @click.stop="todayHandler" v-html="today" v-if="mode === 'day'"></a>-->
      <a :class="['next', {'disabled': state === 'year'}]" @click.stop="pageHandler(1)"><i class="fa fa-chevron-right"></i></a>
    </div>

    <table :class="['body', state]">
      <thead v-if="state === 'day'">
      <tr>
        <th v-for="week in weeks" class="cell">{{week}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="array in arrays">
        <td v-for="item in array">
          <div :class="['cell', {'active': cellActive(item)}, {'disabled': cellDisabled(item)}]"
               @click.stop="selectItemHandler(item)"
               v-html="cellRender(item)">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import moment from 'moment'
  import { calendar } from '../config'

  export default {
    name: 'fish-calendar',
    props: {
      value: { type: String },
      mode: { type: String, default: 'day' }, // second, minute, hour, day, month, year
      min: { type: String, default: '-1' },
      max: { type: String, default: '-1' },
      today: { type: String, default: calendar.today },
      weeks: { type: Array, default: () => calendar.weeks },
      months: { type: Array, default: () => calendar.months },
      secondRender: { type: Function, default: (second) => '' },
      minuteRender: { type: Function, default: (minute) => '' },
      hourRender: { type: Function, default: (hour) => '' },
      dayRender: { type: Function, default: (day) => '' },
      monthRender: { type: Function, default: (month) => '' },
      yearRender: { type: Function, default: (year) => '' },
      cellRenderTemplate: { type: Function, default: (title, content) => `<div class="title">${title}</div><div class="content">${content}</div>` }
    },
    mounted () {
      this.reset()
    },
    data () {
      return {
        state: this.mode, // second, minute, hour, day, month, year
        modes: modes,
        modeIndex: modes.indexOf(this.mode),
        valueDate: moment(this.value),
        current: {year: null, month: null, day: null, hour: null, minute: null, second: null},
        arrays: [] // [[], [], []]
      }
    },
    methods: {
      reset () {
        this.setCurrent(this.valueDate)
        // 如果mode是时分秒默认首先显示日期
        if (this.modeIndex > 2) this.state = 'day'
        this.showItemsHandler(this.state)
      },
      setCurrent (date) {
        this.current = {
          year: date.year(),
          month: date.month(),
          day: date.date(),
          hour: date.hour(),
          minute: date.minute(),
          second: date.second()
        }
      },
      pageHandler (step) {
        let currentDate = moment(this.current)
        currentDate.add(step, modes[modes.indexOf(this.state) - 1])
        this.setCurrent(currentDate)
        this.showItemsHandler(this.state)
      },
      showItemsHandler (state) {
        this.state = state
        this.arrays = stateArraysMap[state](this.current)
        this.emitChange()
      },
      selectItemHandler (item) {
        this.current[this.state] = this.state === 'day' ? item.date() : item
        let mIndex = this.modes.indexOf(this.state)
        if (this.modeIndex > mIndex) {
          this.showItemsHandler(this.modes[mIndex + 1])
        } else {
          this.emitSelect()
        }
      },
      cellRender (item) {
        let title = stateTitleRenderMap[this.state](item)
        let content = this[this.state + 'Render'](item)
        return this.cellRenderTemplate(title, content)
      },
      cellActive (item) {
        const { current, state, valueDate } = this
        if (this.state === 'day') {
          return valueDate.date() === item.date() && valueDate.month() === item.month() && valueDate.year() === item.year()
        }
        for (let mode of modes) {
          if (mode === state) {
            return valueDate[mode]() === item
          } else {
            if (valueDate[mode]() !== current[mode]) return false
          }
        }
      },
      cellDisabled (item) {
        if (this.state === 'day') {
          return this.current.month !== item.month() || this.notInMinAndMax(item)
        } else {
          let currents = Object.assign({}, this.current)
          currents[this.state] = item
          return this.notInMinAndMax(moment(currents))
        }
      },
      notInMinAndMax (item) {
        return (this.min !== '-1' && moment(this.min).isAfter(item, this.state)) ||
        (this.max !== '-1' && moment(this.max).isBefore(item, this.state))
      },
      emitSelect () {
        if (this.state === this.mode) {
          this.$emit('select', this.current)
          this.$emit('input', this.current)
        }
      },
      emitChange () {
        // console.log('change:', this.arrays)
        this.$emit('change', this.state, this.arrays, this.current)
      }
    }
  }

  const modes = ['year', 'month', 'day', 'hour', 'minute', 'second']
  const minuteArrays = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47],
    [48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59]
  ]
  const stateArraysMap = {
    year: (current) => [
      [current.year - 10, current.year - 9, current.year - 8, current.year - 7],
      [current.year - 6, current.year - 5, current.year - 4, current.year - 3],
      [current.year - 2, current.year - 1, current.year - 0, current.year + 1],
      [current.year + 2, current.year + 3, current.year + 4, current.year + 5],
      [current.year + 6, current.year + 7, current.year + 8, current.year + 9]],
    month: (current) => [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]],
    day: (current) => monthDays(moment([current.year, current.month, current.day])),
    hour: (current) => [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19], [20, 21, 22, 23]],
    minute: (current) => minuteArrays,
    second: (current) => minuteArrays
  }
  const stateTitleRenderMap = {
    year: (year) => year,
    month: (month) => calendar.months[month],
    day: (day) => day.date(),
    hour: (hour) => hour + 'h',
    minute: (minute) => minute + 'm',
    second: (second) => second + 's'
  }

  const monthDays = (momentDate) => {
    // console.log('::', momentDate.format('YYYY-MM-DD'))
    const datess = [[], [], [], [], [], []]
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        let startDate = moment(momentDate).date(1) // 当月第一天
        let index = i * 7 + j
        datess[i][j] = startDate.weekday(index)
      }
    }
    return datess
  }
</script>
