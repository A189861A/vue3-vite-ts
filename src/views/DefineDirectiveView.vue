<script setup>
// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => {
    el.focus()
    el.style.color = 'red'
  }
}
</script>

<template>
  <input v-focus />
</template>