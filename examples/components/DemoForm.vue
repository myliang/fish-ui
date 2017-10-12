<template>
  <main-layout menuActiveIndex="form">
    <h3>Form 表单</h3>
    <fish-card>
      <fish-form ref="form">
        <fish-fields>
          <fish-field label="First Name" span="12" disabled>
            <fish-input></fish-input>
          </fish-field>
          <fish-field label="Last Name" span="12" name="lastName" :rules="[{ required: true, message: '姓名不能为空'}]">
            <fish-input v-model="lastName"></fish-input>
          </fish-field>
        </fish-fields>
        <fish-fields>
          <fish-field label="Email" name="email" :rules="[{ type: 'email', message: 'The input is not valid E-mail!' }, {required: true}]">
            <fish-input v-model="email"></fish-input>
          </fish-field>
          <fish-field label="Username" name="userName" :rules="[{ required: true, message: '用户名不能为空'}]">
            <fish-input v-model="userName"></fish-input>
          </fish-field>
          <fish-field label="Password" name="password" :rules="[{ required: true, message: '密码不能为空'}]">
            <fish-input type="password" v-model="password"></fish-input>
          </fish-field>
        </fish-fields>
        <fish-fields>
          <fish-field label="Age" name="age" :rules="[{required: true}]">
            <fish-input-number min="0" max="100" v-model="age"></fish-input-number>
          </fish-field>
          <fish-field label="Sex" name="sex" :rules="[{required: true}]">
            <fish-select v-model="sex">
              <fish-option index="0" content="Male"></fish-option>
              <fish-option index="1" content="Female"></fish-option>
            </fish-select>
          </fish-field>
          <fish-field label="Date" name="date" :rules="[{required: true}]">
            <fish-date-picker v-model="date"></fish-date-picker>
          </fish-field>
          <fish-field label="Time" name="time" :rules="[{required: true}]">
            <fish-time-picker v-model="time"></fish-time-picker>
          </fish-field>
          <fish-field label="Address" name="address" :rules="[{required: true}]">
            <fish-cascader :options="options" v-model="address"></fish-cascader>
          </fish-field>
          <fish-field label="Level" name="level" :rules="[{required: true}]">
            <fish-radios v-model="level">
              <fish-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-radio>
            </fish-radios>
          </fish-field>
        </fish-fields>
        <fish-field label="Upload" name="files" :rules="[{ required: true }]" inline>
          <fish-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files" :withCredentials="true">
            <fish-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</fish-button>
          </fish-upload>
        </fish-field>
        <fish-field>
          <fish-checkbox index="0">I agree to the terms and conditions</fish-checkbox>
        </fish-field>
        <fish-button type="primary" @click="submitHandler">Submit</fish-button>
      </fish-form>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-form ref=&quot;form&quot;&gt;
&lt;fish-fields&gt;
  &lt;fish-field label=&quot;First Name&quot; span=&quot;12&quot; disabled&gt;
    &lt;fish-input&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Last Name&quot; span=&quot;12&quot; name=&quot;lastName&quot; :rules=&quot;[{ required: true, message: &#x27;姓名不能为空&#x27;}]&quot;&gt;
    &lt;fish-input v-model=&quot;lastName&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
&lt;/fish-fields&gt;
&lt;fish-fields&gt;
  &lt;fish-field label=&quot;Email&quot; name=&quot;email&quot; :rules=&quot;[{ type: &#x27;email&#x27;, message: &#x27;The input is not valid E-mail!&#x27; }, {required: true}]&quot;&gt;
    &lt;fish-input v-model=&quot;email&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Username&quot; name=&quot;userName&quot; :rules=&quot;[{ required: true, message: &#x27;用户名不能为空&#x27;}]&quot;&gt;
    &lt;fish-input v-model=&quot;userName&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Password&quot; name=&quot;password&quot; :rules=&quot;[{ required: true, message: &#x27;密码不能为空&#x27;}]&quot;&gt;
    &lt;fish-input type=&quot;password&quot; v-model=&quot;password&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
&lt;/fish-fields&gt;
&lt;fish-fields&gt;
  &lt;fish-field label=&quot;Age&quot; name=&quot;age&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-input-number min=&quot;0&quot; max=&quot;100&quot; v-model=&quot;age&quot;&gt;&lt;/fish-input-number&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Sex&quot; name=&quot;sex&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-select v-model=&quot;sex&quot;&gt;
      &lt;fish-option index=&quot;0&quot; content=&quot;Male&quot;&gt;&lt;/fish-option&gt;
      &lt;fish-option index=&quot;1&quot; content=&quot;Female&quot;&gt;&lt;/fish-option&gt;
    &lt;/fish-select&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Date&quot; name=&quot;date&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-date-picker v-model=&quot;date&quot;&gt;&lt;/fish-date-picker&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Time&quot; name=&quot;time&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-time-picker v-model=&quot;time&quot;&gt;&lt;/fish-time-picker&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Address&quot; name=&quot;address&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-cascader :options=&quot;options&quot; v-model=&quot;address&quot;&gt;&lt;/fish-cascader&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Level&quot; name=&quot;level&quot; :rules=&quot;[{required: true}]&quot;&gt;
    &lt;fish-radios v-model=&quot;level&quot;&gt;
      &lt;fish-radio :index=&quot;index&quot; v-for=&quot;(c, index) in [&#x27;A&#x27;, &#x27;B&#x27;, &#x27;C&#x27;]&quot; :key=&quot;index&quot;&gt;&lt;span v-html=&quot;c&quot;&gt;&lt;/span&gt;&lt;/fish-radio&gt;
    &lt;/fish-radios&gt;
  &lt;/fish-field&gt;
&lt;/fish-fields&gt;
&lt;fish-field label=&quot;Upload&quot; name=&quot;files&quot; :rules=&quot;[{ required: true }]&quot; inline&gt;
  &lt;fish-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files&quot; :withCredentials=&quot;true&quot;&gt;
    &lt;fish-button&gt;&lt;i class=&quot;fa fa-upload&quot; aria-hidden=&quot;true&quot; style=&quot;margin-right: 5px;&quot;&gt;&lt;/i&gt; Upload&lt;/fish-button&gt;
  &lt;/fish-upload&gt;
&lt;/fish-field&gt;
&lt;fish-field&gt;
  &lt;fish-checkbox index=&quot;0&quot;&gt;I agree to the terms and conditions&lt;/fish-checkbox&gt;
&lt;/fish-field&gt;
&lt;fish-button type=&quot;primary&quot; @click=&quot;submitHandler&quot;&gt;Submit&lt;/fish-button&gt;
&lt;/fish-form&gt;
&lt;script&gt;
export default {
  data () {
    return {
      userName: 't',
      lastName: '',
      password: '',
      age: '',
      sex: [],
      date: '',
      time: '',
      address: [],
      level: '',
      files: [],
      email: '',
      options: [
        ['zhejiang', 'Zhejiang', [
          ['hangzhou', 'Hangzhou', [
            ['xihu', 'West Lake']
          ]]
        ]],
        ['jiangsu', 'Jiangsu', [
          ['nanjing', 'Nanjing', [
            ['zhonghuamen', 'Zhong Hua Men']
          ]]
        ]]
      ]
    }
  },
  methods: {
    submitHandler () {
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }&lt;/script&gt;</code></pre>
      </div>
    </fish-card>

    <h3>Form Attributes</h3>
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

    <h3>Form Field Attributes</h3>
    <div class="fish table attributes">
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

  export default {components: {
    MainLayout},
    data () {
      return {
        userName: 't',
        lastName: '',
        password: '',
        age: '',
        sex: [],
        date: '',
        time: '',
        address: [],
        level: '',
        files: [],
        email: '',
        options: [
          ['zhejiang', 'Zhejiang', [
            ['hangzhou', 'Hangzhou', [
              ['xihu', 'West Lake']
            ]]
          ]],
          ['jiangsu', 'Jiangsu', [
            ['nanjing', 'Nanjing', [
              ['zhonghuamen', 'Zhong Hua Men']
            ]]
          ]]
        ],
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['inline', '是否一行显示', 'Boolean', 'false']
        ],
        api_data2: [
          ['label', '标签内容', 'String', '-'],
          ['labelWidth', '标签内容的宽度, 当 inline === true 是生效', 'String', 'auto'],
          ['labelAlign', '标签内容对其方式, 当 inline === true 是生效', 'String', 'right'],
          ['disabled', '是否不可用', 'Boolean', 'false'],
          ['name', '需校验的字段名', 'String', ''],
          ['rules', '校验的规则,详细可参考 <a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="fa fa-github"></i> async-validator</a>', 'Array', ''],
          ['span', '栅格占位格数 (可填写1-24中的值)', 'String, Number', '-'],
          ['inline', '是否一行显示', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      submitHandler () {
        this.$refs.form.validate((valid) => {
          console.log(valid)
        })
      }
    }
  }
</script>
