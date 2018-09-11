<template>
  <main-layout menuActiveIndex="step">
    <h3>Switch</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-switch v-model="v" :yesOrNo="[1, 0]"></fish-switch>
            <fish-switch v-model="v1">checked...</fish-switch>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-switch v-model=&quot;v&quot; :yesOrNo=&quot;[1, 0]&quot;&gt;&lt;/fish-switch&gt;
  &lt;fish-switch v-model=&quot;v1&quot;&gt;checked...&lt;/fish-switch&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      v: 0,
      v1: true
    }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Disabled" desc="disabled switch">
          <template slot="demo">
            <fish-switch disabled></fish-switch>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-switch disabled&gt;&lt;/fish-switch&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
    }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Switch Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
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
  name: 'demo-switch',
  components: {
    CodeCard,
    MainLayout
  },
  data () {
    return {
      v: 0,
      v1: true,
      api_columns: ['Attribute', 'Description', 'Type', 'Default'],
      api_data: [
        ['disabled', 'whether it is disabled', 'Boolean', 'false'],
        ['yesOrNo', 'yes or no', 'Array', '[true, false]']
      ]
    }
  }
}
</script>
