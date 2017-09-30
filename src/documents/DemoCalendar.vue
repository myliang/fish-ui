<template>
  <main-layout menuActiveIndex="calendar">
    <h3>Calendar 日历</h3>
    <vui-card>
      <vui-calendar mode="year" min="2017-01" max="2018-01"></vui-calendar>
      <vui-calendar mode="month" min="2017-07"></vui-calendar>
      <vui-calendar value="2017-01-08" min="2017-01-07" @select="selectHandler" @change="changeHandler"></vui-calendar>
      <vui-calendar mode="second" value="2017-01-08" min="2017-01-07"></vui-calendar>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-calendar mode=&quot;year&quot; min=&quot;2017-01&quot; max=&quot;2018-01&quot;&gt;&lt;/vui-calendar&gt;
&lt;vui-calendar mode=&quot;month&quot; min=&quot;2017-07&quot;&gt;&lt;/vui-calendar&gt;
&lt;vui-calendar value=&quot;2017-01-08&quot; min=&quot;2017-01-07&quot;&gt;&lt;/vui-calendar&gt;
&lt;vui-calendar mode=&quot;second&quot; value=&quot;2017-01-08&quot; min=&quot;2017-01-07&quot;&gt;&lt;/vui-calendar&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Calendar Attributes</h3>
    <div class="vui table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Calendar Events</h3>
    <div class="vui table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in event_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import VuiCard from '../components/Card.vue'
  import VuiCalendar from '../components/Calendar.vue'

  export default {
    components: {
      VuiCalendar,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(state, arrays, current)', '非最终选择之后触发', 'state 状态, arrays, current 选中的值对象'],
          ['select(current)', '最终选择之后触发', 'state 状态, arrays, current 选中的值对象']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值 可以使用v-model', 'String', '-'],
          ['mode', '日历模式 可选值：<code>minute</code>, <code>hour</code>, <code>day</code>, <code>month</code>, <code>year</code>', 'String', 'day'],
          ['min', '日历最小值', 'String', '-1'],
          ['max', '日历最大值', 'String', '-1'],
          ['today', '显示今天的描述', 'String', 'Today'],
          ['weeks', '显示周一到日的描述', 'Array', '\'Sun\', \'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\']'],
          ['months', '显示月的描述', 'Array', '[\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']'],
          ['secondRender', '渲染秒的内容', 'Function(second)', '-'],
          ['minuteRender', '渲染分的内容', 'Function(minute)', '-'],
          ['hourRender', '渲染时的内容', 'Function(hour)', '-'],
          ['dayRender', '渲染日的内容', 'Function(day)', '-'],
          ['monthRender', '渲染月的内容', 'Function(month)', '-'],
          ['yearRender', '渲染年的内容', 'Function(year)', '-'],
          ['cellRenderTemplate', '单元格渲染模板', 'Function(title, content)', '-']
        ]
      }
    },
    methods: {
      selectHandler (current) {
        console.log('current: ', current)
      },
      changeHandler (state, arrays, current) {
        console.log('change: ', state, '; ', arrays, '; ', current)
      }
    }
  }
</script>
