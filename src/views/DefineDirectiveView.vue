<script setup>
import { ref } from 'vue'
// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => {
    el.focus()
    el.style.color = 'red'
  }
}

const handleClick = () => {
  console.log('防抖点击');
}

const handleInput = () => {
  console.log('节流输入框的值');
}

let isShowModal = ref(false)
const showModal = () => {
  isShowModal.value = true;
}
const cancleModal = () => {
  console.log('cancleModal');
  isShowModal.value = false;
}

</script>

<template>
  <input v-focus />
  <button v-debounce="{fn: handleClick, event: 'click', delay: 2000}">防抖</button>
  <button v-throttle="{fn: handleInput, event: 'click', delay: 2000}">节流</button>
  <p>******</p>
  <button @click.stop="showModal">点击显示弹窗</button>
  <div class="modal" v-hide="{fn: cancleModal}" v-if="isShowModal">
    <p>我是弹窗</p>
    <button @click.stop="cancleModal">关闭</button>
  </div>
</template>