<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'

const theme = {
  color: 'red'
}

</script>

<template>
  <main>
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