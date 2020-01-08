<template>
  <main-layout menuActiveIndex="card">
    <h3>Card</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="A basic card containing a header, content and footer">
          <template slot="demo">
            <fish-card fluid>
              <div slot="header">Title</div>
              Kristy is an art director living in New York.<br/>
              Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
              Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
              pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
              <br/>
              Many people also have their own barometers for what makes a cute dog.
              <div slot="footer">
                <fish-button>GO-Back</fish-button>
              </div>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card fluid&gt;
  &lt;div slot=&quot;header&quot;&gt;Title&lt;/div&gt;
  Kristy is an art director living in New York.&lt;br/&gt;
  Veronika OssiIs a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love, pity others because of short of stature.
              There are even some people who can be stupid because of their huge body shapes.
  &lt;br/&gt;
  Many people also have their own barometers for what makes a cute dog.
  &lt;div slot=&quot;footer&quot;&gt;
    &lt;fish-button&gt;GO-Back&lt;/fish-button&gt;
  &lt;/div&gt;
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Content" desc="containing content">
          <template slot="demo">
            <fish-card>
              <h4>Elliot Fu</h4>
              <p>好友</p>
              Kristy is an art director living in New York.<br/>
              Veronika OssiIs a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
              Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
              pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
              <br/>
              Many people also have their own barometers for what makes a cute dog.
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;h4&gt;Elliot Fu&lt;/h4&gt;
  &lt;p&gt;好友&lt;/p&gt;
  Kristy is an art director living in New York.&lt;br/&gt;
  Veronika OssiIs a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love, pity others because of short of stature.
              There are even some people who can be stupid because of their huge body shapes.
  &lt;br/&gt;
  Many people also have their own barometers for what makes a cute dog.
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Color" desc="control border-color and header background-color">
          <template slot="demo">
            <fish-card color="blue">
              <div slot="header"><strong>Title Color</strong></div>
              Kristy is an art director living in New York.<br/>
              Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
              Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
              pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card color=&quot;blue&quot;&gt;
  &lt;div slot=&quot;header&quot;&gt;&lt;strong&gt;Title Color&lt;/strong&gt;&lt;/div&gt;
  Kristy is an art director living in New York.&lt;br/&gt;
  Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. &lt;br/&gt;
  Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
  pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Cards" desc="Cards">
          <template slot="demo">
            <fish-cards cols="two">
              <fish-card>
                <div slot="header"><strong>Title Color</strong></div>
                Kristy is an art director living in New York.<br/>
                Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
                Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
                pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
              </fish-card>
              <fish-card color="blue">
                <div slot="header"><strong>Title Color</strong></div>
                Kristy is an art director living in New York.<br/>
                Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
                Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
                pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
              </fish-card>
              <fish-card color="green" nopadding>
                <div slot="header"><strong>Title Color</strong></div>
                <fish-message attached="top">Message top</fish-message>
                Kristy is an art director living in New York.<br/>
                Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
                <fish-message attached>Message top</fish-message>
                <fish-message attached>Message top</fish-message>
                Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
                pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
                <fish-message attached="bottom">Message bottom</fish-message>
              </fish-card>
              <fish-card color="red">
                <div slot="header"><strong>Title Color</strong></div>
                Kristy is an art director living in New York.<br/>
                Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. <br/>
                Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
                pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
              </fish-card>
            </fish-cards>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-cards cols=&quot;two&quot;&gt;
  &lt;fish-card&gt;
    &lt;div slot=&quot;header&quot;&gt;&lt;strong&gt;Title Color&lt;/strong&gt;&lt;/div&gt;
    Kristy is an art director living in New York.&lt;br/&gt;
    Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. &lt;br/&gt;
    Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
    pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
  &lt;/fish-card&gt;
  &lt;fish-card color=&quot;blue&quot;&gt;
    &lt;div slot=&quot;header&quot;&gt;&lt;strong&gt;Title Color&lt;/strong&gt;&lt;/div&gt;
    Kristy is an art director living in New York.&lt;br/&gt;
    Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. &lt;br/&gt;
    Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
    pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
  &lt;/fish-card&gt;
  &lt;fish-card color=&quot;green&quot;&gt;
    &lt;div slot=&quot;header&quot;&gt;&lt;strong&gt;Title Color&lt;/strong&gt;&lt;/div&gt;
    Kristy is an art director living in New York.&lt;br/&gt;
    Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. &lt;br/&gt;
    Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
    pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
  &lt;/fish-card&gt;
  &lt;fish-card color=&quot;red&quot;&gt;
    &lt;div slot=&quot;header&quot;&gt;&lt;strong&gt;Title Color&lt;/strong&gt;&lt;/div&gt;
    Kristy is an art director living in New York.&lt;br/&gt;
    Veronika Ossi Is a living in New York WuMeiShi, her favorite cat, music and the party. &lt;br/&gt;
    Meng dogs have a variety of shapes and sizes. Some puppies look adorable stay because make love,
    pity others because of short of stature. There are even some people who can be stupid because of their huge body shapes.
  &lt;/fish-card&gt;
&lt;/fish-cards&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="6">
        <code-card title="Header-Image" desc="containing a header and image">
          <template slot="demo">
            <fish-card>
              <strong slot="header">Elliot requested permission</strong>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;strong slot=&quot;header&quot;&gt;Elliot requested permission&lt;/strong&gt;
  &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="Header-Content" desc="containing a header and content">
          <template slot="demo">
            <fish-card>
              <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
              Elliot requested permission to view your contact details
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card&gt;
  &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
  Elliot requested permission to view your contact details
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="Card tabs" desc="containing a tabs">
          <template slot="demo">
            <fish-card nopadding color="blue">
              <strong slot="header">Card Tabs</strong>
              <fish-tabs type="card" value="role" nav-center>
                <fish-tab-pane label="User" index="user">User<br/>xxxxxxx</fish-tab-pane>
                <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
                <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
              </fish-tabs>
              <fish-message attached>body......</fish-message>
              <fish-tabs type="card" value="role" nav-position="bottom" nav-center>
                <fish-tab-pane label="User" index="user">User<br/>xxxxxxx</fish-tab-pane>
                <fish-tab-pane label="Role" index="role">Role</fish-tab-pane>
                <fish-tab-pane label="Config" index="config">Config</fish-tab-pane>
              </fish-tabs>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;fish-card nopadding&gt;
  &lt;strong slot="header"&gt;Card Tabs&lt;/strong&gt;
  &lt;fish-tabs type="card" value="role" nav-center&gt;
    &lt;fish-tab-pane label="User" index="user"&gt;User&lt;br/&gt;xxxxxxx&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label="Role" index="role"&gt;Role&lt;/fish-tab-pane&gt;
    &lt;fish-tab-pane label="Config" index="config"&gt;Config&lt;/fish-tab-pane&gt;
  &lt;/fish-tabs&gt;
&lt;/fish-card&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="6">
        <code-card title="Header-Content" desc="containing a header and content">
          <template slot="demo">
            <fish-card nopadding>
              <strong slot="header">Card table</strong>
              <demo-table-base></demo-table-base>
            </fish-card>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml">&lt;template&gt;
&lt;fish-card&gt;
  &lt;strong slot=&quot;header&quot;&gt;Card table&lt;/strong&gt;
  &lt;fish-table :columns=&quot;columns&quot; :data=&quot;data&quot;&gt;&lt;/fish-table&gt;
&lt;/fish-card&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: &#x27;demo-table-base&#x27;,
    data () {
      return {
        columns: [{title: &#x27;Name&#x27;, key: &#x27;name&#x27;},
          {title: &#x27;age&#x27;, key: &#x27;age&#x27;},
          {title: &#x27;Address&#x27;, key: &#x27;address&#x27;},
          {title: &#x27;Operate&#x27;,
            key: &#x27;operate&#x27;,
            render: (h, record, column) =&gt; h(&#x27;a&#x27;, &#x27;编辑&#x27;)}],
        data: [
          {name: &#x27;yanbin.hu&#x27;, age: 32, address: &#x27;haidi part 1, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;},
          {name: &#x27;yanzu.wu&#x27;, age: 35, address: &#x27;haidi part 5, xihu, Hangzhou&#x27;}
        ]
      }
    }
  }
&lt;/script&gt;</code></pre>
          </template>
        </code-card>
      </fish-col>

    </fish-row>

    <h3>Card Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data1">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Card Slots</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data">
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
  import DemoTableBase from './DemoTableBase.vue'

  export default {
    components: {
      DemoTableBase,
      CodeCard,
      MainLayout
    },
    data () {
      return {
        columns: ['Attribute', 'Description', 'Type', 'Default'],
        data1: [
          ['color', 'optional: <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>olive</code>, <code>green</code>, <code>teal</code>, <code>blue</code>, <code>violet</code>, <code>purple</code>, <code>pink</code>, <code>brown</code>, <code>grey</code>, <code>black</code>', 'String', '-']
          ['nopadding', 'optional: true or fase', 'Boolean', 'false']
        ],
        data: [
          ['header', 'Card title(header)', 'String', '-'],
          ['image', 'Card image', 'String', '-'],
          ['footer', 'Card footer', 'String', '-']
        ]
      }
    }
  }
</script>
