<template>
  <main-layout menuActiveIndex="form">
    <h3>Form 表单</h3>
    <vui-card>
      <vui-form>
        <vui-fields>
          <vui-field label="First Name" span="eight">
            <vui-input></vui-input>
          </vui-field>
          <vui-field label="Last Name" span="eight">
            <vui-input></vui-input>
          </vui-field>
        </vui-fields>
        <vui-field label="Username" inline>
          <vui-input></vui-input>
        </vui-field>
        <vui-field label="Password">
          <vui-input type="password"></vui-input>
        </vui-field>
        <vui-field>
          <vui-checkbox index="0">I agree to the terms and conditions</vui-checkbox>
        </vui-field>
        <vui-button type="primary" @click="showModal = false">Submit</vui-button>
      </vui-form>
      <div slot="footer">
        <pre v-highlightjs><code class="html"></code></pre>
      </div>
    </vui-card>

    <h3>Form Attributes</h3>
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

    <h3>Form Field Attributes</h3>
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
