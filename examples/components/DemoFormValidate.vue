<template>
  <fish-form ref="form">
    <fish-fields>
      <fish-field label="First Name" span="12" disabled>
        <fish-input></fish-input>
      </fish-field>
      <fish-field label="Last Name" span="12" name="lastName" :rules="[{ required: true, message: 'The name is not empty'}]">
        <fish-input v-model="lastName"></fish-input>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Type">GOOD, Bad,</fish-field>
      <fish-field label="Email" name="email" :rules="[{ type: 'email', message: 'The input is not valid E-mail!' }, {required: true}]">
        <fish-input v-model="email"></fish-input>
      </fish-field>
      <fish-field label="Username" name="userName" :rules="[{ required: true, message: 'The user name is not empty'}]">
        <fish-input v-model="userName"></fish-input>
      </fish-field>
      <fish-field label="Password" name="password" :rules="[{ required: true, message: 'The password is not empty'}]">
        <fish-input type="password" v-model="password"></fish-input>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Sex" name="sex" :rules="[{required: true}]">
        <fish-select v-model="sex">
          <fish-option index="0" content="Male"></fish-option>
          <fish-option index="1" content="Female"></fish-option>
        </fish-select>
      </fish-field>
      <fish-field label="Date" name="date" :rules="[{required: true}]">
        <fish-date-picker v-model="date"></fish-date-picker>
      </fish-field>
      <fish-field label="Time" name="time" :rules="[{required: true}]">
        <fish-time-picker v-model="time"></fish-time-picker>
      </fish-field>
      <fish-field label="Address" name="address" :rules="[{required: true}]">
        <fish-cascader :options="options" v-model="address"></fish-cascader>
      </fish-field>
      <fish-field label="Level" name="level" :rules="[{required: true}]">
        <fish-radios v-model="level">
          <fish-radio :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-radio>
        </fish-radios>
      </fish-field>
    </fish-fields>
    <fish-fields>
      <fish-field label="Age" name="age" :rules="[{required: true}]">
        <fish-input-number min="0" max="100" v-model="age"></fish-input-number>
      </fish-field>
      <fish-field label="Multiple" name="CB" :rules="[{required: true}]">
        <fish-checkboxes v-model="cb">
          <fish-checkbox :index="index" v-for="(c, index) in ['A', 'B', 'C']" :key="index"><span v-html="c"></span></fish-checkbox>
        </fish-checkboxes>
      </fish-field>
      <fish-field label="Switch">
        <fish-switch v-model="agree">yes or no</fish-switch>
      </fish-field>
    </fish-fields>
    <fish-field label="LableWidthM" :labelWidth="20" name="LableWidthM" :rules="[{ required: true }]" inline :showError="false">
      <fish-input-number v-model="LableWidthM" label="Day"></fish-input-number>
    </fish-field>
    <fish-field label="Upload" name="files" :rules="[{ required: true }]" inline>
      <fish-upload action="//jsonplaceholder.typicode.com/posts/" v-model="files" :withCredentials="true">
        <fish-button><i class="fa fa-upload" aria-hidden="true" style="margin-right: 5px;"></i> Upload</fish-button>
      </fish-upload>
    </fish-field>
    <fish-field label="Switch" inline>
      <fish-switch v-model="agree">I agree to the terms and conditions</fish-switch>
    </fish-field>
    <fish-field>
      <fish-checkbox index="0">I agree to the terms and conditions</fish-checkbox>
    </fish-field>
    <fish-button type="primary" @click="submitHandler">Submit</fish-button>
  </fish-form>
</template>
<script>
  export default {
    name: 'demo-form-validate',
    data () {
      return {
        userName: 't',
        lastName: '',
        password: '',
        age: '',
        sex: [],
        date: '',
        time: '',
        address: [],
        level: '',
        files: [],
        email: '',
        LableWidthM: 30,
        agree: true,
        cb: [],
        options: [
          ['zhejiang', 'Zhejiang', [
            ['hangzhou', 'Hangzhou', [
              ['xihu', 'West Lake']
            ]]
          ]],
          ['jiangsu', 'Jiangsu', [
            ['nanjing', 'Nanjing', [
              ['zhonghuamen', 'Zhong Hua Men']
            ]]
          ]]
        ]
      }
    },
    methods: {
      submitHandler () {
        this.$refs.form.validate((valid) => {
          console.log(valid)
        })
      }
    }
  }
</script>