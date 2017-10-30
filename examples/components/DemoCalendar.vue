<template>
  <main-layout menuActiveIndex="calendar">
    <h3>Calendar 日历</h3>
    <code-card title="年历" desc="展示年信息">
      <template slot="demo">
        <fish-calendar mode="year" min="2017-01" max="2018-01"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-calendar mode=&quot;year&quot; min=&quot;2017-01&quot; max=&quot;2018-01&quot;&gt;&lt;/fish-calendar&gt;</code></pre>
    </code-card>

    <code-card title="年月历" desc="展示年，月信息">
      <template slot="demo">
        <fish-calendar mode="month" min="2017-07"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-calendar mode=&quot;month&quot; min=&quot;2017-07&quot;&gt;&lt;/fish-calendar&gt;</code></pre>
    </code-card>

    <code-card title="年月日历" desc="展示年，月，日信息">
      <template slot="demo">
        <fish-calendar value="2017-01-08" min="2017-01-07" @select="selectHandler" @change="changeHandler"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-calendar value=&quot;2017-01-08&quot; min=&quot;2017-01-07&quot; @select=&quot;selectHandler&quot; @change=&quot;changeHandler&quot;&gt;&lt;/fish-calendar&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {}
    },
    methods: {
      selectHandler (current) {
        console.log(&#x27;current: &#x27;, current)
      },
      changeHandler (state, arrays, current) {
        console.log(&#x27;change: &#x27;, state, &#x27;; &#x27;, arrays, &#x27;; &#x27;, current)
      }
    }
  }
&lt;/script&gt;</code>
</pre>
    </code-card>

    <code-card title="年月日时分秒历" desc="展示年，月，日，时，分，秒信息">
      <template slot="demo">
        <fish-calendar mode="second" value="2017-01-08" min="2017-01-07"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-calendar mode=&quot;second&quot; value=&quot;2017-01-08&quot; min=&quot;2017-01-07&quot;&gt;&lt;/fish-calendar&gt;</code></pre>
    </code-card>

    <h3>Calendar Attributes</h3>
    <div class="fish table attributes">
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
    <div class="fish table attributes">
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
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      CodeCard,
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
          ['secondRender', '渲染秒的内容', 'Function(h, second)', '-'],
          ['minuteRender', '渲染分的内容', 'Function(h, minute)', '-'],
          ['hourRender', '渲染时的内容', 'Function(h, hour)', '-'],
          ['dayRender', '渲染日的内容', 'Function(h, day)', '-'],
          ['monthRender', '渲染月的内容', 'Function(h, month)', '-'],
          ['yearRender', '渲染年的内容', 'Function(h, year)', '-']
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
