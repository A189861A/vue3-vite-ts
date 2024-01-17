<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import { ref } from 'vue';
const theme = {
  color: 'red'
}


const total = ref(0)
const add = () => {
  total.value++
}

</script>

<template>
  <main>
    <input :value="total" v-my-directive />
    <button @click="add">add+1</button>
    <p>hello</p>
    <TheWelcome />
  </main>
</template>
<style scoped>
p {
  /* 使用顶层绑定 */
  color: v-bind('theme.color');
}
</style>