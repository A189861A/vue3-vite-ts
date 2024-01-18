<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

// 在 vue3 的 setup() 选项或 <script setup> 语法糖中是没有 this 的，
// 可以使用 getCurrentInstance 函数来获取到当前组件的实例。
// 请不要把它当作在组合式 API 中获取 this 的替代方案来使用。
// getCurrentInstance 只能在 setup 或生命周期钩子中调用。

// 获取当前组件的实例对象，相当于 vue2 的 this
const instance = getCurrentInstance()
console.log(instance)

// 获取 HelloWorld 组件实例
const helloWorld = ref(null)

onMounted(() => {
  console.log(instance.$el)
  console.log(helloWorld.value.$el)
  helloWorld.value.$el.setAttribute('data-name', '定义name');
})
</script>

<template>
  <div>标题</div>
  <HelloWorld title="11" ref="helloWorld" />
</template>