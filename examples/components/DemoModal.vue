<template>
  <main-layout menuActiveIndex="modal">
    <h3>Modal</h3>

    <code-card title="Basic" desc="Basic use case">
      <template slot="demo">
        <fish-button @click="showModalFunc">show Modal</fish-button>
        <fish-button @click="showModalFunc2">trigger Event Modal</fish-button>
        <fish-button @click="swapAttached('top')">attached-top</fish-button>
        <fish-button @click="swapAttached('bottom')">attached-bottom</fish-button>
        <fish-button @click="swapAttached('left')">attached-left</fish-button>
        <fish-button @click="swapAttached('right')">attached-right</fish-button>
        <fish-modal title="Welcome.." :attached="attached" :visible.sync="showModal" width="80%" :height="500" :trigger-event="triggerEvent">
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
    &lt;fish-modal title=&quot;Welcome..&quot; :visible.sync=&quot;showModal&quot;&gt;
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
        attached: 'center',
        triggerEvent: null,
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['title', 'title', 'String', '-'],
          ['padding', 'content padding', 'String', '1em'],
          ['attached', 'options: center, left, top, right, bottom', 'String', 'center'],
          ['marginTop', 'modal margin top size', 'String', '100px'],
          ['width', 'modal width', 'Number', '850'],
          ['visible', 'whether it is visible or not', 'Boolean', 'false']
        ]
      }
    },
    methods: {
      swapAttached (v) {
        this.attached = v;
        this.showModal = true
      },
      showModalFunc (evt) {
        this.triggerEvent = null
        this.showModal = true
      },
      showModalFunc2 (evt) {
        this.triggerEvent = evt
        this.showModal = true
      }
    }
  }
</script>
