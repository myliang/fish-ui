<template>
  <main-layout menuActiveIndex="step">
    <h3>Step</h3>
    <code-card title="Basic" desc="Basic use case">
      <template slot="demo">
        <fish-steps>
          <fish-step title="AA"></fish-step>
          <fish-step title="BB" active icon="fa fa-usd"></fish-step>
          <fish-step title="CC" disabled description="cs"></fish-step>
        </fish-steps>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-steps&gt;
  &lt;fish-step title=&quot;AA&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;BB&quot; active icon=&quot;usd&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;CC&quot; disabled description=&quot;cs&quot;&gt;&lt;/fish-step&gt;
&lt;/fish-steps&gt;</code></pre>
    </code-card>

    <code-card title="size" desc="optional: <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>">
      <template slot="demo">
        <fish-steps size="big">
          <fish-step title="AA" description="as.."></fish-step>
          <fish-step title="BB" active description="bs.." icon="fa fa-usd"></fish-step>
          <fish-step title="CC" disabled description="cs.."></fish-step>
        </fish-steps>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-steps size=&quot;big&quot;&gt;
  &lt;fish-step title=&quot;AA&quot; description=&quot;as..&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;BB&quot; active description=&quot;bs..&quot; icon=&quot;usd&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;CC&quot; disabled description=&quot;cs..&quot;&gt;&lt;/fish-step&gt;
&lt;/fish-steps&gt;</code></pre>
    </code-card>

    <code-card title="Vertical" desc="vertical step">
      <template slot="demo">
        <fish-steps mode="vertical" width="300">
          <fish-step title="Finished" description="this is description"></fish-step>
          <fish-step title="in Progress" active description="this is description" icon="fa fa-usd"></fish-step>
          <fish-step title="Waiting" disabled description="this is description"></fish-step>
        </fish-steps>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-steps mode=&quot;vertical&quot; width=&quot;300&quot;&gt;
  &lt;fish-step title=&quot;Finished&quot; description=&quot;this is description&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;in Progress&quot; active description=&quot;this is description&quot; icon=&quot;usd&quot;&gt;&lt;/fish-step&gt;
  &lt;fish-step title=&quot;Waiting&quot; disabled description=&quot;this is description&quot;&gt;&lt;/fish-step&gt;
&lt;/fish-steps&gt;</code></pre>
    </code-card>

    <h3>Steps Attributes</h3>
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

    <h3>Step Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data2">
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['size', 'optional: <code>mini</code><code>tiny</code><code>small</code><code>medium</code><code>large</code><code>big</code><code>huge</code><code>massive</code>', 'String', '-'],
          ['mode', 'optional:<code>vertical</code><code>horizontal</code>', 'String', 'horizontal'],
          ['width', 'step width:，unit is <code>px</code> when mode === vertical, unit is <code>%</code> when mode === horizontal', 'String, Number', '100']
        ],
        api_data2: [
          ['icon', 'icon, fontawesome icon font', 'String', '-'],
          ['title', 'title', 'String', '-'],
          ['description', 'step description', 'String', '-'],
          ['active', 'whether it is active or not', 'Boolean', 'false'],
          ['disabled', 'whether it is disabled or not', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
