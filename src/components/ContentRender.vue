<script>
  export default {
    name: 'content-render',
    props: {
      params: { type: Array, default: () => [] },
      render: { type: Function }
    },
    render (h) {
      return this.render(h, ...this.params)
    }
  }
</script>