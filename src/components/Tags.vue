<template>
  <div :class="classObject" v-if="edited">
    <fish-tag :key="item" :index="item" v-for="(item, index) in items"
            @click="clickHandler($event, index)" @close="closeHandler($event, index)">
      {{typeof item === 'object' ? item[1] : item}}
    </fish-tag>
    <a class="fish tag" v-if="onAddExists && !isClickAdd" @click="addHandler">
      <i class="fa fa-plus" style="margin-left:0;"></i>
    </a>
    <input type="text"
           :key="`new-tag-input`"
           ref="newTagInput"
           @keyup.enter="addEnterHandler($event)"
           @blur="addDoneHandler($event)"
           v-if="onAddExists && isClickAdd"/>
  </div>
  <div :class="classObject" v-else>
    <a :class="['fish tag', typeof item === 'object' && item[0] && 'primary']"
       @click="clickHandler($event, index)"
       :key="index" v-for="(item, index) in items">
      {{typeof item === 'object' ? item[1] : item}}
    </a>
  </div>
</template>
<script>
  import fishTag from './Tag'
  export default {
    name: 'fish-tags',
    components: {
      fishTag
    },
    props: {
      size: String,
      edited: { type: Boolean, default: false },
      items: { type: Array, required: true } //
    },
    computed: {
      classObject () {
        return ['fish tags', this.size]
      },
      onAddExists () {
        return this._events.add
      }
    },
    methods: {
      clickHandler (event, index) {
        if (typeof this.items[index] === 'object') {
          this.$emit('click', index, this.items[index][0] === false)
        } else {
          this.$emit('click', index)
        }
      },
      closeHandler (event, index) {
        this.$emit('close', index)
      },
      addHandler () {
        this.isClickAdd = true
        this.$nextTick(() => {
          this.$refs.newTagInput.focus()
        })
      },
      addEnterHandler (event) {
        this.$refs.newTagInput.blur()
      },
      addDoneHandler (event) {
        // console.log(event.target)
        this.isClickAdd = false
        let v = event.target.value
        if (!/^\s*$/.test(v)) {
          this.$emit('add', v)
        }
      }
    },
    data () {
      return {
        isClickAdd: false
      }
    }
  }
</script>

