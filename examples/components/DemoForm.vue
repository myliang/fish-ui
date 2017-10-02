<template>
  <main-layout menuActiveIndex="form">
    <h3>Form 表单</h3>
    <fish-card>
      <fish-form>
        <fish-fields>
          <fish-field label="First Name" span="eight">
            <fish-input></fish-input>
          </fish-field>
          <fish-field label="Last Name" span="eight">
            <fish-input></fish-input>
          </fish-field>
        </fish-fields>
        <fish-field label="Username" inline>
          <fish-input></fish-input>
        </fish-field>
        <fish-field label="Password">
          <fish-input type="password"></fish-input>
        </fish-field>
        <fish-field>
          <fish-checkbox index="0">I agree to the terms and conditions</fish-checkbox>
        </fish-field>
        <fish-button type="primary" @click="showModal = false">Submit</fish-button>
      </fish-form>
      <div slot="footer">
        <pre v-highlightjs><code class="html"></code></pre>
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
          ['span', '占用的宽度', 'String', '-'],
          ['inline', '是否一行显示', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
