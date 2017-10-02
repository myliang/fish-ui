<template>
  <main-layout menuActiveIndex="carousel">
    <h3>Carousel 走马灯</h3>
    <vui-card>
      <vui-carousel>
        <vui-carousel-item v-for="index in 4" :key="index">
          <h3 class="carousel-xx" v-html="index"></h3>
        </vui-carousel-item>
      </vui-carousel>
      <div slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-carousel&gt;
  &lt;vui-carousel-item v-for=&quot;index in 4&quot; :key=&quot;index&quot;&gt;
    &lt;h3 class=&quot;carousel-xx&quot; v-html=&quot;index&quot;&gt;&lt;/h3&gt;
  &lt;/vui-carousel-item&gt;
&lt;/vui-carousel&gt;</code></pre>
      </div>
    </vui-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import VuiCard from '../src/components/Card.vue'
  import VuiCarousel from '../src/components/Carousel.vue'
  import VuiCarouselItem from '../src/components/CarouselItem.vue'

  export default {components: {
    VuiCarouselItem,
    VuiCarousel,
    VuiCard,
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
