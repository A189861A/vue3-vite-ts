<script setup lang="ts">
// js版本
// defineProps({
//   msg: String,
// })
// const emits = defineEmits(['changeMsg'])

defineProps<{
  msg: string
}>()

const emits = defineEmits<{
  (e: 'changeMsg', value: string): void
}>()

const handleChangeMsg = () => {
  emits('changeMsg', 'Hello TS')
}
</script>

<template>
    <br>
    <p>DefineEmitsCom</p>
    <h1>{{ msg }}</h1>
    <button @click="handleChangeMsg">handleChangeMsg</button>
</template>