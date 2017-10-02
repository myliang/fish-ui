<template>
  <main-layout menuActiveIndex="modal">
    <h3>Modal 对话框</h3>
    <vui-card>
      <vui-button @click="showModalFunc">show Modal</vui-button>
      <vui-modal title="什么鬼吗？欢迎!" :visible.sync="showModal">
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
      </vui-modal>
      <div slot="footer">
      <pre v-highlightjs><code class="html">&lt;vui-modal title=&quot;什么鬼吗？欢迎!&quot; :visible.sync=&quot;showModal&quot;&gt;
  &lt;vui-form&gt;
    &lt;vui-fields&gt;
      &lt;vui-field label=&quot;First Name&quot; span=&quot;eight&quot;&gt;
        &lt;vui-input&gt;&lt;/vui-input&gt;
      &lt;/vui-field&gt;
      &lt;vui-field label=&quot;Last Name&quot; span=&quot;eight&quot;&gt;
        &lt;vui-input&gt;&lt;/vui-input&gt;
      &lt;/vui-field&gt;
    &lt;/vui-fields&gt;
    &lt;vui-field label=&quot;Username&quot; inline&gt;
      &lt;vui-input&gt;&lt;/vui-input&gt;
    &lt;/vui-field&gt;
    &lt;vui-field label=&quot;Password&quot;&gt;
      &lt;vui-input type=&quot;password&quot;&gt;&lt;/vui-input&gt;
    &lt;/vui-field&gt;
    &lt;vui-field&gt;
      &lt;vui-checkbox index=&quot;0&quot;&gt;I agree to the terms and conditions&lt;/vui-checkbox&gt;
    &lt;/vui-field&gt;
    &lt;vui-button type=&quot;primary&quot; @click=&quot;showModal = false&quot;&gt;Submit&lt;/vui-button&gt;
  &lt;/vui-form&gt;
&lt;/vui-modal&gt;</code></pre><br/>
        <pre v-highlightjs><code class="javascript">showModalFunc () {
  this.showModal = true
}</code></pre>
      </div>
    </vui-card>

    <h3>Modal Attributes</h3>
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
  import VuiModal from '../src/components/Modal.vue'
  import VuiForm from '../src/components/Form.vue'
  import VuiFields from '../src/components/Fields.vue'
  import VuiCheckboxes from '../src/components/Checkboxes.vue'
  import VuiCheckbox from '../src/components/Checkbox.vue'
  import VuiButton from '../src/components/Button.vue'
  import VuiField from '../src/components/Field.vue'
  import VuiInput from '../src/components/Input.vue'
  import VuiCard from '../src/components/Card.vue'

  export default {components: {
    VuiCard,
    VuiInput,
    VuiField,
    VuiButton,
    VuiCheckbox,
    VuiCheckboxes,
    VuiFields,
    VuiForm,
    VuiModal,
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
