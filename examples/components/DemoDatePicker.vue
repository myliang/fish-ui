<template>
  <main-layout menuActiveIndex="datepicker">
    <h3>DatePicker 日期选框</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="基本" desc="基本语法">
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
        <code-card title="指定范围" desc="指定最大，最小值">
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
        <code-card title="展示模式" desc="可以通过 mode 指定日历展示类型">
          <template slot="demo">
            <fish-date-picker v-model="datePickerYValue" mode="year" hint="年份"></fish-date-picker>
            <fish-date-picker v-model="datePickerMonValue" mode="month" hint="年月"></fish-date-picker>
            <fish-date-picker v-model="datePickerHValue" mode="hour" hint="年月日时"></fish-date-picker>
            <fish-date-picker v-model="datePickerMValue" mode="minute" hint="年月日时分"></fish-date-picker>
            <fish-date-picker v-model="datePickerSValue" mode="second" hint="年月日时分秒"></fish-date-picker>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-date-picker v-model=&quot;datePickerYValue&quot; mode=&quot;year&quot; hint=&quot;年份&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerMonValue&quot; mode=&quot;month&quot; hint=&quot;年月&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerHValue&quot; mode=&quot;hour&quot; hint=&quot;年月日时&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerMValue&quot; mode=&quot;minute&quot; hint=&quot;年月日时分&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;fish-date-picker v-model=&quot;datePickerSValue&quot; mode=&quot;second&quot; hint=&quot;年月日时分秒&quot;&gt;&lt;/fish-date-picker&gt;
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
