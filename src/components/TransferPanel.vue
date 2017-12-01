<template>
  <div class="panel" :style="{'width': `${width}px`}">
    <div class="header">
      <fish-checkbox index="all" @click="allCheckboxClickHandler" ref="checkbox" :disabled="allDisabled">{{ titleView }}</fish-checkbox>
    </div>
    <div class="body" :style="{'height': `${height}px`}">
      <template v-if="data && data.length > 0">
        <div :class="[`item`, {'disabled': item.disabled}]" v-for="item in data" :key="item.key">
          <fish-checkbox :disabled="item.disabled" :index="item.key" @click="checkboxClickHandler" ref="checkboxes">{{ item.label }}</fish-checkbox>
        </div>
      </template>
      <div class="item" v-else>{{ noDataText }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-transfer-panel',
    props: {
      title: { type: String, default: 'item' },
      width: { type: Number, default: 200 },
      height: { type: Number, default: 200 },
      data: { type: Array, default: () => [] }, // [{key: '', label: '', disabled: false}]
      noDataText: { type: String, default: 'no data' }
    },
    data () {
      return {
        allDisabled: false,
        selectedKeys: []
      }
    },
    watch: {
      data (nVal, oVal) {
        // console.log(':::nVal:', nVal, ', oVal:', oVal)
        if (nVal.length !== oVal.length) {
          this.selectedKeys = []
          if (nVal.length === 0 || nVal.every((v) => v.disabled)) {
            this.$refs.checkbox.active = false
            this.allDisabled = true
          } else {
            this.allDisabled = false
          }
        }
      }
    },
    computed: {
      titleView () {
        let txt = ''
        if (this.selectedKeys.length > 0) {
          txt += this.selectedKeys.length + '/'
        }
        return txt + this.data.length + ' ' + this.title
      }
    },
    methods: {
      allCheckboxClickHandler (evt) {
        let _cb = this.$refs.checkbox
        this.$refs.checkboxes.forEach((cb) => {
          if (!cb.disabled) cb.active = _cb.active
        })
        let keys = this.$refs.checkboxes.filter((cb) => { return cb.active }).map((cb) => cb.index)
        this.emitChange(keys)
      },
      checkboxClickHandler (evt) {
        let keys = this.$refs.checkboxes.filter((cb) => { return cb.active }).map((cb) => cb.index)
        if (keys.length === this.$refs.checkboxes.length && !this.$refs.checkbox.active) this.$refs.checkbox.active = true
        else this.$refs.checkbox.active = false
        this.emitChange(keys)
      },
      emitChange (keys) {
        this.selectedKeys = keys
        this.$emit('change', keys)
      }
    }
  }
</script>