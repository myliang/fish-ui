<template>
  <main-layout menuActiveIndex="input-number">
    <h3>Input Number 数字输入框</h3>

    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="基本用法" desc="基本用法，需要 <code>v-model</code>绑定">
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
        <code-card title="取值范围" desc="可以通过设置<code>min</code>, <code>max</code>设置范围">
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
        <code-card title="步调范围" desc="可以通过<code>step</code>设置">
          <template slot="demo">
            <fish-input-number step="5.5" v-model="vStep"></fish-input-number>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-input-number step=&quot;5.5&quot; v-model=&quot;vStep&quot;&gt;&lt;/fish-input-number&gt;
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
        v: 1.234,
        vMinMax: 2,
        vStep: 5.5,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['min', '最小值，必填', 'String, Number', '0'],
          ['max', '最大值，必填', 'String, Number', '1000000000000.00'],
          ['step', '每次改变步数，可以为小数', 'String, Number', '1'],
          ['hint', '提示信息', 'String', 'Please ...'],
          ['size', '大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['disabled', '是否可用', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
