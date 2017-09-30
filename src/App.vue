<template>
  <div id="app">

    <router-link to="/components/button">Demo Button</router-link>

    <h2>Button</h2>
    <vui-input></vui-input>
    <vui-button>Next</vui-button>
    <vui-button size="tiny">下一个是什么</vui-button>
    <vui-button loading>Loading</vui-button>
    <vui-button active><i class="fa fa-search"></i>下一步</vui-button>
    <vui-button ><i class="fa fa-search"></i></vui-button>
    <vui-button type="positive">Positive</vui-button>
    <vui-button type="positive" active>相对好些吧</vui-button>
    <vui-button type="negative">Negative</vui-button>
    <vui-button type="negative" active>Positive Active</vui-button>
    <br/><br/>
    <vui-button type="basic">Basic</vui-button>
    <vui-button type="basic" active>Basic Active</vui-button>
    <vui-button type="primary">Primary</vui-button>
    <vui-button type="primary" active>Primary Active</vui-button>
    <vui-button disabled>Disabled</vui-button>
    <vui-button shape="circle"><i class="fa fa-search"></i></vui-button>

    <h2>Buttons</h2>
    <vui-buttons>
      <vui-button>Left</vui-button>
      <vui-button>Center</vui-button>
      <vui-button>Right</vui-button>
    </vui-buttons>

    <h2>Layout</h2>
    <vui-layout>
      <div slot="header">Header</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </vui-layout>
    <br/>
    <vui-layout sider="l">
      <div slot="header">Header</div>
      <div slot="sider">Left</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </vui-layout>

    <br/>

    <vui-layout sider="tr">
      <div slot="sider">Top Right</div>
      <div slot="header">Header</div>
      <div slot="content" style="height: 120px;">Content</div>
      <div slot="footer">Footer</div>
    </vui-layout>

    <h2>Menu</h2>
    <vui-menu default-active="2">
      <vui-option index="0" content="Jack"></vui-option>
      <vui-option index="1" content="Lucy"></vui-option>
      <vui-option index="2" content="Active"></vui-option>
      <vui-option index="3" disabled content="disabled"></vui-option>
    </vui-menu>
    <br/>
    <vui-menu style="width: 200px;">
      <vui-submenu index="0">
        <template slot="title">submenu</template>
        <vui-option index="0-0" content="Jack"></vui-option>
        <vui-option index="0-1" content="Lucy"></vui-option>
        <vui-option index="0-2" content="Active"></vui-option>
        <vui-submenu index="0-3">
          <template slot="title">submenu-3</template>
          <vui-option index="0-3-0" content="Jack"></vui-option>
          <vui-option index="0-3-1" content="Lucy"></vui-option>
          <vui-option index="0-3-2" content="Active"></vui-option>
        </vui-submenu>
      </vui-submenu>
      <vui-option index="1" content="Lucy"></vui-option>
      <vui-option index="2" content="Active"></vui-option>
      <vui-option index="3" disabled content="disabled"></vui-option>
    </vui-menu>
    <br/>
    <vui-menu mode="horizontal">
      <vui-option index="0" content="内容管理"></vui-option>
      <vui-option index="1" content="用户管理"></vui-option>
      <vui-option index="2" content="统计分析"></vui-option>
      <vui-submenu index="3">
        <template slot="title">submenu</template>
        <vui-option index="3-0" content="Jack"></vui-option>
        <vui-option index="3-1" content="Lucy"></vui-option>
        <vui-option index="3-2" content="Active"></vui-option>
        <!--<vui-option index="3-3">Option-3</vui-option>-->
        <vui-submenu index="3-3">
          <template slot="title">submenu-3</template>
          <vui-option index="3-3-0" content="Jack"></vui-option>
          <vui-option index="3-3-1" content="Lucy"></vui-option>
          <vui-option index="3-3-2" content="Active"></vui-option>
        </vui-submenu>
        <vui-option index="3-4" content="Option-4">Option-4</vui-option>
        <vui-option index="3-5" content="Option-5">Option-5</vui-option>
      </vui-submenu>
    </vui-menu>
    <br/>
    <vui-menu mode="inline" style="width: 200px;">
      <vui-option index="0" content="内容管理"></vui-option>
      <vui-submenu index="1" mode="inline">
        <template slot="title">用户管理</template>
        <vui-option index="1-0" content="Jack"></vui-option>
        <vui-option index="1-1" content="Lucy"></vui-option>
        <vui-option index="1-2" content="Active"></vui-option>
      </vui-submenu>
      <vui-option index="2" content="统计分析"></vui-option>
      <vui-submenu index="3" mode="inline">
        <template slot="title">submenu</template>
        <vui-option index="3-0" content="Jack"></vui-option>
        <vui-option index="3-1" content="Lucy"></vui-option>
        <vui-option index="3-2" content="Active"></vui-option>
        <vui-submenu index="3-3" mode="inline">
          <template slot="title">submenu-3</template>
          <vui-option index="3-3-0" content="Jack"></vui-option>
          <vui-option index="3-3-1" content="Lucy"></vui-option>
          <vui-option index="3-3-2" content="Active"></vui-option>
        </vui-submenu>
      </vui-submenu>
    </vui-menu>

    <h2>Dropdown</h2>
    <vui-dropdown>
      <a slot="title">Dropdown<i class="fa fa-arrow-circle-down" style="margin-left: 10px;"></i></a>
      <vui-option index="0" content="Jack"></vui-option>
      <vui-option index="1" content="Lucy"></vui-option>
      <vui-option index="2" content="Active"></vui-option>
      <vui-option index="3" disabled content="disabled"></vui-option>
    </vui-dropdown>
    <vui-dropdown>
      <vui-button slot="title">Dropdown<i class="fa fa-arrow-circle-down" style="margin-left: 10px;"></i></vui-button>
      <vui-option index="0" content="Jack"></vui-option>
      <vui-option index="1" content="Lucy"></vui-option>
      <vui-option index="2" content="Active"></vui-option>
      <vui-option index="3" disabled content="disabled"></vui-option>
    </vui-dropdown>
    <p>abck</p>

    <h2>Pagination</h2>
    <vui-pagination :total="500"></vui-pagination>

    <h2>Steps</h2>
    <vui-steps style="width: 100%;">
      <vui-step title="Finished" style="width: 33.33%;"></vui-step>
      <vui-step title="in Progress" style="width: 33.33%;" active icon="usd"></vui-step>
      <vui-step title="Waiting" style="width: 33.33%;" disabled description="this is description"></vui-step>
    </vui-steps>
    <vui-steps size="big">
      <vui-step title="Finished" description="这是描述"></vui-step>
      <vui-step title="in Progress" active description="this is description" icon="usd"></vui-step>
      <vui-step title="Waiting" disabled description="this is description"></vui-step>
    </vui-steps>
    <vui-steps mode="vertical" style="width: 300px;">
      <vui-step title="Finished" description="这是描述"></vui-step>
      <vui-step title="in Progress" active description="this is description" icon="usd"></vui-step>
      <vui-step title="Waiting" disabled description="this is description"></vui-step>
    </vui-steps>

    <h2>Tag</h2>
    <vui-tag :key="1">标签</vui-tag>
    <vui-tag :key="2">TAG</vui-tag>
    <vui-tag :key="3" @close="{}">关闭</vui-tag>
    <vui-tag :key="3" color="primary">关闭</vui-tag><br/><br/>
    <vui-tags :items="tags" edited @close="groupCloseHandler" @add="addCheckHandler"></vui-tags>
    <vui-tags :items="tags1" @click="checkClickHandler"></vui-tags>

    <h2>Input</h2>
    <vui-input></vui-input>
    <vui-input hint="trasaction" transparent></vui-input>
    <vui-button>GO>></vui-button>
    <vui-input loading></vui-input>
    <vui-input size="small" disabled></vui-input>
    <vui-input icon="search"></vui-input>
    <vui-input icon="search" :iconLeft="true"></vui-input>
    <vui-input type="textarea" style="height: 50px;"></vui-input>
    <br/><br/>
    <vui-input disabled>
    </vui-input>

    <h2>Input Number</h2>
    <vui-input-number min="0" max="10" v-model="inumberValue"></vui-input-number>{{inumberValue}}
    <vui-input />

    <h2>Radio</h2>
    <vui-radio index="x">Choice</vui-radio>
    <vui-radio index="1">Choice</vui-radio>
    <vui-radio disabled index="2">Choice</vui-radio>
    <vui-radios v-model="radiosValue">
      <vui-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">{{ c }}</vui-radio>
    </vui-radios>
    {{radiosValue}}

    <h2>Checkbox</h2>
    <vui-checkbox index="x">Checkbox</vui-checkbox>
    <vui-checkbox index="x" disabled>Checkbox</vui-checkbox>
    <vui-checkboxes v-model="checkboxesValue">
      <vui-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:{{ c }}</vui-checkbox>
    </vui-checkboxes>
    <vui-checkboxes v-model="checkboxesValue" type="list">
      <vui-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index">checkbox:{{ c }}</vui-checkbox>
    </vui-checkboxes>
    {{checkboxesValue}}

    <h2>Select</h2>
    <vui-select v-model="singleSelectedValue">
      <vui-option index="0" content="Option-1"></vui-option>
      <vui-option index="1" content="Option-2"></vui-option>
      <vui-option index="2" content="Option-3"></vui-option>
      <vui-option index="3" content="Option-4"></vui-option>
      <vui-option index="4" content="Option-5"></vui-option>
    </vui-select>
    <vui-select search v-model="singleSelectedValueWthSearch">
      <vui-option index="10" content="abcd"></vui-option>
      <vui-option index="11" content="abc"></vui-option>
      <vui-option index="12" content="ab"></vui-option>
      <vui-option index="13" content="abd"></vui-option>
      <vui-option index="14" content="abdf"></vui-option>
    </vui-select>
    <vui-button>GO>></vui-button>
    <vui-select search multiple v-model="multipleValues" style="width: 500px;">
      <vui-option index="0" content="abcd"></vui-option>
      <vui-option index="1" content="abc"></vui-option>
      <vui-option index="2" content="ab"></vui-option>
      <vui-option index="3" content="abd"></vui-option>
      <vui-option index="4" content="abdf"></vui-option>
      <vui-option index="5" content="abdf5"></vui-option>
      <vui-option index="6" content="abdf6"></vui-option>
      <vui-option index="7" content="abdf7"></vui-option>
    </vui-select>


    <h2>Cascader</h2>
    <vui-cascader :options="options" v-model="cascaderValue" style="width: 260px;"></vui-cascader>
    <vui-input icon="search" :iconLeft="true"></vui-input><br/>
    <vui-input icon="search" :iconLeft="true"></vui-input>

    <h2>Calendar</h2>
    <vui-calendar mode="year" min="2017-01" max="2018-01"></vui-calendar>
    <vui-calendar mode="month" min="2017-07"></vui-calendar>
    <vui-calendar value="2017-01-08" min="2017-01-07"></vui-calendar>
    <vui-calendar mode="second" value="2017-01-08" min="2017-01-07"></vui-calendar>

    <h2>DatePicker</h2>
    <vui-date-picker v-model="datePickerValue" max="2017-09-17 14:02:03" mode="second"></vui-date-picker>
    {{ datePickerValue }}

    <h2>TimePicker</h2>
    <vui-time-picker v-model="timePickerValue"></vui-time-picker>
    {{timePickerValue}}

    <h2>Tree</h2>
    <vui-tree :data="treeData" @select="treeSelect" expand v-model="treeValues"></vui-tree>
    {{ treeValues }}

    <h2>Tree-select</h2>
    <vui-tree-select :data="treeData" v-model="treeSelectValue"></vui-tree-select>
    {{treeSelectValue}}

    <h2>Modal</h2>
    <vui-button @click="showModalFunc">show Modal</vui-button>
    <vui-modal title="什么鬼吗？欢迎!" :visible.sync="showModal">
      <vui-form>
        <vui-fields>
          <vui-field label="First Name" span="eight">
            <vui-input></vui-input>
          </vui-field>
          <vui-field label="Last Name" span="eight">
            <vui-input></vui-input>
          </vui-field>
        </vui-fields>
        <vui-field label="Username" inline>
          <vui-input></vui-input>
        </vui-field>
        <vui-field label="Password">
          <vui-input type="password"></vui-input>
        </vui-field>
        <vui-field>
        <vui-checkbox index="0">I agree to the terms and conditions</vui-checkbox>
        </vui-field>
        <vui-button type="primary" @click="showModal = false">Submit</vui-button>
      </vui-form>
    </vui-modal>

    <h2>Message</h2>
    <vui-button @click="messageHandler">Message</vui-button><br/><br/>
    <vui-message>
      Warning Description Warning Description Warning Description Warning Description
    </vui-message>
    <vui-message type="error">
      Error Description Error Description Error Description Error Description
    </vui-message>

    <h2>Confirm Popup</h2>
    <vui-button @click="popupHandler" type="positive">Popup</vui-button>

    <h2>back-top</h2>
    <vui-back-top></vui-back-top>

    <h2>Card</h2>
    <vui-card>
      <div slot="header">Header</div>
      <img src="//c1.mifile.cn/f/i/17/mibookair13/specs/img1.jpg" slot="image"/>
      Elliot requested permission to view your contact details
      <div slot="footer">
        <vui-button>GO-Back</vui-button>
      </div>
    </vui-card>

    <h2>Carousel</h2>
    <vui-carousel>
      <vui-carousel-item v-for="index in 4" :key="index">
        <h3 style="height: 300px; line-height: 300px; text-align: center; vertical-align: middle; background: #506b9e; color: #fff; font-size: 2rem;">{{index}}</h3>
      </vui-carousel-item>
    </vui-carousel>

    <h2>Tabs</h2>
    <vui-tabs>
      <vui-tab-pane label="用户管理">用户管理</vui-tab-pane>
      <vui-tab-pane label="角色管理">角色管理</vui-tab-pane>
      <vui-tab-pane label="配置管理">配置管理</vui-tab-pane>
    </vui-tabs>
    <vui-tabs type="card">
      <vui-tab-pane label="用户管理">用户管理</vui-tab-pane>
      <vui-tab-pane label="角色管理">角色管理</vui-tab-pane>
      <vui-tab-pane label="配置管理">配置管理</vui-tab-pane>
    </vui-tabs>

    <h2>Upload</h2>
    <vui-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files"
                :withCredentials="true" :multiple="true">
      <vui-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</vui-button>
    </vui-upload>
    {{ files }}
    <vui-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files"
                :withCredentials="true" type="picture" @preview="previewHandler">
    </vui-upload>
    <vui-modal :visible.sync="previewShow" title="Image Preview">
      <img :src="previewUrl" style="width: 100%;"/>
    </vui-modal>

    <h2>Table</h2>
    <vui-table :columns="tColumns1" :data="tData" border @change="tableChangeHandler"></vui-table><br/>
    <vui-table :columns="tColumns1" :data="tData" stripe height="150"></vui-table><br/>
    <vui-table :columns="tColumns" :data="tData" border></vui-table><br/>
    <vui-table :columns="tColumns" :data="tData" border height="200"></vui-table>
    table-column-children 多级表头
    <vui-table :columns="tColumnTree" :data="tColumnTreeData" border></vui-table>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import VuiButton from './components/Button'
import VuiButtons from './components/Buttons'
import VuiLayout from './components/Layout'
import VuiOption from './components/Option'
import VuiMenu from './components/Menu'
import VuiDropdown from './components/Dropdown'
import VuiSubmenu from './components/Submenu'
import VuiPagination from './components/Pagination'
import VuiSteps from './components/Steps'
import VuiStep from './components/Step'
import VuiInput from './components/Input'
import VuiTag from './components/Tag.vue'
import VuiTags from './components/Tags.vue'
import VuiSelect from './components/Select.vue'
import VuiCascader from './components/Cascader.vue'
import VuiRadio from './components/Radio.vue'
import VuiRadios from './components/Radios.vue'
import VuiCheckbox from './components/Checkbox.vue'
import VuiCheckboxes from './components/Checkboxes.vue'
import VuiInputNumber from './components/InputNumber.vue'
import VuiDatePicker from './components/DatePicker.vue'
import VuiCalendar from './components/Calendar.vue'
import VuiTimePicker from './components/TimePicker.vue'
import VuiTree from './components/Tree.vue'
import VuiTreeSelect from './components/TreeSelect.vue'
import VuiModal from './components/Modal.vue'
import VuiForm from './components/Form.vue'
import VuiField from './components/Field.vue'
import VuiFields from './components/Fields.vue'

import message from './components/message.js'
import popup from './components/popup.js'
import VuiMessage from './components/Message.vue'
import VuiBackTop from './components/BackTop.vue'
import VuiCard from './components/Card.vue'
import VuiCarousel from './components/Carousel.vue'
import VuiCarouselItem from './components/CarouselItem.vue'
import VuiTabs from './components/Tabs.vue'
import VuiTabPane from './components/TabPane.vue'
import VuiUpload from './components/Upload.vue'
import VuiTable from './components/Table.vue'

export default {
  name: 'app',
  components: {
    VuiTable,
    VuiUpload,
    VuiTabPane,
    VuiTabs,
    VuiCarouselItem,
    VuiCarousel,
    VuiCard,
    VuiBackTop,
    VuiMessage,
    VuiField,
    VuiFields,
    VuiForm,
    VuiModal,
    VuiTreeSelect,
    VuiTree,
    VuiTimePicker,
    VuiCalendar,
    VuiDatePicker,
    VuiInputNumber,
    VuiCheckboxes,
    VuiCheckbox,
    VuiRadios,
    VuiRadio,
    VuiCascader,
    VuiSelect,
    VuiTags,
    VuiTag,
    VuiInput,
    VuiStep,
    VuiSteps,
    VuiPagination,
    VuiSubmenu,
    VuiDropdown,
    VuiMenu,
    VuiOption,
    VuiLayout,
    VuiButtons,
    VuiButton,
    Hello
  },
  data () {
    return {
      tags1: [[true, 'tag1-radio'], [false, 'tag2-radio'], [false, 'tag3-radio']],
      tags: ['tag1', 'tag2', 'tag3'],
      inumberValue: 0,
      radiosValue: 0,
      checkboxesValue: [],
      multipleValues: [],
      singleSelectedValue: [],
      singleSelectedValueWthSearch: [],
      cascaderValue: [],
      datePickerValue: '2017-08-09 14:05:06',
      timePickerValue: '',
      treeValues: 'xihu',
      treeSelectValue: '',
      showModal: false,
      previewShow: false,
      previewUrl: null,
      tColumns1: [
        {
          title: '#',
          type: 'index',
          width: 50
        },
        {
          title: '',
          type: 'checkbox',
          key: 'name',
          width: 40
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age',
          filters: [
            {label: '18岁', value: 18},
            {label: '26岁', value: 26},
            {label: '30岁', value: 30}
          ]
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      tColumns: [{
        title: '姓名',
        key: 'name',
        fixed: 'left',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '年龄',
        key: 'age',
        width: 200
      },
      {
        title: '地址',
        key: 'address',
        fixed: 'right',
        width: 200
      }],
      tData: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ],
      tColumnTree: [
        {title: '日期', key: 'date'},
        {
          title: '配送信息',
          children: [
            {title: '姓名', key: 'name'},
            {
              title: '地址',
              children: [
                {title: '省份', key: 'province'},
                {title: '市区', key: 'city'},
                {title: '地址', key: 'address'},
                {title: '邮编', key: 'zip'}
              ]
            }
          ]
        }
      ],
      tColumnTreeData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      files: [{name: 'xxx.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396231761&di=a27f825a7b2597ebf70e5a8323a88841&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F360%2F6163TLR088W0.jpg'},
        {name: 'yyy.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396232089&di=c1d198378d24a175a1a6445906b78556&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201401%2F04%2F20140104235918_uNikH.jpeg'},
        {name: 'zzz.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396232088&di=eac61759e89fb8913fcf75bb122335fb&imgtype=0&src=http%3A%2F%2Fwww.dingniu8.com%2Fdesk%2FUploadPic%2F2013-1%2F2013112205556695.jpg'}],
      options: [
        ['zhejiang', 'Zhejiang', [
          ['hangzhou', 'Hangzhou', [
            ['xihu', 'West Lake']
          ]]
        ]],
        ['jiangsu', 'Jiangsu', [
          ['nanjing', 'Nanjing', [
            ['zhonghuamen', 'Zhong Hua Men']
          ]]
        ]]
      ],
      treeData: [
        ['zhejiang', 'Zhejiang', [
          ['hangzhou', 'Hangzhou', [
            ['xihu', 'West Lake'],
            ['xihu2', 'West Lake2']
          ]]
        ]],
        ['jiangsu', 'Jiangsu', [
          ['nanjing', 'Nanjing', [
            ['zhonghuamen', 'Zhong Hua Men']
          ]]
        ]]
      ],
      oldtData: []
    }
  },
  mounted () {
    this.oldtData = this.tData
  },
  methods: {
    checkClickHandler (event, index, checked) {
      this.tags1.splice(index, 1, [checked, this.tags1[index][1]])
    },
    addCheckHandler (event, v) {
      this.tags.push(v)
    },
    groupCloseHandler (event, index) {
      this.tags.splice(index, 1)
    },
    treeSelect (item) {
      console.log('item: ', item)
    },
    showModalFunc () {
      this.showModal = true
    },
    previewHandler (file) {
      this.previewUrl = file.url
      this.previewShow = true
    },
    messageHandler (event) {
      message.warning('welcome to you 黄英你朋友!!!', 5000)
      message.tip('你要做什么？', '你猜啊　我的朋友myfriends!')
    },
    popupHandler (event) {
      popup.confirm(event, '确定要删除这条记录吗？', () => {
        console.log('OK....')
      })
    },
    tableChangeHandler (filters) {
      // console.log('filters: ', filters)
      if (filters.length <= 0) {
        this.tData = this.oldtData
      } else {
        this.tData = this.oldtData.filter((data) => {
          for (let k of Object.keys(filters)) {
            let flag = filters[k].includes(data[k])
            if (flag) {
              return flag
            }
          }
          return false
        })
      }
    }
  }
}
</script>

<style lang="less">

  #app {
    margin: 10px;
  }

  .vui.layout .header, .vui.layout .footer{
    background: #7dbcea;
  }
  .vui.layout .sider {
    background: #3ba0e9;
  }
  .vui.layout .content {
    background: rgba(16, 142, 233, 1);
  }
</style>
