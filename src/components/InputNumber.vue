<template>
  <div :class="['fish input number', {'disabled': disabled}]">
    <div class="label-left" v-if="labelLeft" v-html="labelLeft"></div>
    <div class="label-right">
      <div class="step" ref="step">
        <i class="fa fa-angle-up" @click.stop="upHandler"></i>
        <i class="fa fa-angle-down" @click.stop="downHandler"></i>
      </div>
      <label v-if="label" ref="label" v-html="label"></label>
    </div>
    <input :placeholder="hint"
           autocomplete="off"
           :min="min"
           :max="max"
           :value="value" @input="updateValue($event)"/>
  </div>
</template>
<script>
  const maxInteger = 1000000000000.00
  import { notify } from '../config'

  const add = (v1, v2) => {
    v1 *= maxInteger
    v2 *= maxInteger
    return (Math.round(v1) + Math.round(v2)) / maxInteger
  }

  export default {
    name: 'fish-input-number',
    props: {
      value: { type: [Number, String], default: '' },
      min: { type: [Number, String], default: 0 },
      max: { type: [Number, String], default: maxInteger },
      step: { type: [Number, String], default: 1 },
      hint: { type: String, default: '' },
      size: { type: String },
      label: { type: String },
      labelLeft: { type: String },
      disabled: { type: Boolean, default: false },
      testExpress: { type: RegExp, default: () => /(^\d+$)|(^\d+(\.\d{0,4})?$)/ }
    },
    methods: {
      updateValue (evt) {
        let v = evt.target.value
        if (/^\s*$/.test(v)) {
          this.changeHandler('')
          return
        }
        if (this.testExpress.test(v) && parseFloat(v) <= parseFloat(this.max) && parseFloat(v) >= parseFloat(this.min)) {
          this.changeHandler(v.indexOf('.') !== -1 ? parseFloat(v) : parseInt(v))
        } else {
          evt.target.value = this.value
        }
      },
      upHandler () {
        let nv = add(this.value, this.step)
        if (parseFloat(nv) < parseFloat(this.max)) {
          this.changeHandler(nv)
        }
      },
      downHandler () {
        let nv = add(this.value, -this.step)
        if (parseFloat(nv) > parseFloat(this.min)) {
          this.changeHandler(nv)
        }
      },
      changeHandler (v) {
        this.$emit('input', v)
        this.$emit('change', v)
        notify.field.change(this)
      }
    }
  }
</script>
