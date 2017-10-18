<template>
  <div class="code-card">
    <div class="code-card-demo">
      <slot name="demo"></slot>
    </div>
    <div class="code-card-meta">
      <div class="code-card-title">{{ title }}</div>
      <span v-html="desc"></span>
      <span class="code-expand" @click="expandHandler">
        <img alt="expand code" title="show code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" :class="['code-expand-icon-' + (showHtml ? 'hide' : 'show')]">
        <img alt="expand code" title="hide code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" :class="['code-expand-icon-' + (!showHtml ? 'hide' : 'show')]">
      </span>
    </div>
    <div class="code-card-highlight" v-if="showHtml">
      <slot name="codeHtml"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'code-card',
    props: {
      title: '',
      desc: ''
    },
    data () {
      return { showHtml: false }
    },
    methods: {
      expandHandler () {
        this.showHtml = !this.showHtml
      }
    }
  }
</script>
<style>
  .code-card {
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    -webkit-transition: all .2s;
    transition: all .2s;
  }

  .code-card-demo {
    border-bottom: 1px solid #e9e9e9;
    padding: 1em;
    padding-bottom: 2em;
  }

  .code-card-meta {
    position: relative;
    padding: 17px 16px 15px 20px;
    border-radius: 0 0 4px 4px;
    -webkit-transition: background-color .4s;
    transition: background-color .4s;
    width: 100%;
  }

  .code-card-highlight {
    /*display: none;*/
    overflow: auto;
    border-radius: 0 0 3px 3px;
  }

  .code-card-title {
    position: absolute;
    top: -14px;
    padding: 1px 8px;
    margin-left: -8px;
    color: #777;
    border-radius: 4px 4px 0 0;
    background: #fff;
    -webkit-transition: background-color .4s;
    transition: background-color .4s;
  }

  .code-expand {
    position: absolute;
    right: 16px;
    bottom: 1.2em;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }
  .code-expand-icon-show {
    width: 100%;
    display: block;
  }
  .code-expand-icon-hide {
    width: 100%;
    display: none;
  }
</style>