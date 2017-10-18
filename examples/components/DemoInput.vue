<template>
  <main-layout menuActiveIndex="input">
    <h3>Input 输入框</h3>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="基本用法" desc="基本用法">
          <template slot="demo">
            <fish-input></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="加载状态" desc="输入框处于loading状态">
          <template slot="demo">
            <fish-input loading></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input loading&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="不可用" desc="输入框不可编辑">
          <template slot="demo">
            <fish-input disabled></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input disabled&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="图标" desc="指定输入框中的图标">
          <template slot="demo">
            <fish-input icon="fa fa-search"></fish-input><br/><br/>
            <fish-input icon="fa fa-search" :iconLeft="true"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input icon=&quot;fa fa-search&quot;&gt;&lt;/fish-input&gt;
&lt;fish-input icon=&quot;fa fa-search&quot; :iconLeft=&quot;true&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="文本域" desc="用于多行输入。">
          <template slot="demo">
            <fish-input type="textarea" style="height: 50px;"></fish-input>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-input type=&quot;textarea&quot; style=&quot;height: 50px;&quot;&gt;&lt;/fish-input&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="大小" desc="可通过<code>size</code>设置">
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
        defaultValue: '',
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['type', '输入框类型，可选值：<code>text</code> <code>textarea</code> <code>password</code>...', 'String', 'text'],
          ['hint', '提示信息', 'String', 'Please ...'],
          ['icon', '图标(默认位置靠右), fontawesome icon 字体', 'String', '-'],
          ['iconLeft', '图标是否靠左', 'Boolean', 'false'],
          ['iconClose', '关闭图标', 'String', 'fa fa-times-circle'],
          ['loading', '加载中..', 'Boolean', 'false'],
          ['size', '大小，可选值: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['transparent', '是否透明', 'Boolean', 'false'],
          ['disabled', '是否可用', 'Boolean', 'false'],
          ['clear', '是否可清除输入的内容', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
