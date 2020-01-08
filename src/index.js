import './styles/index.less'

import BackTop from './components/BackTop.vue'
import Button from './components/Button.vue'
import Buttons from './components/Buttons.vue'
import Calendar from './components/Calendar.vue'
import Card from './components/Card.vue'
import Cards from './components/Cards.vue'
import Carousel from './components/Carousel.vue'
import CarouselItem from './components/CarouselItem.vue'
import Cascader from './components/Cascader.vue'
import Checkbox from './components/Checkbox.vue'
import Checkboxes from './components/Checkboxes.vue'
import Col from './components/Col.vue'
import DatePicker from './components/DatePicker.vue'
import Dropdown from './components/Dropdown.vue'
import Field from './components/Field.vue'
import Fields from './components/Fields.vue'
import Form from './components/Form.vue'
import Input from './components/Input.vue'
import InputNumber from './components/InputNumber.vue'
import Layout from './components/Layout.vue'
import Menu from './components/Menu.vue'
import Message from './components/Message.vue'
import Modal from './components/Modal.vue'
import Option from './components/Option.vue'
import OptGroup from './components/OptGroup.vue'
import Pagination from './components/Pagination.vue'
import Radio from './components/Radio.vue'
import Radios from './components/Radios.vue'
import Row from './components/Row.vue'
import Select from './components/Select.vue'
import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import Submenu from './components/Submenu.vue'
import Table from './components/Table.vue'
import TabPane from './components/TabPane.vue'
import Tabs from './components/Tabs.vue'
import Tag from './components/Tag.vue'
import Tags from './components/Tags.vue'
import TimePicker from './components/TimePicker.vue'
import Upload from './components/Upload.vue'
import Tree from './components/Tree.vue'
import TreeSelect from './components/TreeSelect.vue'
import Divider from './components/Divider.vue'
import Image from './components/Image.vue'
import Transfer from './components/Transfer.vue'
import Timeline from './components/Timeline.vue'
import TimelineItem from './components/TimelineItem.vue'
import Switch from './components/Switch.vue'
import Collapse from './components/Collapse.vue'
import CollapseItem from './components/CollapseItem.vue'
import Loader from './components/Loader.vue'
import Segment from './components/Segment.vue'

import $message from './components/message.js'
import $popup from './components/popup.js'

const components = {
  BackTop,
  Button,
  Buttons,
  Calendar,
  Card,
  Cards,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  Checkboxes,
  Col,
  DatePicker,
  Dropdown,
  Field,
  Fields,
  Form,
  Input,
  InputNumber,
  Layout,
  Menu,
  Message,
  Modal,
  Option,
  OptGroup,
  Pagination,
  Radio,
  Radios,
  Row,
  Select,
  Steps,
  Step,
  Submenu,
  Table,
  TabPane,
  Tabs,
  Tag,
  Tags,
  TimePicker,
  Upload,
  Tree,
  TreeSelect,
  Divider,
  Image,
  Transfer,
  Timeline,
  TimelineItem,
  Switch,
  Collapse,
  CollapseItem,
  Loader,
  Segment
}
const install = function (Vue, opts = {}) {
  Object.values(components).forEach((component) => {
    // console.log(component.name)
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = $message
  Vue.prototype.$popup = $popup
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// install message, popup to window
window.$message = $message
window.$popup = $popup

export default Object.assign({}, components, {install})
