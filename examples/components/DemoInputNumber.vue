<template>
  <main-layout menuActiveIndex="input_number">
    <h3>Input Number</h3>

    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-input-number v-model="v"></fish-input-number>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-input-number v-model=&quot;v&quot;&gt;&lt;/fish-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        v: 1.234
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Range" desc="can be set <code>min</code>, <code>max</code>">
          <template slot="demo">
            <fish-input-number min="0" max="10" v-model="vMinMax"></fish-input-number>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-input-number min=&quot;0&quot; max=&quot;10&quot; v-model=&quot;vMinMax&quot;&gt;&lt;/fish-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        vMinMax: 2
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Step" desc="The number to which the current value is increased or decreased. It can be an integer or decimal.">
          <template slot="demo">
            <fish-input-number step="5.5" v-model="vStep" label="day"></fish-input-number>
            <fish-input-number v-model="vStep" labelLeft="over" label="day"></fish-input-number>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-input-number step=&quot;5.5&quot; v-model=&quot;vStep&quot; label=&quot;day&quot;&gt;&lt;/fish-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        vStep: 5.5
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Input Number Attributes</h3>
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
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        v: 1.234,
        vMinMax: 2,
        vStep: 5.5,
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['min', 'The min value', 'String, Number', '0'],
          ['max', 'The max value', 'String, Number', '1000000000000.00'],
          ['step', 'The number to which the current value is increased or decreased. It can be an integer or decimal.', 'String, Number', '1'],
          ['hint', 'Hint', 'String', 'Please ...'],
          ['size', 'optional: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['disabled', 'Whether it is disabled', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
