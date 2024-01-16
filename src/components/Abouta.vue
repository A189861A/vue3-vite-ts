<template>
    <h1>{{ msg }}</h1>
    <button type="button" @click="add">count is: {{ count }}</button>
  </template>
  
<script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'About-a',
    props: {
      msg: String,
    },
    setup(props, ctx) {
      const count = ref(0)
  
      function add() {
        count.value++
      }
      // 使用return {} 把变量、方法暴露给模板
      return {
        count,
        add,
      }
    },
  })
  </script>
  