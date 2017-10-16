<template>
  <main-layout menuActiveIndex="tree-select">
    <h3>Tree Select 树选框</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="单选树" desc="最简单的用法">
          <demo-tree-select-single slot="demo"></demo-tree-select-single>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="多选树" desc="使用勾选框实现多选功能">
          <demo-tree-select-multiple slot="demo"></demo-tree-select-multiple>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>Tree Select Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>Tree Select Events</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in event_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in event_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'
  import DemoTreeSelectSingle from './DemoTreeSelectSingle.vue'
  import DemoTreeSelectMultiple from './DemoTreeSelectMultiple.vue'

  export default {
    components: {
      DemoTreeSelectMultiple,
      DemoTreeSelectSingle,
      CodeCard,
      MainLayout},
    data () {
      return {
        api_columns: ['属性', '说明', '类型', '默认值'],
        api_data: [
          ['value', '值, v-model绑定', 'Array', '[]'],
          ['data', '展示使用的数据，必填。<strong style="color: red;">其中key的规则是有层级关系的，比如本级00,那么自己就是00-11..., 通过key可以知道上级的key</strong>', 'Array', ''],
          ['hint', '值为空时的提示信息', 'String', 'Please'],
          ['multiple', '是否为多选模式', 'Boolean', 'false'],
          ['expand', '是否自动展开', 'Boolean', 'false'],
          ['delimiter', 'data中key的分割符号', 'String', '-']
        ],
        event_columns: ['事件名称', '说明', '回调参数'],
        event_data: [
          ['change(keys)', '当选中节点的时候触发', '选中的keys']
        ]
      }
    }
  }
</script>