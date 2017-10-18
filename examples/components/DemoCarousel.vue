<template>
  <main-layout menuActiveIndex="carousel">
    <h3>Carousel 走马灯</h3>
    <code-card title="基本用法" desc="基本用法">
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
    height: 300px;
    line-height: 300px;
    text-align: center;
    vertical-align: middle;
    background: #506b9e;
    color: #fff;
    font-size: 2rem;
  }
&lt;/style&gt;

</code></pre>
    </code-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {components: {
    CodeCard,
    MainLayout}}
</script>
<style>
  .carousel-xx {
    height: 300px;
    line-height: 300px;
    text-align: center;
    vertical-align: middle;
    background: #506b9e;
    color: #fff;
    font-size: 2rem;
  }
</style>
