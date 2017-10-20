<template>
  <svg height="100%" width="100%" class="fish chart line" ref="_root">
    <g class="grids"></g>
    <g></g>
    <g class="labels">
      <foreignObject v-for="label in labels" :key="label">
        <span class="label">{{ label }}</span>
      </foreignObject>
    </g>
  </svg>
</template>
<script>
  export default {
    name: 'fish-chart-line',
    props: {
      labels: { type: Array, required: true },
      data: { type: Array, required: true }
    },
    data () {
      return {}
    },
    mounted () {
      // 获得当前的宽度和高度
      const { clientHeight, clientWidth } = this.$refs._root
      console.log('clientHeight:', clientHeight, ', offsetWidth:', clientWidth)
    }
  }
</script>