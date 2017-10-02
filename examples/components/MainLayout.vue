<template>
  <div class="main-layout">
    <fish-layout sider="l" class="main-layout">
      <div slot="header" style="padding: 20px 10px;">
        <strong style="font-size: 3em; text-shadow: 2px 2px 0 #ddd;">v-ui</strong>
      </div>
      <div slot="sider">
        <fish-menu mode="inline">
          <fish-option :index="menu.index" :content="menu.text" ref="menus" v-for="menu in menus" :key="menu.index"
                      @click="toLinker(`/components/${menu.index}`)">
          </fish-option>
        </fish-menu>
      </div>
      <div slot="content">
        <slot></slot>
      </div>
      <div slot="footer"> 2017@copyright myliang</div>
    </fish-layout>
  </div>
</template>
<script>
  export default {
    components: {},
    name: 'MainLayout',
    props: {
      menuActiveIndex: { type: String, default: 'button' }
    },
    data () {
      return {menus: [
        {index: 'index', text: '介绍'},
        {index: 'layout', text: 'Layout 布局'},
        {index: 'grid', text: 'Grid 格栅'},
        {index: 'button', text: 'Button 按钮'},
        {index: 'menu', text: 'Menu 按钮'},
        {index: 'card', text: 'Card 卡片'},
        {index: 'pagination', text: 'Pagination 分页'},
        {index: 'table', text: 'Table 表格'},
        {index: 'dropdown', text: 'Dropdown 下拉菜单'},
        {index: 'step', text: 'Step 步骤'},
        {index: 'tag', text: 'Tag 标签'},
        {index: 'input', text: 'Input 输入框'},
        {index: 'input-number', text: 'Input Number 输入框'},
        {index: 'radio', text: 'Radio 单选'},
        {index: 'checkbox', text: 'Checkbox 多选'},
        {index: 'select', text: 'Select 下拉选框'},
        {index: 'cascader', text: 'Cascader 练级下拉选框'},
        {index: 'calendar', text: 'Calendar 日历'},
        {index: 'datepicker', text: 'DatePicker 日期选框'},
        {index: 'timepicker', text: 'timePicker 时间选框'},
        {index: 'form', text: 'Form 表单'},
        {index: 'message', text: 'Message 消息'},
        {index: 'notification', text: 'Notification 全局提示'},
        {index: 'popup', text: 'Popup 弹出框'},
        {index: 'backtop', text: 'BackTop 返回顶部'},
        {index: 'carousel', text: 'Carousel 走马灯'},
        {index: 'tabs', text: 'Tabs 标签页'},
        {index: 'modal', text: 'Modal 对话框'},
        {index: 'upload', text: 'Upload 上传'}
      ]}
    },
    mounted () {
      this.$refs.menus.forEach((menu) => {
        // console.log(':::', this.menuActiveIndex)
        if (this.menuActiveIndex === menu.index) {
          menu.active = true
        } else {
          menu.active = false
        }
      })
    },
    methods: {
      toLinker (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style>
  .main-layout > .fish.layout {
    background: #f0f2f5;
    color: #666;
  }
  .main-layout > .fish.layout > .header{
    /*background: #7dbcea;*/
    padding: 0 50px;
    /*background: #666;*/
  }
  .main-layout > .fish.layout > .header {
    margin-bottom: 20px;
  }
  .main-layout > .fish.layout > .sider {
    /*background: #fff;*/
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .main-layout > .fish.layout > .has-sider {
    margin: 0 50px;
  }
  .main-layout > .fish.layout > .content {
    /*background: rgba(16, 142, 233, 1);*/
    padding: 20px;
  }

  .hljs {
    padding: 0;
    background-color: #ffffff;
    margin: 0;
  }
  code, pre {
    tab-size: 2;
    padding: 0;
    margin: 0;
  }
  table code, ul li code {
    margin: 0 1px;
    background: #f7f7f7;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: .9em;
    border: 1px solid #eee;
  }
  ul.api li {
    margin: 10px;
  }

  .fish.table.attributes table thead tr th:first-child {
    width: 16%;
  }
  .fish.table.attributes table thead tr th:nth-child(3) {
    width: 20%;
  }
  .fish.table.attributes table thead tr th:nth-child(4) {
    width: 10%;
  }
</style>
