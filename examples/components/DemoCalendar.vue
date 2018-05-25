<template>
  <main-layout menuActiveIndex="calendar">
    <h3>Calendar</h3>
    <code-card title="Year" desc="show year">
      <template slot="demo">
        <fish-calendar mode="year" min="2017-01" max="2018-01"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-calendar mode=&quot;year&quot; min=&quot;2017-01&quot; max=&quot;2018-01&quot;&gt;&lt;/fish-calendar&gt;</code></pre>
    </code-card>

    <code-card title="Month" desc="show year, month">
      <template slot="demo">
        <fish-calendar mode="month" min="2017-07"></fish-calendar>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-calendar mode=&quot;month&quot; min=&quot;2017-07&quot;&gt;&lt;/fish-calendar&gt;</code></pre>
    </code-card>

    <code-card title="Date" desc="show year, month, day">
      <template slot="demo">
        <fish-calendar value="2017-01-08" min="2017-01-07" :dayRender="(h, day) => h('span', {}, 'xxx')" 
          @select="selectHandler" @change="changeHandler"></fish-calendar>
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

    <code-card title="Second" desc="show year, month, day, hour, minute, second">
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
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(state, arrays, current)', 'Callback for when panel changes', 'state, arrays, current(selected item)'],
          ['select(current)', 'Callback for when a date is selected', 'state, arrays, current(selected item)']
        ],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'v-model', 'String', '-'],
          ['mode', 'Can be set to <code>minute</code><code>hour</code><code>day</code><code>month</code><code>year</code>', 'String', 'day'],
          ['min', 'The min value', 'String', '-1'],
          ['max', 'The max value', 'String', '-1'],
          ['today', 'Today text', 'String', 'Today'],
          ['weeks', 'Weeks text', 'Array', '\'Sun\', \'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\']'],
          ['months', 'Months text', 'Array', '[\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']'],
          ['secondRender', 'Customize the display of the second cell', 'Function(h, second)', '-'],
          ['minuteRender', 'Customize the display of the minute cell', 'Function(h, minute)', '-'],
          ['hourRender', 'Customize the display of the hour cell', 'Function(h, hour)', '-'],
          ['dayRender', 'Customize the display of the day cell', 'Function(h, day)', '-'],
          ['monthRender', 'Customize the display of the month cell', 'Function(h, month)', '-'],
          ['yearRender', 'Customize the display of the year cell', 'Function(h, year)', '-']
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
