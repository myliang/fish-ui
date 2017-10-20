<template>
  <main-layout menuActiveIndex="chart">
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="线图" desc="现状图展示">
          <template slot="demo">
            <demo-chart-line></demo-chart-line>
          </template>
        </code-card>
      </fish-col>
    </fish-row>
  </main-layout>
</template>
<script>
  import DemoChartLine from './DemoChartLine.vue'
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {components: {
    CodeCard,
    MainLayout,
    DemoChartLine}}
</script>