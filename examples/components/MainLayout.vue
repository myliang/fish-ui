<template>
  <div class="main-layout">
    <fish-layout sider="l" class="main-layout">
      <div slot="header" style="padding: 20px 10px;">
        <a href="https://github.com/myliang/fish-ui">
          <div class="logo_22">
            F <i class="fa fa-flash"></i> sh - UI
          </div>
        </a>
        <div style="float: right">
          <h2><strong><a href="https://github.com/myliang/fish-ui" title="github"><i class="fa fa-github"></i></a></strong></h2>
        </div>
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
      <div slot="footer">
        <h2><strong><a href="https://github.com/myliang/fish-ui"><i class="fa fa-github"></i> fish-ui</a></strong></h2>
        <p>copyright@2017 myliang</p>
      </div>
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
        {index: 'index', text: 'Introduce'},
        {index: 'layout', text: 'Layout'},
        {index: 'grid', text: 'Grid'},
        {index: 'button', text: 'Button'},
        {index: 'menu', text: 'Menu'},
        {index: 'card', text: 'Card'},
        {index: 'pagination', text: 'Pagination'},
        {index: 'table', text: 'Table'},
        {index: 'dropdown', text: 'Dropdown'},
        {index: 'step', text: 'Step'},
        {index: 'tag', text: 'Tag'},
        {index: 'input', text: 'Input'},
        {index: 'input-number', text: 'Input Number'},
        {index: 'radio', text: 'Radio'},
        {index: 'checkbox', text: 'Checkbox'},
        {index: 'select', text: 'Select'},
        {index: 'cascader', text: 'Cascader'},
        {index: 'calendar', text: 'Calendar'},
        {index: 'datepicker', text: 'DatePicker'},
        {index: 'timepicker', text: 'timePicker'},
        {index: 'form', text: 'Form'},
        {index: 'message', text: 'Message'},
        {index: 'notification', text: 'Notification'},
        {index: 'popup', text: 'Popup'},
        {index: 'backtop', text: 'BackTop'},
        {index: 'carousel', text: 'Carousel'},
        {index: 'tabs', text: 'Tabs'},
        {index: 'modal', text: 'Modal'},
        {index: 'upload', text: 'Upload'},
        {index: 'tree', text: 'Tree'},
        {index: 'tree-select', text: 'Tree Select'},
        {index: 'divider', text: 'Divider'},
        {index: 'transfer', text: 'Transfer'},
        {index: 'image', text: 'Image'}
//        {index: 'chart', text: 'Chart 图表'}
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
  .logo_22 {
    font-size: 2.2rem;
    font-weight: bold;
    display: inline-block;
    font-style: italic;
  }
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

  .fish.card .hljs {
    padding: 0;
    background-color: #ffffff;
    margin: 0;
  }
  code, pre {
    tab-size: 2;
    padding: 0;
    margin: 0;
  }
  table code, ul li code, .code-card code:not(.hljs) {
    margin: 0 3px;
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
