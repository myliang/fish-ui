<template>
  <main-layout menuActiveIndex="form">
    <h3>Form</h3>

    <code-card title="Horizontal Login Form" desc="Horizontal login form is often used in navigation bar.">
      <template slot="demo">
        <fish-form inline>
          <fish-field v-show="true">
            <fish-input :iconLeft="true" icon="fa fa-user"></fish-input>
          </fish-field>
          <fish-field>
            <fish-input :iconLeft="true" icon="fa fa-lock"></fish-input>
          </fish-field>
          <fish-button type="primary">Submit</fish-button>
        </fish-form>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-form inline&gt;
  &lt;fish-field&gt;
    &lt;fish-input iconLeft=&quot;true&quot; icon=&quot;fa fa-user&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field&gt;
    &lt;fish-input iconLeft=&quot;true&quot; icon=&quot;fa fa-lock&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-button type=&quot;primary&quot;&gt;Submit&lt;/fish-button&gt;
&lt;/fish-form&gt;</code></pre>
    </code-card>

    <code-card title="Login Form" desc="Normal login form which can contain more elements.">
      <template slot="demo">
        <fish-form style="width: 300px;">
          <fish-field>
            <fish-input :iconLeft="true" icon="fa fa-user"></fish-input>
          </fish-field>
          <fish-field>
            <fish-input :iconLeft="true" icon="fa fa-lock"></fish-input>
          </fish-field>
          <fish-field>
            <fish-checkbox index="yes">Remember me?</fish-checkbox>
          </fish-field>
          <fish-button type="primary">Submit</fish-button>
        </fish-form>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-form style=&quot;width: 300px;&quot;&gt;
  &lt;fish-field&gt;
    &lt;fish-input iconLeft=&quot;true&quot; icon=&quot;fa fa-user&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field&gt;
    &lt;fish-input iconLeft=&quot;true&quot; icon=&quot;fa fa-lock&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field&gt;
    &lt;fish-checkbox index=&quot;yes&quot;&gt;Remember me?&lt;/fish-checkbox&gt;
  &lt;/fish-field&gt;
  &lt;fish-button type=&quot;primary&quot;&gt;Submit&lt;/fish-button&gt;
&lt;/fish-form&gt;</code></pre>
    </code-card>

    <code-card title="Validate Form" desc="Validate form input">
      <template slot="demo">
        <demo-form-validate></demo-form-validate>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-form ref=&quot;form&quot;&gt;
    &lt;fish-fields&gt;
      &lt;fish-field label=&quot;First Name&quot; span=&quot;12&quot; disabled&gt;
        &lt;fish-input&gt;&lt;/fish-input&gt;
      &lt;/fish-field&gt;
      &lt;fish-field label=&quot;Last Name&quot; span=&quot;12&quot; name=&quot;lastName&quot; :rules=&quot;[{ required: true, message: &#x27;The name is not empty&#x27;}]&quot;&gt;
        &lt;fish-input v-model=&quot;lastName&quot;&gt;&lt;/fish-input&gt;
      &lt;/fish-field&gt;
    &lt;/fish-fields&gt;
    &lt;fish-fields&gt;
      &lt;fish-field label=&quot;Type&quot;&gt;GOOD, Bad,&lt;/fish-field&gt;
      &lt;fish-field label=&quot;Email&quot; name=&quot;email&quot; :rules=&quot;[{ type: &#x27;email&#x27;, message: &#x27;The input is not valid E-mail!&#x27; }, {required: true}]&quot;&gt;
        &lt;fish-input v-model=&quot;email&quot;&gt;&lt;/fish-input&gt;
      &lt;/fish-field&gt;
      &lt;fish-field label=&quot;Username&quot; name=&quot;userName&quot; :rules=&quot;[{ required: true, message: &#x27;The user name is not empty&#x27;}]&quot;&gt;
        &lt;fish-input v-model=&quot;userName&quot;&gt;&lt;/fish-input&gt;
      &lt;/fish-field&gt;
      &lt;fish-field label=&quot;Password&quot; name=&quot;password&quot; :rules=&quot;[{ required: true, message: &#x27;The password is not empty&#x27;}]&quot;&gt;
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
    &lt;fish-field label=&quot;LableWidthM&quot; name=&quot;LableWidthM&quot; :rules=&quot;[{ required: true }]&quot; inline :showError=&quot;false&quot;&gt;
      &lt;fish-input v-model=&quot;LableWidthM&quot;&gt;&lt;/fish-input&gt;
    &lt;/fish-field&gt;
    &lt;fish-field label=&quot;Upload&quot; name=&quot;files&quot; :rules=&quot;[{ required: true }]&quot; inline&gt;
      &lt;fish-upload action=&quot;//jsonplaceholder.typicode.com/posts/&quot; v-model=&quot;files&quot; :withCredentials=&quot;true&quot;&gt;
        &lt;fish-button&gt;&lt;i class=&quot;fa fa-upload&quot; aria-hidden=&quot;true&quot; style=&quot;margin-right: 5px;&quot;&gt;&lt;/i&gt; Upload&lt;/fish-button&gt;
      &lt;/fish-upload&gt;
    &lt;/fish-field&gt;
    &lt;fish-field label=&quot;Switch&quot; inline&gt;
      &lt;fish-switch v-model=&quot;agree&quot;&gt;I agree to the terms and conditions&lt;/fish-switch&gt;
    &lt;/fish-field&gt;
    &lt;fish-field&gt;
      &lt;fish-checkbox index=&quot;0&quot;&gt;I agree to the terms and conditions&lt;/fish-checkbox&gt;
    &lt;/fish-field&gt;
    &lt;fish-button type=&quot;primary&quot; @click=&quot;submitHandler&quot;&gt;Submit&lt;/fish-button&gt;
  &lt;/fish-form&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-form-validate&#x27;,
    data () {
      return {
        userName: &#x27;t&#x27;,
        lastName: &#x27;&#x27;,
        password: &#x27;&#x27;,
        age: &#x27;&#x27;,
        sex: [],
        date: &#x27;&#x27;,
        time: &#x27;&#x27;,
        address: [],
        level: &#x27;&#x27;,
        files: [],
        email: &#x27;&#x27;,
        LableWidthM: &#x27;&#x27;,
        agree: true,
        options: [
          [&#x27;zhejiang&#x27;, &#x27;Zhejiang&#x27;, [
            [&#x27;hangzhou&#x27;, &#x27;Hangzhou&#x27;, [
              [&#x27;xihu&#x27;, &#x27;West Lake&#x27;]
            ]]
          ]],
          [&#x27;jiangsu&#x27;, &#x27;Jiangsu&#x27;, [
            [&#x27;nanjing&#x27;, &#x27;Nanjing&#x27;, [
              [&#x27;zhonghuamen&#x27;, &#x27;Zhong Hua Men&#x27;]
            ]]
          ]]
        ]
      }
    },
    methods: {
      submitHandler () {
        this.$refs.form.validate((valid) =&gt; {
          console.log(valid)
        })
      }
    }
  }
&lt;/script&gt;</code></pre>
    </code-card>

    <h3>Form Attributes</h3>
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

    <h3>Form Field Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data2" :key="index">
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
  import DemoFormValidate from './DemoFormValidate.vue'

  export default {components: {
    DemoFormValidate,
    CodeCard,
    MainLayout},
    data () {
      return {
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['inline', 'Whether is inline or not', 'Boolean', 'false']
        ],
        api_data2: [
          ['label', 'Label content', 'String', '-'],
          ['labelWidth', 'Label width is able when inline === true', 'Number, String', 'auto'],
          ['labelAlign', 'Label align is able when inline === true', 'String', 'right'],
          ['disabled', 'Whether is disabled or not', 'Boolean', 'false'],
          ['name', 'Validate the specified field Name', 'String', ''],
          ['rules', 'Validate Rules, See more advanced usage at <a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="fa fa-github"></i> async-validator</a>', 'Array', ''],
          ['span', 'Span number (1-24)', 'String, Number', '-'],
          ['inline', 'Whether is inline or not', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
