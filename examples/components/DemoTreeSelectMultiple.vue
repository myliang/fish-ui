<template>
  <div>
    <fish-tree-select :data="data1" v-model="v" multiple @change="changeHandler"></fish-tree-select>
    <fish-tree-select :data="data" v-model="v1" multiple @change="changeHandler"></fish-tree-select>
  </div>
</template>
<script>
  export default {
    name: 'demo-tree-select-multiple',
    data () {
      return {
        v: ['ShortPlan', 'Project-read'],
        v1: [],
        data1: [{"key":"ShortPlanCompletion","title":"ShortPlanCompletion","children":[{"key":"ShortPlanCompletion-read","title":"ShortPlanCompletion-read"},{"key":"ShortPlanCompletion-create","title":"ShortPlanCompletion-create"},{"key":"ShortPlanCompletion-update","title":"ShortPlanCompletion-update"},{"key":"ShortPlanCompletion-destroy","title":"ShortPlanCompletion-destroy"}]},{"key":"User","title":"User","children":[{"key":"User-read","title":"User-read"},{"key":"User-create","title":"User-create"},{"key":"User-update","title":"User-update"},{"key":"User-destroy","title":"User-destroy"}]},{"key":"SystemProfile","title":"SystemProfile","children":[{"key":"SystemProfile-read","title":"SystemProfile-read"},{"key":"SystemProfile-create","title":"SystemProfile-create"},{"key":"SystemProfile-update","title":"SystemProfile-update"},{"key":"SystemProfile-destroy","title":"SystemProfile-destroy"}]},{"key":"ShortPlan","title":"ShortPlan","children":[{"key":"ShortPlan-read","title":"ShortPlan-read"},{"key":"ShortPlan-create","title":"ShortPlan-create"},{"key":"ShortPlan-update","title":"ShortPlan-update"},{"key":"ShortPlan-destroy","title":"ShortPlan-destroy"}]},{"key":"Role","title":"Role","children":[{"key":"Role-read","title":"Role-read"},{"key":"Role-create","title":"Role-create"},{"key":"Role-update","title":"Role-update"},{"key":"Role-destroy","title":"Role-destroy"}]},{"key":"Project","title":"Project","children":[{"key":"Project-read","title":"Project-read"},{"key":"Project-create","title":"Project-create"},{"key":"Project-update","title":"Project-update"},{"key":"Project-destroy","title":"Project-destroy"}]},{"key":"Department","title":"Department","children":[{"key":"Department-read","title":"Department-read"},{"key":"Department-create","title":"Department-create"},{"key":"Department-update","title":"Department-update"},{"key":"Department-destroy","title":"Department-destroy"}]},{"key":"Column","title":"Column","children":[{"key":"Column-read","title":"Column-read"},{"key":"Column-create","title":"Column-create"},{"key":"Column-update","title":"Column-update"},{"key":"Column-destroy","title":"Column-destroy"}]},{"key":"Validate","title":"Validate","children":[{"key":"Validate-read","title":"Validate-read"},{"key":"Validate-create","title":"Validate-create"},{"key":"Validate-update","title":"Validate-update"},{"key":"Validate-destroy","title":"Validate-destroy"}]},{"key":"LongPlanGroup","title":"LongPlanGroup","children":[{"key":"LongPlanGroup-read","title":"LongPlanGroup-read"},{"key":"LongPlanGroup-create","title":"LongPlanGroup-create"},{"key":"LongPlanGroup-update","title":"LongPlanGroup-update"},{"key":"LongPlanGroup-destroy","title":"LongPlanGroup-destroy"}]},{"key":"FundType","title":"FundType","children":[{"key":"FundType-read","title":"FundType-read"},{"key":"FundType-create","title":"FundType-create"},{"key":"FundType-update","title":"FundType-update"},{"key":"FundType-destroy","title":"FundType-destroy"}]},{"key":"LongPlan","title":"LongPlan","children":[{"key":"LongPlan-read","title":"LongPlan-read"},{"key":"LongPlan-create","title":"LongPlan-create"},{"key":"LongPlan-update","title":"LongPlan-update"},{"key":"LongPlan-destroy","title":"LongPlan-destroy"}]},{"key":"ProjectType","title":"ProjectType","children":[{"key":"ProjectType-read","title":"ProjectType-read"},{"key":"ProjectType-create","title":"ProjectType-create"},{"key":"ProjectType-update","title":"ProjectType-update"},{"key":"ProjectType-destroy","title":"ProjectType-destroy"}]},{"key":"Region","title":"Region","children":[{"key":"Region-read","title":"Region-read"},{"key":"Region-create","title":"Region-create"},{"key":"Region-update","title":"Region-update"},{"key":"Region-destroy","title":"Region-destroy"}]},{"key":"ShortPlanFile","title":"ShortPlanFile","children":[{"key":"ShortPlanFile-read","title":"ShortPlanFile-read"},{"key":"ShortPlanFile-create","title":"ShortPlanFile-create"},{"key":"ShortPlanFile-update","title":"ShortPlanFile-update"},{"key":"ShortPlanFile-destroy","title":"ShortPlanFile-destroy"}]}],
        data: [{
          title: '0-0',
          key: '0-0',
          children: [{
            title: '0-0-0',
            key: '0-0-0',
            children: [
              { title: '0-0-0-0', key: '0-0-0-0' },
              { title: '0-0-0-1', key: '0-0-0-1' },
              { title: '0-0-0-2', key: '0-0-0-2' }
            ]
          }, {
            title: '0-0-1',
            key: '0-0-1',
            children: [
              { title: '0-0-1-0', key: '0-0-1-0' },
              { title: '0-0-1-1', key: '0-0-1-1' },
              { title: '0-0-1-2', key: '0-0-1-2' }
            ]
          }, {
            title: '0-0-2',
            key: '0-0-2'
          }]
        }, {
          title: '0-1',
          key: '0-1',
          children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
          ]
        }, {
          title: '0-1-2',
          key: '0-1-2'
        }]
      }
    },
    methods: {
      changeHandler (keys) {
        console.log('keys:', this.v1, this.v, keys)
      }
    }
  }
</script>
