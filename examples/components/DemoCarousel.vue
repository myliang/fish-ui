<template>
  <main-layout menuActiveIndex="carousel">
    <h3>Carousel</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic">
          <template slot="demo">
            <fish-carousel>
              <fish-carousel-item v-for="index in 4" :key="index">
                <h3 class="carousel-xx" v-html="index"></h3>
              </fish-carousel-item>
            </fish-carousel>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-carousel&gt;
    &lt;fish-carousel-item v-for=&quot;index in 4&quot; :key=&quot;index&quot;&gt;
      &lt;h3 class=&quot;carousel-xx&quot; v-html=&quot;index&quot;&gt;&lt;/h3&gt;
    &lt;/fish-carousel-item&gt;
  &lt;/fish-carousel&gt;
&lt;/template&gt;
&lt;style&gt;
  .carousel-xx {
    height: 200px;
    line-height: 200px;
    text-align: center;
    vertical-align: middle;
    background: #506b9e;
    color: #fff;
    font-size: 2rem;
  }
&lt;/style&gt;

</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Auto play" desc="Timing of scrolling to the next card/picture.">
          <template slot="demo">
            <fish-carousel autoPlay dot-style="background-color: red;">
              <fish-carousel-item v-for="index in 4" :key="index">
                <h3 class="carousel-xx" v-html="index"></h3>
              </fish-carousel-item>
            </fish-carousel>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;template&gt;
  &lt;fish-carousel autoPlay&gt;
    &lt;fish-carousel-item v-for=&quot;index in 4&quot; :key=&quot;index&quot;&gt;
      &lt;h3 class=&quot;carousel-xx&quot; v-html=&quot;index&quot;&gt;&lt;/h3&gt;
    &lt;/fish-carousel-item&gt;
  &lt;/fish-carousel&gt;
&lt;/template&gt;
&lt;style&gt;
  .carousel-xx {
    height: 200px;
    line-height: 200px;
    text-align: center;
    vertical-align: middle;
    background: #506b9e;
    color: #fff;
    font-size: 2rem;
  }
&lt;/style&gt;

</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Carousel Attributes</h3>
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
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['dotStyle', 'dot style', 'stirng', ''],
          ['autoPlay', 'Whether to scroll automatically', 'Boolean', 'false']
        ]
      }
    }
  }
</script>
<style>
  .carousel-xx {
    height: 200px;
    line-height: 200px;
    text-align: center;
    vertical-align: middle;
    background: #506b9e;
    color: #fff;
    font-size: 2rem;
  }
</style>
