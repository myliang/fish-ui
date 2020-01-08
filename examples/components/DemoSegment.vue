<template>
  <main-layout>
    <h3>Button</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Default" desc="A segment of content">
          <template slot="demo">
            <fish-segment>A segment can be used to reserve space for conditionally displayed content.<br/></fish-segment>
          </template>
          <template slot="codeHtml">
        <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Placeholder Segment" desc="A segment can be used to reserve space for conditionally displayed content">
          <template slot="demo">
            <fish-segment placeholder>
              <div style="font-size: 1.2em; font-weight: bold; margin-bottom: .8em;">No documents are listed for this customer</div>
              <fish-button type="primary">Add Document</fish-button>
            </fish-segment>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Vertical Segment" desc="A vertical segment formats content to be aligned as part of a vertical group">
          <template slot="demo">
            <fish-segment vertical>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</fish-segment>
            <fish-segment vertical>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</fish-segment>
            <fish-segment vertical>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</fish-segment>
          </template>
          <template slot="codeHtml">
        <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Disabled" desc="A segment may show its content is disabled">
          <template slot="demo">
            <fish-segment disabled>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</fish-segment>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Loading" desc="A segment may show its content is being loaded">
          <template slot="demo">
            <fish-segment loading style="height: 100px;">Loading</fish-segment>
          </template>
          <template slot="codeHtml">
          <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Attached" desc="A segment can be attached to other content on a page">
          <template slot="demo">
            <fish-segment attached="top">
              <p>This segment is on top</p>
            </fish-segment>
            <fish-segment attached>
              <p>This segment is attached on both sides</p>
            </fish-segment>
            <fish-segment attached="bottom">
              <p>This segment is on bottom</p>
            </fish-segment>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Colored" desc="A segment can be colored">
          <template slot="demo">
            <fish-segment color="red">Red......</fish-segment>
            <fish-segment color="blue">Blue......</fish-segment>
          </template>
          <template slot="codeHtml">
          <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Floated" desc="A segment can appear to the left or right of other content">
          <template slot="demo">
            <fish-segment floated="left">
              <p>This segment is on left</p>
            </fish-segment>
            <fish-segment floated="right">
              <p>This segment is on right</p>
            </fish-segment>
            <div style="clear: both;"></div>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="A basic segment has no special formatting">
          <template slot="demo">
            <fish-segment basic>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</fish-segment>
          </template>
          <template slot="codeHtml">
          <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Text Alignment" desc="A segment can have its text aligned to a side">
          <template slot="demo">
            <fish-segment aligned="left">
              <p>This segment is on left</p>
            </fish-segment>
            <fish-segment aligned="right">
              <p>This segment is on right</p>
            </fish-segment>
          </template>
          <template slot="codeHtml">
            <pre v-highlightjs><code class="xml"></code></pre>
          </template>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Button Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(v, ci) in item" :key="`${index}-${ci}`" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'
  import FishCol from '../../src/components/Col.vue'

  export default {
    components: {
      FishCol,
      CodeCard,
      MainLayout
    },
    data () {
      return {
        columns: ['Attribute', 'Description', 'Type', 'Default'],
        data: [
          ['loading', 'set the loading status of segment', 'Boolean', 'false'],
          ['disabled', 'set the disabled status of segment', 'Boolean', 'false'],
          ['attached', 'optional：<code>top</code>, <code>bottom</code>', 'string', '-'],
          ['color', 'optional: <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>olive</code>, <code>green</code>, <code>teal</code>, <code>blue</code>, <code>violet</code>, <code>purple</code>, <code>pink</code>, <code>brown</code>, <code>grey</code>, <code>black</code>', 'String', '-'],
          ['loading', 'set the loading status of button', 'Boolean', 'false']
        ]
      }
    },
    mounted () {
      // console.log(':::mounted.button')
    }
  }
</script>
