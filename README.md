
<p align="center">
  <a href="https://github.com/myliang/fish-ui">
    <img width="250" src="/static/logo.png?raw=true">
  </a>
</p>

# Fish-ui

[![npm package](https://img.shields.io/npm/v/fish-ui.svg)](https://www.npmjs.org/package/fish-ui)
[![NPM downloads](http://img.shields.io/npm/dm/fish-ui.svg)](https://npmjs.org/package/fish-ui)
[![Join the chat at https://gitter.im/myliang/fish-ui](https://badges.gitter.im/myliang/fish-ui.svg)](https://gitter.im/myliang/fish-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A Vue.js 2.0 UI Toolkit for Web.

## Install
```shell
npm install less less-loader -S
npm install fish-ui -S
```

## Quick Start

### google font & font-awesome
``` html
<link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css"/>
<link rel="stylesheet" href="https://fonts.proxy.ustclug.org/css?family=Lato:400,700,400italic,700italic&subset=latin"/>
```

### Import all components
``` javascript
import Vue from 'vue'
import FishUI from 'fish-ui'

Vue.use(FishUI)

```

### Manually import
``` javascript
import 'fish-ui/styles/button.less'
import Button from 'fish-ui/src/components/Button.vue'

Vue.component(Button.name, Button)

```


And if you start with [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack) by vue-cli

## Demo
[https://myliang.github.io/fish-ui/](ttps://myliang.github.io/fish-ui/)
<table>
<tbody>
<tr>
<td align="center">
  <a href="https://myliang.github.io/fish-ui/#/components/button">
    <img src="/static/button.png?raw=true">
  </a>
</td>
</tr>
<tr>
<td align="center">
  <a href="https://myliang.github.io/fish-ui/#/components/card">
    <img src="/static/card.png?raw=true">
  </a>
</td>
</tr>
<tr>
<td align="center">
  <a href="https://myliang.github.io/fish-ui/#/components/form">
    <img src="/static/form.png?raw=true">
  </a>
</td>
</tr>
<tr>
<td align="center">
  <a href="https://myliang.github.io/fish-ui/#/components/tree-select">
    <img src="/static/treeselect.png?raw=true">
  </a>
</td>
</tr>
</tbody>
</table>

## Features
- Equip with Vue.js, Moment, Vue-Router, ES6 & Babel 6
- Cool with Webpack 2.0 & Vue Loader
- Semantic CSS Components
- Stylesheets in Less

## Components
  - BackTop
  - Button
  - Buttons
  - Calendar
  - Card
  - Carousel
  - CarouselItem
  - Cascader
  - Checkbox
  - Checkboxes
  - Col
  - DatePicker
  - Dropdown
  - Field
  - Fields
  - Form
  - Input
  - InputNumber
  - Layout
  - Menu
  - Message
  - Modal
  - Option
  - Pagination
  - Radio
  - Radios
  - Row
  - Select
  - Steps
  - Step
  - Submenu
  - Table
  - TabPane
  - Tabs
  - Tag
  - Tags
  - TimePicker
  - Upload
  - Tree
  - Tree Select
  - Transfer
  - Divider
  - Image
  - Timeline


## Browser Support
Modern browsers and Internet Explorer 9+(no test).

## Thanks to
- [semantic-ui](http://semantic-ui.com/)

## LICENSE
MIT
