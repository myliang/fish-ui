<template>
  <main-layout menuActiveIndex="input">
    <h3>Input</h3>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-input></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Loading" desc="Set the loading status of input">
          <template slot="demo">
            <fish-input loading></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input loading&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Disabled" desc="Set the disabled status of input">
          <template slot="demo">
            <fish-input disabled></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input disabled&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="6">
        <code-card title="Icon" desc="Input icon">
          <template slot="demo">
            <fish-input icon="fa fa-search"></fish-input><br/><br/>
            <fish-input icon="fa fa-search" :iconLeft="true"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input icon=&quot;fa fa-search&quot;&gt;&lt;/fish-input&gt;
&lt;fish-input icon=&quot;fa fa-search&quot; :iconLeft=&quot;true&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="Label" desc="label left or right">
          <template slot="demo">
            <fish-input label="right"></fish-input>
            <fish-input label-left="left" icon="fa fa-search"></fish-input>
            <fish-input label="right" label-left="left"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input label=&quot;right&quot;&gt;&lt;/fish-input&gt;
&lt;fish-input label-left=&quot;left&quot; icon=&quot;fa fa-search&quot;&gt;&lt;/fish-input&gt;
&lt;fish-input label=&quot;right&quot; label-left=&quot;left&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="TextArea" desc="use textarea for multirow input">
          <template slot="demo">
            <fish-input type="textarea" style="height: 50px;"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input type=&quot;textarea&quot; style=&quot;height: 50px;&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="Size" desc="Input size">
          <template slot="demo">
            <fish-input size="big"></fish-input><br/><br/>
            <fish-input size="small"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input size=&quot;big&quot;&gt;&lt;/fish-input&gt;&lt;br/&gt;&lt;br/&gt;
&lt;fish-input size=&quot;small&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Input Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, key) in api_data" :key="key">
          <td v-for="(v, vindex) in item" v-html="v" :key="`${key}-${vindex}`"></td>
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
        defaultValue: '',
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['type', 'input type, optional：<code>text</code><code>textarea</code><code>password</code>...', 'String', 'text'],
          ['hint', 'hint', 'String', 'Please ...'],
          ['icon', 'input icon, fontawesome icon font', 'String', '-'],
          ['iconLeft', 'icon position is left', 'Boolean', 'false'],
          ['iconClose', 'icon close', 'String', 'fa fa-times-circle'],
          ['loading', 'Whether the input is loading', 'Boolean', 'false'],
          ['size', 'optional: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['transparent', 'Whether the input is transparent.', 'Boolean', 'false'],
          ['disabled', 'Whether the input is disabled.', 'Boolean', 'false'],
          ['clear', 'Whether the input is cleared', 'Boolean', 'false'],
          ['autofocus', 'Whether the input autofocus', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
