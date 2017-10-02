<template>
  <main-layout menuActiveIndex="carousel">
    <h3>Carousel 走马灯</h3>
    <fish-card>
      <fish-carousel>
        <fish-carousel-item v-for="index in 4" :key="index">
          <h3 class="carousel-xx" v-html="index"></h3>
        </fish-carousel-item>
      </fish-carousel>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-carousel&gt;
  &lt;fish-carousel-item v-for=&quot;index in 4&quot; :key=&quot;index&quot;&gt;
    &lt;h3 class=&quot;carousel-xx&quot; v-html=&quot;index&quot;&gt;&lt;/h3&gt;
  &lt;/fish-carousel-item&gt;
&lt;/fish-carousel&gt;</code></pre>
      </div>
    </fish-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {components: {
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
