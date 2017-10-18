<template>
  <main-layout menuActiveIndex="radio">
    <h3>Radio 单选</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="基本用法" desc="最简单的用法">
          <template slot="demo">
            <fish-radio index="x">Choice</fish-radio>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-radio index=&quot;x&quot;&gt;Choice&lt;/fish-radio&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="不可用" desc="不可用的用法">
          <template slot="demo">
            <fish-radio disabled index="2">Choice</fish-radio>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-radio disabled index=&quot;2&quot;&gt;Choice&lt;/fish-radio&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="单选组合" desc="一组互斥的 Radio 配合使用">
          <template slot="demo">
            <fish-radios v-model="radiosValue">
              <fish-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-radio>
            </fish-radios>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-radios v-model=&quot;radiosValue&quot;&gt;
    &lt;fish-radio :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-radio&gt;
  &lt;/fish-radios&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {radiosValue: 0} }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="垂直显示" desc="一组 Radio 垂直显示">
          <template slot="demo">
            <fish-radios v-model="radiosValue1" mode="vertical">
              <fish-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-radio>
            </fish-radios>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-radios v-model=&quot;radiosValue1&quot; mode=&quot;radiosValue&quot;&gt;
    &lt;fish-radio :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-radio&gt;
  &lt;/fish-radios&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {radiosValue: 0} }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

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
  import CodeCard from './CodeCard.vue'

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        radiosValue: 0,
        radiosValue1: 0,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['index', '对应的唯一值', 'String, Number', '-'],
          ['disabled', '是否可用', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
