<template>
  <form :class="['fish form', {'inline': this.inline}]">
    <slot></slot>
  </form>
</template>
<script>
  const getAllFields = (fields, children) => {
    children.forEach((child) => {
      // console.log(child.$options.name)
      if (child.$options.name === 'fish-field') {
        if (child.name && child.rules) fields.push(child)
      } else if (child.$children && child.$children.length > 0) getAllFields(fields, child.$children)
    })
  }

  export default {
    name: 'fish-form',
    props: {
      inline: { type: Boolean, default: false }
    },
    data () {
      return {}
    },
    methods: {
      validate (cb) {
        let valid = true
        let count = 0
        const fields = []
        // 获取所有field组件，同时name不为空
        getAllFields(fields, this.$children)

        fields.forEach((field) => {
          field.validate(errors => {
            if (errors) valid = false
            if (typeof cb === 'function' && ++count === fields.length) {
              cb(valid)
            }
          })
        })
      }
    }
  }
</script>
