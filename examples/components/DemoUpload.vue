<template>
  <main-layout menuActiveIndex="upload">
    <h3>Upload 上传</h3>
    <vui-card>
      <vui-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files"
                  :withCredentials="true" :multiple="true">
        <vui-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</vui-button>
      </vui-upload>
      <vui-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files"
                  :withCredentials="true" type="picture">
      </vui-upload><br/>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files&quot;
            :withCredentials=&quot;true&quot; :multiple=&quot;true&quot;&gt;
  &lt;vui-button&gt;&lt;i class=&quot;fa fa-upload&quot; aria-hidden=&quot;true&quot; style=&quot;margin-right: 5px;&quot;&gt;&lt;/i&gt; Upload&lt;/vui-button&gt;
&lt;/vui-upload&gt;
&lt;vui-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files&quot;
            :withCredentials=&quot;true&quot; type=&quot;picture&quot;&gt;
&lt;/vui-upload&gt;</code></pre><br/>
      </div>
    </vui-card>

    <h3>Upload Attributes</h3>
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
        previewUrl: '',
        previewShow: false,
        files: [{name: 'xxx.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396231761&di=a27f825a7b2597ebf70e5a8323a88841&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F360%2F6163TLR088W0.jpg'},
          {name: 'yyy.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396232089&di=c1d198378d24a175a1a6445906b78556&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201401%2F04%2F20140104235918_uNikH.jpeg'},
          {name: 'zzz.png', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505396232088&di=eac61759e89fb8913fcf75bb122335fb&imgtype=0&src=http%3A%2F%2Fwww.dingniu8.com%2Fdesk%2FUploadPic%2F2013-1%2F2013112205556695.jpg'}]
      }
    }
  }
</script>
