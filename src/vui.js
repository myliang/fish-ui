import Button from './components/Button.vue'
import Buttons from './components/Buttons.vue'
import Layout from './components/Layout.vue'
import Option from './components/Option.vue'
import Menu from './components/Menu.vue'
import Dropdown from './components/Dropdown.vue'
import Submenu from './components/Submenu.vue'
import Pagination from './components/Pagination.vue'
import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import Input from './components/Input.vue'
import Tag from './components/Tag.vue'
import Tags from './components/Tags.vue'
import Select from './components/Select.vue'
import Cascader from './components/Cascader.vue'

const components = [
  Button,
  Buttons,
  Layout,
  Option,
  Menu,
  Dropdown,
  Submenu,
  Pagination,
  Steps,
  Step,
  Input,
  Tag,
  Tags,
  Select,
  Cascader
]
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  // Vue.prototype.$Loading = LoadingBar
  // Vue.prototype.$Message = Message
  // Vue.prototype.$Modal = Modal
  // Vue.prototype.$Notice = Notice
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  Button,
  Buttons,
  Layout,
  Option,
  Menu,
  Dropdown,
  Submenu,
  Pagination,
  Steps,
  Step,
  Input,
  Tag,
  Tags,
  Select,
  Cascader
}
