<template>
  <main-layout menuActiveIndex="notification">
    <h3>Notification 全局提示</h3>
    <code-card title="基本用法" desc="基本用法, 支持多种提示">
      <template slot="demo">
        <fish-button @click="messageWarningHandler">warning</fish-button>
        <fish-button @click="messageErrorHandler">error</fish-button>
        <fish-button @click="messageSuccessHandler">success</fish-button>
        <fish-button @click="messageTipHandler">提示信息</fish-button>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;messageWarningHandler&quot;&gt;warning&lt;/fish-button&gt;
    &lt;fish-button @click=&quot;messageErrorHandler&quot;&gt;error&lt;/fish-button&gt;
    &lt;fish-button @click=&quot;messageSuccessHandler&quot;&gt;success&lt;/fish-button&gt;
    &lt;fish-button @click=&quot;messageTipHandler&quot;&gt;提示信息&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      messageWarningHandler () {
        this.$message.warning(&#x27;welcome to you 黄英你朋友!!!&#x27;, 5000)
      },
      messageErrorHandler () {
        this.$message.error(&#x27;error: welcome to you 黄英你朋友!!!&#x27;, 5000)
      },
      messageSuccessHandler () {
        this.$message.success(&#x27;success: welcome to you 黄英你朋友!!!&#x27;, 5000)
      },
      messageTipHandler () {
        this.$message.tip(&#x27;Notification Title&#x27;, &#x27;I will never close automatically. I will be close automatically. I will never close automatically.&#x27;)
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <h3>Notification API</h3>
    <ul class="api">
      <li><code>message.warning(text, fadeTime = 3000)</code></li>
      <li><code>message.info(text, fadeTime = 3000)</code></li>
      <li><code>message.success(text, fadeTime = 3000)</code></li>
      <li><code>message.error(text, fadeTime = 3000)</code></li>
      <li><code>message.tip(title, content, position = 'top right')</code></li>
    </ul>

    <h3>函数参数说明</h3>
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
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['text', '显示文本，必填', 'String', '-'],
          ['fadeTime', '多久后消失，单位是秒', 'Number', '3000'],
          ['title', '显示文本标题，必填 (针对tip函数)', 'String', '-'],
          ['content', '显示文本内容，必填 (针对tip函数)', 'String', '-'],
          ['position', '显示位置，可选值：<code>top right</code> <code>top left</code> <code>bottom right</code> <code>bottom left</code>  (针对tip)', 'String', 'top right']
        ]
      }
    },
    methods: {
      messageWarningHandler () {
        this.$message.warning('welcome to you 黄英你朋友!!!', 5000)
      },
      messageErrorHandler () {
        this.$message.error('error: welcome to you 黄英你朋友!!!', 5000)
      },
      messageSuccessHandler () {
        this.$message.success('success: welcome to you 黄英你朋友!!!', 5000)
      },
      messageTipHandler () {
        this.$message.tip('Notification Title', 'I will never close automatically. I will be close automatically. I will never close automatically.')
      }
    }
  }
</script>
