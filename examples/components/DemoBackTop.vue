<template>
  <main-layout menuActiveIndex="backtop" style="height: 1200px;">
    <h3>BackTop</h3>
    <fish-card>
      <fish-back-top></fish-back-top> makes it easy to go back to the top of the page.
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-back-top&gt;&lt;/fish-back-top&gt;</code></pre>
      </div>
    </fish-card>

    <h3>BackTop Events</h3>
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

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        event_columns: ['Event Name', 'Description', 'Parameters'],
        event_data: [
          ['click(event)', 'a callback function, which can be executed when you click the button', 'event']
        ]
      }
    }
  }
</script>
