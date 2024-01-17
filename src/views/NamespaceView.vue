<script setup lang="ts">
// 使用一
// import Form from '../components/Form/index'


// 使用二
import * as Form from '../components/Form/index'
console.log(Form)
</script>

<template>
    <!-- 使用一 -->
  <!-- <Form>
    <Form.Label />
    <Form.Input />
  </Form> -->

  <!-- 使用二 -->
  <Form.Form>
    <Form.Label />
    <Form.Input />
  </Form.Form>
</template>
