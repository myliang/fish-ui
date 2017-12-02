<template>
  <div class="fish transfer">
    <fish-transfer-panel
        :title="titles[0]"
        :data="data.filter((i) => !value.includes(i.key))"
        :width="width"
        :height="height"
        :noDataText="noDataText"
        @change="leftChangeHandler"
    ></fish-transfer-panel>
    <div class="operation">
      <div :class="['fish button', {'disabled': rightSelectedKeys.length <= 0}]" v-html="leftRender()" @click="toLeftHandler"></div>
      <div :class="['fish button', {'disabled': leftSelectedKeys.length <= 0}]" v-html="rightRender()" @click="toRightHandler"></div>
    </div>
    <fish-transfer-panel
        :title="titles[1]"
        :data="value.map((i) => dataMap[i])"
        :width="width"
        :height="height"
        :noDataText="noDataText"
        @change="rightChangeHandler"
        @reorder="emitInput"
        :draggable="true"
    ></fish-transfer-panel>
  </div>
</template>
<script>
  import FishCheckbox from './Checkbox.vue'
  import FishTransferPanel from './TransferPanel.vue'

  export default {
    components: {
      FishTransferPanel,
      FishCheckbox},
    name: 'fish-transfer',
    props: {
      width: { type: Number, default: 200 },
      height: { type: Number, default: 200 },
      value: { type: Array, default: () => [] },
      titles: { type: Array, default: () => ['items', 'items'] },
      data: { type: Array, default: () => [] }, // [{key: '', label: '', disabled: false}]
      noDataText: { type: String, default: 'no data' },
      leftRender: { type: Function, default: () => '<i class="fa fa-chevron-left" style="margin-right:0; width: auto;"></i>' },
      rightRender: { type: Function, default: () => '<i class="fa fa-chevron-right" style="margin-right:0; width: auto;"></i>' }
    },
    data () {
      return {
        leftSelectedKeys: [],
        rightSelectedKeys: []
      }
    },
    computed: {
      dataMap () {
        let dataMap = {}
        this.data.forEach((item) => { dataMap[item.key] = item })
        return dataMap
      }
    },
    methods: {
      rightChangeHandler (keys) {
        this.rightSelectedKeys = keys
      },
      leftChangeHandler (keys) {
        this.leftSelectedKeys = keys
      },
      toRightHandler () {
        this.emitInput(this.leftSelectedKeys.concat(this.value))
      },
      toLeftHandler () {
        let keySet = new Set(this.rightSelectedKeys)
        this.emitInput(this.value.filter((v) => !keySet.has(v)))
      },
      emitInput (keys) {
        this.$emit('input', keys)
        this.$emit('change', keys)
        this.leftSelectedKeys = []
        this.rightSelectedKeys = []
      }
    }
  }
</script>