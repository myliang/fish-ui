<template>
  <main-layout menuActiveIndex="step">
    <h3>Step 步骤</h3>
    <vui-card>
      <vui-steps>
        <vui-step title="Finished"></vui-step>
        <vui-step title="in Progress" active icon="fa fa-usd"></vui-step>
        <vui-step title="Waiting" disabled description="this is description"></vui-step>
      </vui-steps>
      <vui-steps size="big">
        <vui-step title="Finished" description="这是描述"></vui-step>
        <vui-step title="in Progress" active description="this is description" icon="fa fa-usd"></vui-step>
        <vui-step title="Waiting" disabled description="this is description"></vui-step>
      </vui-steps>
      <vui-steps mode="vertical" width="300">
        <vui-step title="Finished" description="这是描述"></vui-step>
        <vui-step title="in Progress" active description="this is description" icon="fa fa-usd"></vui-step>
        <vui-step title="Waiting" disabled description="this is description"></vui-step>
      </vui-steps>

      <div slot="footer">
      <pre v-highlightjs><code class="html">&lt;vui-steps&gt;
  &lt;vui-step title=&quot;Finished&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;in Progress&quot; active icon=&quot;usd&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;Waiting&quot; disabled description=&quot;this is description&quot;&gt;&lt;/vui-step&gt;
&lt;/vui-steps&gt;
&lt;vui-steps size=&quot;big&quot;&gt;
  &lt;vui-step title=&quot;Finished&quot; description=&quot;这是描述&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;in Progress&quot; active description=&quot;this is description&quot; icon=&quot;usd&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;Waiting&quot; disabled description=&quot;this is description&quot;&gt;&lt;/vui-step&gt;
&lt;/vui-steps&gt;
&lt;vui-steps mode=&quot;vertical&quot; width=&quot;300&quot;&gt;
  &lt;vui-step title=&quot;Finished&quot; description=&quot;这是描述&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;in Progress&quot; active description=&quot;this is description&quot; icon=&quot;usd&quot;&gt;&lt;/vui-step&gt;
  &lt;vui-step title=&quot;Waiting&quot; disabled description=&quot;this is description&quot;&gt;&lt;/vui-step&gt;
&lt;/vui-steps&gt;
&lt;/vui-card&gt;</code></pre>
      </div>
    </vui-card>

    <h3>Steps Attributes</h3>
    <div class="vui table attributes">
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
    <div class="vui table attributes">
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

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['size', '步骤大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['mode', '步骤类型，现在支持垂直<code>vertical</code>、水平<code>horizontal</code>可选', 'String', 'horizontal'],
          ['width', '步骤宽度，当mode === vertical, 单位为px, 当mode === horizontal，单位为%', 'String, Number', '100']
        ],
        api_data2: [
          ['icon', '图标, fontawesome icon 字体', 'String', '-'],
          ['title', '标题', 'String', '-'],
          ['description', '步骤的详情描述，可选', 'String', '-'],
          ['active', '是否为选中状态', 'Boolean', 'false'],
          ['disabled', '是否不可选状态', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
