<template>
  <main-layout menuActiveIndex="collapse">
    <h3>Collapse</h3>
    <code-card title="Basic" desc="Basic Collapse">
      <template slot="demo">
        <fish-collapse>
          <fish-collapse-item index="A">
            <template slot="title">What is a dog?</template>
            <p class="transition visible" style="display: block !important;">A dog .</p>
          </fish-collapse-item>
          <fish-collapse-item index="B" title="What kinds of dogs are there?" label="100">
            <p class="transition hidden">There are many breeds of dogs.</p>
          </fish-collapse-item>
          <fish-collapse-item index="C" title="How do you acquire a dog?">
            <p class="transition hidden">Three common ways for a prospective owner</p>
          </fish-collapse-item>
        </fish-collapse>
      </template>
      <template slot="codeHtml">
    <pre v-highlightjs><code class="xml">&lt;fish-collapse&gt;
  &lt;fish-collapse-item index=&quot;A&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;What is a dog?&lt;/template&gt;
    &lt;p class=&quot;transition visible&quot; style=&quot;display: block !important;&quot;&gt;A dog .&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item index=&quot;B&quot; title=&quot;What kinds of dogs are there?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;There are many breeds of dogs.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item index=&quot;C&quot; title=&quot;How do you acquire a dog?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;Three common ways for a prospective owner&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
&lt;/fish-collapse&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="Border" desc="Border Collapse">
      <template slot="demo">
        <fish-collapse bordered>
          <fish-collapse-item index="A">
            <template slot="title">What is a dog?</template>
            <p class="transition visible" style="display: block !important;">A dog .</p>
          </fish-collapse-item>
          <fish-collapse-item index="B" title="What kinds of dogs are there?">
            <p class="transition hidden">There are many breeds of dogs.</p>
          </fish-collapse-item>
          <fish-collapse-item index="C" title="How do you acquire a dog?">
            <p class="transition hidden">Three common ways for a prospective owner</p>
          </fish-collapse-item>
        </fish-collapse>
      </template>
      <template slot="codeHtml">
    <pre v-highlightjs><code class="xml">&lt;fish-collapse bordered&gt;
  &lt;fish-collapse-item index=&quot;A&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;What is a dog?&lt;/template&gt;
    &lt;p class=&quot;transition visible&quot; style=&quot;display: block !important;&quot;&gt;A dog .&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item index=&quot;B&quot; title=&quot;What kinds of dogs are there?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;There are many breeds of dogs.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item index=&quot;C&quot; title=&quot;How do you acquire a dog?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;Three common ways for a prospective owner&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
&lt;/fish-collapse&gt;</code></pre>
      </template>
    </code-card>
    
    <h3>Collapse Attributes</h3>
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

    <h3>CollapseItem Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data2" :key="index">
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
  components: {
    CodeCard,
    MainLayout
  },
  name: 'demo-collapse',
  data () {
    return {
      api_columns: ['Attribute', 'Description', 'Type', 'Default'],
      api_data: [
        ['bordered', 'Whether checkbox is bordered or not', 'Boolean', 'false']
      ],
      api_data2: [
        ['title', 'collapse title or slot="title"', 'String', '-'],
        ['label', 'collapse label', 'String', '-'],
        ['index', 'keyword required', 'String, Number', '-']
      ]
    }
  }
}
</script>

