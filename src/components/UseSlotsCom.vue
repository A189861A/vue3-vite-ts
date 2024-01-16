<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
// 在js中访问插槽默认插槽default、具名插槽footer
console.log('---slots.default---',slots.default)
console.log('---slots.footer---',slots.footer())
</script>

<template>
  <div>
    <!-- 在模板中使用插槽 -->
    <slot></slot>
    <slot name="footer"></slot>
    ---ref---{{ $slots.default() }}
  </div>
</template>