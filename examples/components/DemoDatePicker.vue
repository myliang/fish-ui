<template>
  <main-layout menuActiveIndex="datepicker">
    <h3>DatePicker</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-date-picker v-model="datePickerValue"></fish-date-picker>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-date-picker v-model=&quot;datePickerValue&quot;&gt;&lt;/fish-date-picker&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        datePickerValue: &#x27;&#x27;
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Min, Max" desc="Can be set min, max">
          <template slot="demo">
            <fish-date-picker v-model="datePickerValue2" min="2017-01-01" max="2022-01-01"></fish-date-picker>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-date-picker v-model=&quot;datePickerValue2&quot; min=&quot;2017-01-01&quot; max=&quot;2022-01-01&quot;&gt;&lt;/fish-date-picker&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        datePickerValue2: &#x27;&#x27;
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row>
      <fish-col span="24">
        <code-card title="Mode" desc="Show Mode">
          <template slot="demo">
            <fish-date-picker v-model="datePickerYValue" mode="year" hint="yyyy"></fish-date-picker>
            <fish-date-picker v-model="datePickerMonValue" mode="month" hint="yyyy-MM"></fish-date-picker>
            <fish-date-picker v-model="datePickerHValue" mode="hour" hint="yyyy-MM-dd hh"></fish-date-picker>
            <fish-date-picker v-model="datePickerMValue" mode="minute" hint="yyyy-MM-dd hh:mm"></fish-date-picker>
            <fish-date-picker v-model="datePickerSValue" mode="second" hint="yyyy-MM-dd hh:mm:ss"></fish-date-picker>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-date-picker v-model=&quot;datePickerYValue&quot; mode=&quot;year&quot; hint=&quot;yyyy&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerMonValue&quot; mode=&quot;month&quot; hint=&quot;yyyy-MM&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerHValue&quot; mode=&quot;hour&quot; hint=&quot;yyyy-MM-dd hh&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerMValue&quot; mode=&quot;minute&quot; hint=&quot;yyyy-MM-dd hh:mm&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerSValue&quot; mode=&quot;second&quot; hint=&quot;yyyy-MM-dd hh:mm:ss&quot;&gt;&lt;/fish-date-picker&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        datePickerYValue: &#x27;&#x27;,
        datePickerMonValue: &#x27;&#x27;,
        datePickerHValue: &#x27;&#x27;,
        datePickerMValue: &#x27;&#x27;,
        datePickerSValue: &#x27;&#x27;
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>DatePicker Attributes</h3>
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

    <h3>DatePicker Events</h3>
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
        datePickerValue: '',
        datePickerValue2: '',
        datePickerYValue: '',
        datePickerMonValue: '',
        datePickerHValue: '',
        datePickerMValue: '',
        datePickerSValue: '',
        weeks: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['change(v)', 'Callback when finishing select', 'v(selected item)']
        ],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'v-model', 'String', '-'],
          ['mode', 'can be set to <code>minute</code><code>hour</code><code>day</code><code>month</code><code>year</code>', 'String', 'day'],
          ['min', 'The min value', 'String', '-1'],
          ['max', 'The max value', 'String', '-1'],
          ['weeks', 'Weeks text', 'Array', '\'Sun\', \'Mon\', \'Tue\', \'Wed\', \'Thu\', \'Fri\', \'Sat\']'],
          ['months', 'Months text', 'Array', '[\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']'],
          ['secondRender', 'Customize the display of the second cell', 'Function(h, second)', '-'],
          ['hint', 'Hint message', 'String', 'Please date'],
          ['format', 'Format value', 'String', '-']
        ]
      }
    }
  }
</script>
