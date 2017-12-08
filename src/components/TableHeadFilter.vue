<template>
  <div class="filters" @click.stop="clickHandler" ref="_root" v-clickoutside="awayHandler">
    <i class="fa fa-angle-down" style="margin-left: 8px;"></i>
    <div class="content" ref="_content">
      <fish-menu v-show="visible" @click="menusClickHandler" defaultActive="_all">
        <fish-option :index="item.value" :content="item.label" :key="index" ref="options"
                    v-for="(item, index) in [{label: 'All',value: '_all'}].concat(items)"></fish-option>
      </fish-menu>
    </div>
  </div>
</template>
<script>
  import clickoutside from '../directives/clickoutside'
  import fishMenu from './Menu'
  import fishOption from './Option.vue'

  export default {
    name: 'fish-table-head-filter',
    components: {
      fishOption,
      fishMenu
    },
    directives: { clickoutside },
    props: {
      index: { type: [String, Number], required: true },
      // title: { type: String, required: true },
      items: { type: Array, required: true }
    },
    data () {
      return {
        visible: false
        // activeTitle: null
      }
    },
    computed: {
      values () {
        return this.$refs.options.filter((option) => {
          return option.active && option.index !== '_all'
        }).map((option) => { return option.index })
      }
    },
    updated () {
      const { _root, _content } = this.$refs
      const p = _root.offsetParent
      _content.style.left = p.offsetLeft + 'px'
      _content.style.top = p.offsetHeight + 'px'
    },
    methods: {
      clickHandler () {
        this.visible = !this.visible
      },
      awayHandler () {
        this.visible = false
      },
      menusClickHandler (evt) {
        // const targetVue = evt.target.__vue__
        // this.activeTitle = targetVue.index === '_all' ? this.title : targetVue.content
        this.visible = false
        this.$emit('change', evt)
      }
    }
  }
</script>
