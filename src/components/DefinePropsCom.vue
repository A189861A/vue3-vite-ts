<script setup lang="ts">
interface ListItem {
  name: string
  age: number
}


// const props = defineProps<{
//   msg: string
//   title: string
//   list: ListItem[]
// }>()

interface Props {
  msg: string
  // title可选
  title?: string
  list: ListItem[]
}
// withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项
const props = withDefaults(defineProps<Props>(), {
  title: '我是标题',
  // 对于array、object需要使用函数，和以前的写法一样
  list: () => []
})

// 在 ts 中使用 props 中的属性，具有很好的类型推断能力
console.log(props.list[0].age)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ title }}</div>
</template>
