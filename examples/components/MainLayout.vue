<template>
  <div class="main-layout">
    <fish-layout sider="l" class="main-layout">
      <div slot="header" style="padding: 20px 10px;">
        <a href="https://github.com/myliang/fish-ui">
        <strong style="font-size: 3em; text-shadow: 2px 2px 0 #ddd;">
          <svg style="width: 1em; height: 1em; vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <!--<path d="M0 512 512 1024 512 612 1024 768 1024 512" fill="none" stroke="green" stroke-width="60px"></path>-->
            <!--<path d="M0 512 512 0 512 412 1024 256 1024 512" fill="none" stroke="grey" stroke-width="60px"></path>-->
            <path d="M141.954571 505.33623c0.731664 238.879576 165.132968 484.410642 487.234967 479.403604l48.833195-4.226255c6.365988-8.242731-61.574381-16.823154-74.977645-20.928658-80.505545-24.660656-141.40045-72.630181-163.457816-156.836001-21.225417-81.038688 13.616112-145.453766 70.576405-200.400193 35.607986-34.343179 76.94751-59.880809 121.92898-80.520895 81.622996-37.456077 157.275-83.567277 209.456453-159.648047C875.800191 312.242444 890.707716 257.425977 876.966761 197.071378c-6.04774-26.580379-38.655392-94.112448-92.621491-132.99092C734.271828 28.002774 663.133627 19.501146 644.362098 18.954701 338.782402 10.063193 141.187091 254.695796 141.954571 505.33623zM602.322633 225.183645c0.394996-30.889521 25.031093-54.917774 55.906288-54.535057 30.558993 0.3776 54.939263 25.444509 54.522778 56.050574-0.405229 30.394241-25.676799 55.035454-56.062853 54.67525C626.171808 281.021372 601.93173 255.959579 602.322633 225.183645z"></path>
          </svg>fish-ui</strong></a>
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
