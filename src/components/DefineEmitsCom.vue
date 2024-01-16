<script setup lang="ts">
import { ref } from 'vue';
import { useAttrs } from 'vue'

// js版本
// defineProps({
//   msg: String,
// })
// const emits = defineEmits(['changeMsg'])

defineProps<{
  msg: string
}>()

const name = ref('DefineEmitsCom')

// js版本
// const emits = defineEmits(['changeMsg'])
const emits = defineEmits<{
  (e: 'changeMsg', value: string): void
}>()

const handleChangeMsg = () => {
  emits('changeMsg', 'Hello TS')
}


const attrs = useAttrs()
// js中使用
console.log('---attrs---', attrs)
console.log(attrs.title)  // 我是标题

defineExpose({
    name,
    handleChangeMsg
})
</script>

<template>
    <br>
    <p>DefineEmitsCom</p>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeMsg">handleChangeMsg</button>
</template>