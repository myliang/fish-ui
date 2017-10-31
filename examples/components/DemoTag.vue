<template>
  <main-layout menuActiveIndex="tag">
    <h3>Tag</h3>
    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-tag index="1">Tag1</fish-tag>
            <fish-tag index="2">TAG</fish-tag>
            <fish-tag index="3" @close="{}">close</fish-tag>
            <fish-tag index="3" color="primary">close</fish-tag>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tag index=&quot;1&quot;&gt;Tag1&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;2&quot;&gt;TAG&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;3&quot; @close=&quot;{}&quot;&gt;close&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;3&quot; color=&quot;primary&quot;&gt;close&lt;/fish-tag&gt;</code></pre>
        </code-card>
      </fish-col>

      <fish-col span="8">
        <code-card title="Add, Remove" desc="Add, Remove Tag">
          <template slot="demo">
            <fish-tags :items="tags" edited @close="groupCloseHandler" @add="addCheckHandler"></fish-tags>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tags :items=&quot;tags&quot; edited @close=&quot;groupCloseHandler&quot; @add=&quot;addCheckHandler&quot;&gt;&lt;/fish-tags&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {tags: ['tag1', 'tag2', 'tag3']} },
    methods: {
      addCheckHandler (v) {
        this.tags.push(v)
      },
      groupCloseHandler (index) {
        this.tags.splice(index, 1)
      }
    }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>

      <fish-col span="8">
        <code-card title="Checkboxs" desc="checkbox tags">
          <template slot="demo">
            <fish-tags :items="tags1" @click="checkClickHandler"></fish-tags>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-tags :items=&quot;tags1&quot; @click=&quot;checkClickHandler&quot;&gt;&lt;/fish-tags&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () { return {tags1: [[true, &#x27;tag1-radio&#x27;], [false, &#x27;tag2-radio&#x27;], [false, &#x27;tag3-radio&#x27;]]} },
    methods: {
      checkClickHandler (event, index, checked) {
        this.tags1.splice(index, 1, [checked, this.tags1[index][1]])
      }
    }
  }
&lt;/script&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <code-card title="Attached" desc="close to special position">
      <template slot="demo">
        <fish-row gutter="1">
          <fish-col span="8">
            <fish-card>
              <fish-tag index="top" attached="top">Top</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
          <fish-col span="8">
            <fish-card>
              <fish-tag index="bottom" attached="bottom">Bottom</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
          <fish-col span="8">
            <fish-card>
              <fish-tag index="top left" attached="top left">Top Left</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
        </fish-row>
        <fish-row gutter="1">
          <fish-col span="8">
            <fish-card>
              <fish-tag index="top right" attached="top right">Top Right</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
          <fish-col span="8">
            <fish-card>
              <fish-tag index="bottom left" attached="bottom left">Bottom Left</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
          <fish-col span="8">
            <fish-card>
              <fish-tag index="bottom right" attached="bottom right">Bottom Right</fish-tag>
              <div style="margin-top: 30px;">
                <img src="../static/paragraph.png" style="width: 100%;"/>
              </div>
            </fish-card>
          </fish-col>
        </fish-row>
      </template>
      <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tag index=&quot;top&quot; attached=&quot;top&quot;&gt;Top&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;bottom&quot; attached=&quot;bottom&quot;&gt;Bottom&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;top left&quot; attached=&quot;top left&quot;&gt;Top Left&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;top right&quot; attached=&quot;top right&quot;&gt;Top Right&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;bottom left&quot; attached=&quot;bottom left&quot;&gt;Bottom Left&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;bottom right&quot; attached=&quot;bottom right&quot;&gt;Bottom Right&lt;/fish-tag&gt;</code></pre>
    </code-card>

    <fish-row gutter="1">
      <fish-col span="8">
        <code-card title="Color" desc="Color tag">
          <template slot="demo">
            <fish-tag :index="color" :color="color" :key="color" v-for="color in ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']" v-html="color"></fish-tag>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tag :index=&quot;color&quot; :color=&quot;color&quot; :key=&quot;color&quot;
            v-for=&quot;color in [&#x27;red&#x27;, &#x27;orange&#x27;, &#x27;yellow&#x27;, &#x27;olive&#x27;, &#x27;green&#x27;, &#x27;teal&#x27;, &#x27;blue&#x27;, &#x27;violet&#x27;, &#x27;purple&#x27;, &#x27;pink&#x27;, &#x27;brown&#x27;, &#x27;grey&#x27;, &#x27;black&#x27;]&quot; v-html=&quot;color&quot;&gt;&lt;/fish-tag&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Floating" desc="Floating tag">
          <template slot="demo">
            <fish-button style="position: relative;">
              myliang
              <fish-tag index="floating" floating color="negative">20</fish-tag>
            </fish-button>
            <fish-button style="position: relative;">
              yuliang
              <fish-tag index="floating" floating color="negative" shape="circle">10</fish-tag>
            </fish-button>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-button style=&quot;position: relative;&quot;&gt;
  myliang
  &lt;fish-tag index=&quot;floating&quot; floating color=&quot;negative&quot;&gt;20&lt;/fish-tag&gt;
&lt;/fish-button&gt;
&lt;fish-button style=&quot;position: relative;&quot;&gt;
  yuliang
  &lt;fish-tag index=&quot;floating&quot; floating color=&quot;negative&quot; shape=&quot;circle&quot;&gt;10&lt;/fish-tag&gt;
&lt;/fish-button&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="8">
        <code-card title="Circle" desc="optional：<code>circle</code>, <code>square</code>">
          <template slot="demo">
            <fish-tag index="circle" shape="circle">2</fish-tag>
            <fish-tag index="circle" shape="circle" color="primary">4</fish-tag>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-tag index=&quot;circle&quot; shape=&quot;circle&quot;&gt;2&lt;/fish-tag&gt;
&lt;fish-tag index=&quot;circle&quot; shape=&quot;circle&quot; color=&quot;primary&quot;&gt;4&lt;/fish-tag&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>


    <h3>Tags Attributes</h3>
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

    <h3>Tags Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in event_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Tag Attributes</h3>
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
          ['size', 'optional: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['edited', 'whether it is edited or not', 'Boolean', 'false'],
          ['items', 'tag items', 'Array', '-']
        ],
        api_data2: [
          ['icon', 'fontawesome icon font', 'String', '-'],
          ['index', 'unique key of the tag', 'string', '-'],
          ['floating', 'whether it is floating or not', 'Boolean', 'false'],
          ['shape', 'optional：<code>circle</code>, <code>square</code>', 'string', 'square'],
          ['attached', 'optional：<code>top</code>, <code>top left</code>, <code>top right</code>, <code>bottom</code>, <code>bottom left</code>, <code>bottom right</code>', 'string', '-'],
          ['size', 'optional: <code>mini</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>big</code>, <code>huge</code>, <code>massive</code>', 'String', '-'],
          ['color', 'optional: <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>olive</code>, <code>green</code>, <code>teal</code>, <code>blue</code>, <code>violet</code>, <code>purple</code>, <code>pink</code>, <code>brown</code>, <code>grey</code>, <code>black</code>', 'String', '-']
        ],
        event_columns: ['Event', 'Description', 'Parameters'],
        event_data: [
          ['add (v)', 'callback when tag is added', 'v(input text)'],
          ['close (index)', 'callback when tag is removed', 'index'],
          ['click (index, checked)', 'callback when tag is clicked', 'index, checked']
        ],
        tags1: [[true, 'tag1-radio'], [false, 'tag2-radio'], [false, 'tag3-radio']],
        tags: ['tag1', 'tag2', 'tag3']
      }
    },
    methods: {
      checkClickHandler (index, checked) {
        this.tags1.splice(index, 1, [checked, this.tags1[index][1]])
      },
      addCheckHandler (v) {
        this.tags.push(v)
      },
      groupCloseHandler (index) {
        this.tags.splice(index, 1)
      }
    }
  }
</script>
