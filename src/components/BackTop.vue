<template>
  <div class="vui back-top" @click="clickHandler($event)" v-if="visible">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>
<script>
  export default {
    name: 'vui-back-top',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      clickHandler (event) {
        document.body.scrollTop = 0
        this.$emit('click', event)
      }
    },
    mounted () {
      window.onscroll = () => {
        this.visible = document.body.scrollTop > 0
      }
    }
  }
</script>
