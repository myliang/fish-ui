<template>
  <main-layout menuActiveIndex="tabs">
    <h3>Tabs</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-tabs v-model="indexValue" :maxHeight="`100px`" nav-center>
              <fish-tab-pane :label="`User${cnt}`" index="user">User
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
                xxxxxxx<br/>
              </fish-tab-pane>
              <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
              <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
            </fish-tabs>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tabs value=&quot;role&quot;&gt;
  &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
&lt;/fish-tabs&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Nav in bottom" desc="Nav in bottom">
          <template slot="demo">
            <fish-tabs value="role" navPosition="bottom">
              <fish-tab-pane label="User" index="user">User</fish-tab-pane>
              <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
              <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
            </fish-tabs>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tabs value=&quot;role&quot; navPosition=&quot;bottom&quot;&gt;
  &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
  &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
&lt;/fish-tabs&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Card" desc="Card tabs">
          <template slot="demo">
            <fish-tabs type="card" value="user" padding=".75em" @tab-change="tabChangeHandler">
              <fish-tab-pane label="User" index="user">
                <fish-message type="warning" attached="top">loading......error.....</fish-message>
              </fish-tab-pane>
              <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
              <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
            </fish-tabs>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tabs type=&quot;card&quot; value=&quot;user&quot; @tab-change=&quot;tabChangeHandler&quot;&gt;
    &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      tabChangeHandler (index) {
        console.log(&#x27;tab.index: &#x27;, index)
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
          <code-card title="Card, Nav in bottom" desc="Card, Nav in bottom">
            <template slot="demo">
              <fish-tabs type="card" value="user" padding="0.75em" navPosition="bottom">
                <fish-tab-pane label="User" index="user">
                  <fish-message type="warning" attached="top">loading......error.....</fish-message>
                </fish-tab-pane>
                <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
                <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
              </fish-tabs>
            </template>
            <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tabs type=&quot;card&quot; value=&quot;user&quot; navPosition=&quot;bottom&quot;&gt;
    &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      tabChangeHandler (index) {
        console.log(&#x27;tab.index: &#x27;, index)
      }
    }
  }
&lt;/script&gt;
</code></pre>
          </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Text" desc="text tabs">
          <template slot="demo">
            <fish-tabs type="text" value="user" padding="0" @tab-change="tabChangeHandler">
              <fish-tab-pane label="User" index="user">User</fish-tab-pane>
              <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
              <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
            </fish-tabs>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tabs type=&quot;text&quot; value=&quot;user&quot; @tab-change=&quot;tabChangeHandler&quot;&gt;
    &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      tabChangeHandler (index) {
        console.log(&#x27;tab.index: &#x27;, index)
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
          <code-card title="button" desc="button tabs">
            <template slot="demo">
              <fish-tabs type="button" value="user" padding="0" navPosition="bottom">
                <fish-tab-pane label="User" index="user">User</fish-tab-pane>
                <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
                <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
              </fish-tabs>
            </template>
            <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tabs type=&quot;text&quot; value=&quot;user&quot; navPosition=&quot;bottom&quot;&gt;
    &lt;fish-tab-pane label=&quot;User&quot; index=&quot;user&quot;&gt;User&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Role&quot; index=&quot;role&quot;&gt;Role&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label=&quot;Config&quot; index=&quot;config&quot;&gt;Config&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      tabChangeHandler (index) {
        console.log(&#x27;tab.index: &#x27;, index)
      }
    }
  }
&lt;/script&gt;
</code></pre>
          </code-card>
      </fish-col>
    </fish-row>



    <h3>Tabs Attributes</h3>
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

    <h3>Tabs Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in event_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>TabPanel Attributes</h3>
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

  export default {
    components: {
      CodeCard,
      MainLayout
    },
    data () {
      return {
        indexValue: 'role',
        cnt: 1,
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['tab-change(index)', 'callback when tab changing', 'TabPanel.index <code>index</code>']
        ],
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['value', 'value', 'String, Number', '-'],
          ['type', 'optional：<code>card</code> <code>text</code> or empty', 'String', '-'],
          ['padding', 'set content padding style', 'String', '-']
        ],
        api_data2: [
          ['label', 'tab label', 'String', '-'],
          ['index', 'unique key of tab', 'String', '-']
        ]
      }
    },
    mounted () {
      setTimeout(() => this.cnt = 100, 5000)
    },
    methods: {
      tabChangeHandler (index) {
        console.log('tab.index: ', index)
      }
    }
  }
</script>
