<template>
  <main-layout menuActiveIndex="radio">
    <h3>Radio 单选</h3>
    <fish-card>
      <fish-radio index="x">Choice</fish-radio>
      <fish-radio index="1">Choice</fish-radio>
      <fish-radio disabled index="2">Choice</fish-radio>
      <fish-radios v-model="radiosValue">
        <fish-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-radio>
      </fish-radios>
      [{{radiosValue}}]
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-radio index=&quot;x&quot;&gt;Choice&lt;/fish-radio&gt;
&lt;fish-radio index=&quot;1&quot;&gt;Choice&lt;/fish-radio&gt;
&lt;fish-radio disabled index=&quot;2&quot;&gt;Choice&lt;/fish-radio&gt;
&lt;fish-radios v-model=&quot;radiosValue&quot;&gt;
  &lt;fish-radio :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-radio&gt;
&lt;/fish-radios&gt;</code></pre>
      </div>
    </fish-card>

    <h3>Radio Attributes</h3>
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
        radiosValue: 0,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['index', '对应的唯一值', 'String, Number', '-'],
          ['disabled', '是否可用', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
