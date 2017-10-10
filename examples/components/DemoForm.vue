<template>
  <main-layout menuActiveIndex="form">
    <h3>Form 表单</h3>
    <fish-card>
      <fish-form>
        <fish-fields>
          <fish-field label="First Name" span="12" disabled>
            <fish-input></fish-input>
          </fish-field>
          <fish-field label="Last Name" span="12" required>
            <fish-input></fish-input>
          </fish-field>
        </fish-fields>
        <fish-field label="Username" inline>
          <fish-input></fish-input>
        </fish-field>
        <fish-field label="Password">
          <fish-input type="password"></fish-input>
        </fish-field>
        <fish-field required>
          <fish-checkbox index="0">I agree to the terms and conditions</fish-checkbox>
        </fish-field>
        <fish-button type="primary" @click="showModal = false">Submit</fish-button>
      </fish-form>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-form&gt;
  &lt;fish-fields&gt;
    &lt;fish-field label=&quot;First Name&quot; span=&quot;12&quot; disabled&gt;
      &lt;fish-input&gt;&lt;/fish-input&gt;
    &lt;/fish-field&gt;
    &lt;fish-field label=&quot;Last Name&quot; span=&quot;12&quot; required&gt;
      &lt;fish-input&gt;&lt;/fish-input&gt;
    &lt;/fish-field&gt;
  &lt;/fish-fields&gt;
  &lt;fish-field label=&quot;Username&quot; inline&gt;
    &lt;fish-input&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field label=&quot;Password&quot;&gt;
    &lt;fish-input type=&quot;password&quot;&gt;&lt;/fish-input&gt;
  &lt;/fish-field&gt;
  &lt;fish-field&gt;
    &lt;fish-checkbox index=&quot;0&quot;&gt;I agree to the terms and conditions&lt;/fish-checkbox&gt;
  &lt;/fish-field&gt;
  &lt;fish-button type=&quot;primary&quot; @click=&quot;showModal = false&quot;&gt;Submit&lt;/fish-button&gt;
&lt;/fish-form&gt;</code></pre>
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
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['inline', '是否一行显示', 'Boolean', 'false']
        ],
        api_data2: [
          ['label', '标签内容', 'String', '-'],
          ['labelWidth', '标签内容的宽度, 当 inline === true 是生效', 'String', 'auto'],
          ['labelAlign', '标签内容对其方式, 当 inline === true 是生效', 'String', 'right'],
          ['disabled', '是否不可用', 'Boolean', 'false'],
          ['required', '是否显示必填*', 'Boolean', 'false'],
          ['span', '栅格占位格数 (可填写1-24中的值)', 'String, Number', '-'],
          ['inline', '是否一行显示', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
