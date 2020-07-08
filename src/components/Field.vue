<template>
  <div :class="['field', {'inline': inline, 'disabled': disabled, 'required': required}, checked.state]" :style="styleObject">
    <label v-if="label" class="label" :style="lableStyle">{{ label }}</label>
    <div :style="contentWrapperStyle"><slot></slot></div>
    <div class="tip" v-if="showError && checked.state === 'error'">{{ checked.message }}</div>
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
      labelWidth: { type: [Number, String], default: 'auto' },
      labelAlign: { type: String, default: 'right' },
      span: { type: [String, Number], default: 0 },
      disabled: { type: Boolean, default: false },
      inline: { type: Boolean, default: false },
      showError: { type: Boolean, default: true },
      name: { type: String }, // 需校验的字段名
      rules: { type: Array } // 验证规则
    },
    computed: {
      lableStyle () {
        const { inline, labelWidth, labelAlign } = this
        const ret = {}
        if (inline) {
          ret['text-align'] = labelAlign
          if (labelWidth !== 'auto') {
            // console.log(labelWidth, labelWidth instanceof Number)
            if (Number.isFinite(labelWidth)) {
              ret['width'] = `${labelWidth}%`
            } else {
              ret['width'] = labelWidth
            }
          }
        }
        return ret
      },
      contentWrapperStyle () {
        const { inline, labelWidth } = this
        const ret = {}
        if (inline) {
          if (labelWidth !== 'auto') {
            if (Number.isFinite(labelWidth)) {
              ret['width'] = `${100 - labelWidth}%`
            }
          }
        }
        return ret
      },
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
        const { rules, fieldValue, checked } = this
        const name = this.label || this.name
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
