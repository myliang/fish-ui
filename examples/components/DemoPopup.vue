<template>
  <main-layout menuActiveIndex="popup">
    <h3>Popup</h3>
    <code-card title="Basic" desc="Basic use case">
      <template slot="demo">
        <fish-button @click="popupHandler">Popup confirm</fish-button>
        <fish-button @click="popup2Handler">Popup confirm2</fish-button>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;div&gt;
    &lt;fish-button @click=&quot;popupHandler&quot;&gt;Popup confirm&lt;/fish-button&gt;
    &lt;fish-button @click=&quot;popup2Handler&quot;&gt;Popup confirm2&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      popupHandler (event) {
        this.$popup.confirm(event, &#x27;do you delete it？&#x27;, () =&gt; {
          console.log(&#x27;OK....&#x27;)
        })
      },
      popup2Handler (event) {
        this.$popup.confirm(event, &#x27;do you delete it？&#x27;, () =&gt; {
          console.log(&#x27;OK....&#x27;)
        }, &#x27;Confirm&#x27;, &#x27;Cancel&#x27;)
      }
    }
  }
&lt;/script&gt;
</code></pre>
    </code-card>

    <h3>Popup API</h3>
    <ul class="api">
      <li><code>popup.confirm: (event, html, okFunc, okText = 'Yes', cancelText = 'No')</code></li>
    </ul>

    <h3>Popup Attributes</h3>
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
          ['event', 'target event', 'Event', '-'],
          ['html', 'show html', 'String', '-'],
          ['okFunc', 'callback when click ok', 'Function()', '-'],
          ['okText', 'ok text', 'String', 'Yes'],
          ['cancelText', 'cancel text', 'String', 'No']
        ]
      }
    },
    methods: {
      popupHandler (event) {
        this.$popup.confirm(event, 'do you delete it？', () => {
          console.log('OK....')
        })
      },
      popup2Handler (event) {
        console.log(window.event, event)
        this.$popup.confirm(event, 'do you delete it？', () => {
          console.log('OK....')
        }, 'Confirm', 'Cancel')
      }
    }
  }
</script>
