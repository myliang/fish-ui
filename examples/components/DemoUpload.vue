<template>
  <main-layout menuActiveIndex="upload">
    <h3>Upload 上传</h3>

    <code-card title="基本用法" desc="基本用法，参数<code>withCredentials</code>可以实现跨越">
      <template slot="demo">
        <fish-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files1"
                     :withCredentials="true">
          <fish-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</fish-button>
        </fish-upload>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files1&quot;
               :withCredentials=&quot;true&quot;&gt;
    &lt;fish-button&gt;&lt;i class=&quot;fa fa-upload&quot; aria-hidden=&quot;true&quot; style=&quot;margin-right: 5px;&quot;&gt;&lt;/i&gt; Upload&lt;/fish-button&gt;
  &lt;/fish-upload&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        files1: [{name: &#x27;xxx.png&#x27;,url: &#x27;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png&#x27;}]
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <code-card title="图片类型" desc="上传的是图片">
      <template slot="demo">
        <fish-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files"
                     :withCredentials="true" type="picture">
        </fish-upload>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files&quot;
               :withCredentials=&quot;true&quot; type=&quot;picture&quot;&gt;
  &lt;/fish-upload&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        files: [{name: &#x27;xxx.png&#x27;, url: &#x27;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png&#x27;},
          {name: &#x27;yyy.png&#x27;, url: &#x27;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png&#x27;},
          {name: &#x27;zzz.png&#x27;, url: &#x27;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png&#x27;}]
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Upload Attributes</h3>
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
          ['value', '值，必填', 'Array[{name: "", url: ""}...]', '-'],
          ['type', '类型，可选值：<code>picture</code> 可空', 'String', '-'],
          ['action', '必选参数, 上传的地址', 'String', ''],
          ['multiple', '是否支持多选文件', 'Boolean', 'false'],
          ['accept', '接受上传的文件类型, 详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">input accept Attribute</a>', 'String', ''],
          ['maxSize', '上传文件的最大大小 字节', 'Number', '5 * 1024 * 1024'],
          ['withCredentials', '上传请求时是否携带 cookie', 'Boolean', 'false'],
          ['preview', '是否支持预览，当type === picture', 'Boolean', 'false'],
          ['headers', '设置上传的请求头部', 'Object', '-'],
          ['data', '上传所需参数或返回上传参数的方法', 'Object', '-'],
          ['name', '发到后台的文件参数名', 'Object', 'file'],
          ['onProgress', '上传处理中触发', 'Function(e, file)', '() => {}'],
          ['onSuccess', '上传完成触发', 'Function(res, file)', '() => {}'],
          ['onError', '上传出错触发', 'Function(err, file)', '() => {}'],
          ['formatUrlFromResponse', '解析返回值取得url', 'Function(res)', '(res) => res']
        ],
        files1: [{name: 'xxx.png', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}],
        files: [{name: 'xxx.png', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'},
          {name: 'yyy.png', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'},
          {name: 'zzz.png', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}]
      }
    }
  }
</script>
