<template>
  <main-layout menuActiveIndex="backtop" style="height: 1200px;">
    <h3>BackTop 返回顶部</h3>
    <vui-card>
      <vui-back-top></vui-back-top> 当出现纵向滚动条，同事向下滚动时候，在浏览器右下脚会出现此按钮，点击可返回顶部
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-back-top&gt;&lt;/vui-back-top&gt;</code></pre>
      </div>
    </vui-card>

    <h3>BackTop Events</h3>
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
  import VuiBackTop from '../components/BackTop.vue'
  import MainLayout from './MainLayout.vue'
  import VuiCard from '../components/Card.vue'

  export default {
    components: {
      VuiCard,
      MainLayout,
      VuiBackTop
    },
    data () {
      return {
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['click(event)', '点击时触发', 'event 事件参数']
        ]
      }
    }
  }
</script>
