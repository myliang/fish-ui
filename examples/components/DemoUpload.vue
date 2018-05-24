<template>
  <main-layout menuActiveIndex="upload">
    <h3>Upload</h3>

    <code-card title="Basic" desc="Basic use case">
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

    <code-card title="Picture" desc="Upload Picture">
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'value', 'Array[{name: "", url: ""}...]', '-'],
          ['type', 'optional：<code>picture</code> or empty', 'String', '-'],
          ['action', 'Required. Uploading URL', 'String', ''],
          ['multiple', 'whether it is multiple or not', 'Boolean', 'false'],
          ['accept', 'File types that can be accepted, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">input accept Attribute</a>', 'String', ''],
          ['maxSize', 'file max size', 'Number', '5 * 1024 * 1024'],
          ['withCredentials', 'ajax upload with cookie sent', 'Boolean', 'false'],
          ['preview', 'whether it is preview or not, type === picture', 'Boolean', 'false'],
          ['headers', 'Set request headers', 'Object', '-'],
          ['data', 'Uploading params or function which can return uploading params.', 'Object', '-'],
          ['name', 'The name of uploading file', 'Object', 'file'],
          ['onProgress', 'callback when uploading', 'Function(e, file)', '() => {}'],
          ['onSuccess', 'callback when upload finished', 'Function(res, file)', '() => {}'],
          ['onError', 'callback when upload error', 'Function(err, file)', '() => {}'],
          ['formatUrlFromResponse', 'parse url from response', 'Function(res)', '(res) => res']
        ],
        files1: [{name: 'xxx.png', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}],
        files: []
      }
    }
  }
</script>
