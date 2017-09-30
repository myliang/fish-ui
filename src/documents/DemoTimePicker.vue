<template>
  <main-layout menuActiveIndex="timepicker">
    <h3>TimePicker 时间选框</h3>
    <vui-card>
      <vui-time-picker v-model="timePickerValue"></vui-time-picker> [{{timePickerValue}}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-time-picker v-model=&quot;timePickerValue&quot;&gt;&lt;/vui-time-picker&gt;</code></pre>
      </div>
    </vui-card>

    <h3>TimePicker Attributes</h3>
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

    <h3>TimePicker Events</h3>
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
  import VuiTimePicker from '../components/TimePicker.vue'

  export default {
    components: {
      VuiTimePicker,
      VuiCard,
      MainLayout
    },
    data () {
      return {
        timePickerValue: '',
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(v)', '选择之后触发', 'v为选中的值']
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值，用v-model绑定', 'String', '00:00:00'],
          ['hint', '提示信息', 'String', 'Please time']
        ]
      }
    }
  }
</script>
