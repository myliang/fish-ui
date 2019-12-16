<template>
  <main-layout menuActiveIndex="loader" style="height: 1200px;">
    <h3>Loader</h3>
    <fish-card>
      <div style="height: 300px; width: 100%">
        liangyuliang
      <fish-loader active></fish-loader>
      </div>
      <div slot="footer">
        <pre v-highlightjs><code class="html"></code></pre>
      </div>
    </fish-card>

    <h3>Loader Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="(column, index) in event_columns" :key="index">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in event_data" :key="index">
          <td v-for="(v, ci) in item" v-html="v" :key="`${index}-${ci}`"></td>
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
        event_columns: ['Attribute', 'Description', 'Type', 'Default'],
        event_data: [
          [['active', 'whether it is visible or not', 'Boolean', 'false']]
        ]
      }
    }
  }
</script>
