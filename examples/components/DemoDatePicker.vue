<template>
  <main-layout menuActiveIndex="datepicker">
    <h3>DatePicker 日期选框</h3>
    <vui-card>
      <vui-date-picker v-model="datePickerMonthValue" min="2017-09" mode="month"></vui-date-picker> [{{datePickerMonthValue}}]
      <vui-date-picker v-model="datePickerDayValue" max="2017-09-17" mode="day"></vui-date-picker> [{{datePickerDayValue}}]
      <vui-date-picker v-model="datePickerHourValue" max="2017-09-17 14" mode="hour"></vui-date-picker> [{{datePickerHourValue}}]
      <vui-date-picker v-model="datePickerSecondValue" max="2017-09-17 14:02:03" mode="second"></vui-date-picker> [{{datePickerSecondValue}}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-date-picker v-model=&quot;datePickerMonthValue&quot; min=&quot;2017-09&quot; mode=&quot;month&quot;&gt;&lt;/vui-date-picker&gt; [{{datePickerMonthValue}}]
&lt;vui-date-picker v-model=&quot;datePickerDayValue&quot; max=&quot;2017-09-17&quot; mode=&quot;day&quot;&gt;&lt;/vui-date-picker&gt; [{{datePickerDayValue}}]
&lt;vui-date-picker v-model=&quot;datePickerHourValue&quot; max=&quot;2017-09-17 14&quot; mode=&quot;hour&quot;&gt;&lt;/vui-date-picker&gt; [{{datePickerHourValue}}]
&lt;vui-date-picker v-model=&quot;datePickerSecondValue&quot; max=&quot;2017-09-17 14:02:03&quot; mode=&quot;second&quot;&gt;&lt;/vui-date-picker&gt; [{{datePickerSecondValue}}]</code></pre>
        <br/><pre v-highlightjs><code class="javascript">data () {
  return {
    datePickerMonthValue: '',
    datePickerDayValue: '',
    datePickerHourValue: '',
    datePickerSecondValue: ''
  }
}</code></pre>
      </div>
    </vui-card>

    <h3>DatePicker Attributes</h3>
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

    <h3>DatePicker Events</h3>
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
  import VuiCard from '../src/components/Card.vue'
  import VuiDatePicker from '../src/components/DatePicker.vue'

  export default {
    components: {
      VuiDatePicker,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        datePickerMonthValue: '',
        datePickerDayValue: '',
        datePickerHourValue: '',
        datePickerSecondValue: '',
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(v)', '选择之后触发', 'v为选中的值']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值 可以使用v-model', 'String', '-'],
          ['mode', '日历模式 可选值：<code>minute</code>, <code>hour</code>, <code>day</code>, <code>month</code>, <code>year</code>', 'String', 'day'],
          ['min', '日历最小值', 'String', '-1'],
          ['max', '日历最大值', 'String', '-1'],
          ['hint', '提示信息', 'String', 'Please date'],
          ['format', '格式化value', 'String', '-']
        ]
      }
    }
  }
</script>
