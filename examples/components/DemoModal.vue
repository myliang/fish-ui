<template>
  <main-layout menuActiveIndex="modal">
    <h3>Modal 对话框</h3>

    <code-card title="基本用法" desc="基本用法，需要抓哟 <code>:visible<code>需要指定<code>.sync</code>">
      <template slot="demo">
        <fish-button @click="showModalFunc">show Modal</fish-button>
        <fish-modal title="什么鬼吗？欢迎!" :visible.sync="showModal">
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
        </fish-modal>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;showModalFunc&quot;&gt;show Modal&lt;/fish-button&gt;
    &lt;fish-modal title=&quot;什么鬼吗？欢迎!&quot; :visible.sync=&quot;showModal&quot;&gt;
      &lt;fish-form&gt;
        &lt;fish-fields&gt;
          &lt;fish-field label=&quot;First Name&quot; span=&quot;eight&quot;&gt;
            &lt;fish-input&gt;&lt;/fish-input&gt;
          &lt;/fish-field&gt;
          &lt;fish-field label=&quot;Last Name&quot; span=&quot;eight&quot;&gt;
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
      &lt;/fish-form&gt;
    &lt;/fish-modal&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      showModalFunc () {
        this.showModal = true
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Modal Attributes</h3>
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

  export default {components: {
    CodeCard,
    MainLayout},
    data () {
      return {
        showModal: false,
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['title', '标题', 'String', '-'],
          ['visible', '是否显示', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      showModalFunc () {
        this.showModal = true
      }
    }
  }
</script>
