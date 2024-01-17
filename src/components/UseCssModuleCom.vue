<script setup lang="ts">
import { useCssModule } from 'vue'

// 不传递参数，获取<style module>代码块编译后的css类对象
const style = useCssModule()
console.log(style.success)  // 获取到的是success类名经过 hash 计算后的类名
    
// 传递参数content，获取<style module="content">代码块编译后的css类对象
const contentStyle = useCssModule('content')
</script>

<template>
  <div class="success">普通style red</div>

  <div :class="$style.success">默认CssModule pink</div>
  <div :class="style.success">默认CssModule pink</div>

  <div :class="contentStyle.success">具名CssModule blue</div>
  <div :class="content.success">具名CssModule blue</div>
</template>

<!-- 普通style -->
<style>
.success {
  color: red;
}
</style>

<!-- 无值的css module -->
<style module lang="less">
.success {
  color: pink;
}
</style>

<!-- 具名的css module -->
<style module="content" lang="less">
.success {
  color: blue;
}
</style>