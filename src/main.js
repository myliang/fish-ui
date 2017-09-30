// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import App from './Demo'

import './assets/normalize.css'
import './styles/index.less'

import DemoButton from './documents/DemoButton.vue'
import DemoLayout from './documents/DemoLayout.vue'
import DemoMenu from './documents/DemoMenu.vue'
import DemoGrid from './documents/DemoGrid.vue'
import DemoCard from './documents/DemoCard.vue'
import DemoTable from './documents/DemoTable.vue'
import DemoPagination from './documents/DemoPagination.vue'
import DemoDropdown from './documents/DemoDropdown.vue'
import DemoSteps from './documents/DemoSteps.vue'
import DemoTag from './documents/DemoTag.vue'
import DemoInput from './documents/DemoInput.vue'
import DemoInputNumber from './documents/DemoInputNumber.vue'
import DemoRadio from './documents/DemoRadio.vue'
import DemoCheckbox from './documents/DemoCheckbox.vue'
import DemoSelect from './documents/DemoSelect.vue'
import DemoCascader from './documents/DemoCascader.vue'
import DemoCalendar from './documents/DemoCalendar.vue'
import DemoDatePicker from './documents/DemoDatePicker.vue'
import DemoTimePicker from './documents/DemoTimePicker.vue'
import DemoMessage from './documents/DemoMessage.vue'
import DemoNotification from './documents/DemoNotification.vue'
import DemoPopup from './documents/DemoPopup.vue'
import DemoBackTop from './documents/DemoBackTop.vue'
import DemoCarousel from './documents/DemoCarousel.vue'
import DemoTabs from './documents/DemoTabs.vue'
import DemoUpload from './documents/DemoUpload.vue'
import DemoModal from './documents/DemoModal.vue'
import DemoForm from './documents/DemoForm.vue'

Vue.use(VueHighlightJS)
Vue.use(VueRouter)
const routes = [
  { path: '/components/button', component: DemoButton },
  { path: '/components/menu', component: DemoMenu },
  { path: '/components/layout', component: DemoLayout },
  { path: '/components/grid', component: DemoGrid },
  { path: '/components/card', component: DemoCard },
  { path: '/components/pagination', component: DemoPagination },
  { path: '/components/dropdown', component: DemoDropdown },
  { path: '/components/table', component: DemoTable },
  { path: '/components/step', component: DemoSteps },
  { path: '/components/tag', component: DemoTag },
  { path: '/components/input', component: DemoInput },
  { path: '/components/input-number', component: DemoInputNumber },
  { path: '/components/radio', component: DemoRadio },
  { path: '/components/checkbox', component: DemoCheckbox },
  { path: '/components/select', component: DemoSelect },
  { path: '/components/cascader', component: DemoCascader },
  { path: '/components/calendar', component: DemoCalendar },
  { path: '/components/datepicker', component: DemoDatePicker },
  { path: '/components/timepicker', component: DemoTimePicker },
  { path: '/components/message', component: DemoMessage },
  { path: '/components/notification', component: DemoNotification },
  { path: '/components/popup', component: DemoPopup },
  { path: '/components/backtop', component: DemoBackTop },
  { path: '/components/carousel', component: DemoCarousel },
  { path: '/components/tabs', component: DemoTabs },
  { path: '/components/upload', component: DemoUpload },
  { path: '/components/modal', component: DemoModal },
  { path: '/components/form', component: DemoForm }
]
const router = new VueRouter({
  routes
})

// global bus
// const bus = new Vue()
// Vue.bus = bus
// Object.defineProperties(bus, {
//   on: {
//     get () {
//       return this.$on
//     }
//   },
//   once: {
//     get () {
//       return this.$once
//     }
//   },
//   off: {
//     get () {
//       return this.$off
//     }
//   },
//   emit: {
//     get () {
//       return this.$emit
//     }
//   }
// })
// Object.defineProperty(Vue.prototype, '$bus', {
//   get () {
//     return bus
//   }
// })

// import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css' // 样式文件
// Vue.directive('highlight', function (el) {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block)
//   })
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
