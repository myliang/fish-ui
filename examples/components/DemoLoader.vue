<template>
  <main-layout menuActiveIndex="loader" style="height: 1200px;">
    <code-card title="Basic" desc="Basic use case">
      <template slot="demo">
        <fish-segment style="height: 300px; width: 300px; position: relative;">
          liangyuliang
          <fish-loader :active="active"></fish-loader>
        </fish-segment>
        <fish-button @click="active = !active">swap state</fish-button>
      </template>
      <template slot="codeHtml">
        <pre v-highlightjs><code class="xml">&lt;fish-segment style="height: 300px; width: 300px; position: relative;"&gt;
  liangyuliang
  &lt;fish-loader :active="active"&gt;&lt;/fish-loader&gt;
&lt;/fish-segment&gt;
&lt;fish-button @click="active = !active"&gt;swap state&lt;/fish-button&gt;</code></pre>
      </template>
    </code-card>

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
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      MainLayout,
      CodeCard
    },
    data () {
      return {
        active: false,
        event_columns: ['Attribute', 'Description', 'Type', 'Default'],
        event_data: [
          ['active', 'whether it is visible or not', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
