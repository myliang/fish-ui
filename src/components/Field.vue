<template>
  <div :class="['field', {'inline': inline, 'disabled': disabled, 'required': required}, checked.state]" :style="styleObject">
    <label v-if="label" class="label" :style="inline ? {'width': `${labelWidth}`, 'text-align': labelAlign} : {}">{{ label }}</label>
    <slot></slot>
    <div class="tip" v-if="checked.state === 'error'">{{ checked.message }}</div>
  </div>
</template>
<script>
  const spanWidth = 4.16666
  const noop = () => {}
  import AsyncValidator from 'async-validator'

  export default {
    name: 'fish-field',
    props: {
      label: { type: String },
      labelWidth: { type: String, default: 'auto' },
      labelAlign: { type: String, default: 'right' },
      span: { type: [String, Number], default: 0 },
      disabled: { type: Boolean, default: false },
      inline: { type: Boolean, default: false },
      name: { type: String }, // 需校验的字段名
      rules: { type: Array } // 验证规则
    },
    computed: {
      styleObject () {
        const { span } = this
        if (span === 0) return {}
        return {
          width: `${spanWidth * parseInt(span + '')}%`
        }
      },
      field () {
        return this.$children[0]
      },
      fieldValue () {
        return this.field && this.field.value
      },
      required () {
        const { rules } = this
        if (rules && rules.length > 0) {
          for (let rule of rules) {
            if (rule.required) return true
          }
        }
        return false
      }
    },
    mounted () {
      this.oldValue = this.fieldValue
    },
    data () {
      return {
        oldValue: null,
        checked: {state: '', message: ''}
      }
    },
    methods: {
      validate (cb = noop) {
        const { name, rules, fieldValue, checked } = this
        let nRules = rules
        if (!nRules || nRules.length === 0) {
          cb()
          return true
        }

        let descriptor = {}
        descriptor[name] = nRules
        const validator = new AsyncValidator(descriptor)

        let model = {}
        model[name] = fieldValue
        validator.validate(model, { firstFields: true }, (errors, fields) => {
          checked.state = errors ? 'error' : ''
          checked.message = errors ? errors[0].message : ''
          cb(errors)
        })
      },
      fieldValueChange () { // 子组件通知调用函数
        this.validate()
      }
    }
  }
</script>
