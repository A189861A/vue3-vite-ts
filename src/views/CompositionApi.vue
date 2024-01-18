<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

type User = {
    name: string
    age: number
}

// ref
const msg1 = ref('')  //  会默认约束成 string 类型，因为ts类型推导
const msg2 = ref<string>('')  //  可以通过范型约束类型
const user1 = ref<User>({ name: 'tang', age: 18 })  //  范型约束
const user2 = ref({} as User)  // 类型断言

// reactive
const obj = reactive({})
const user3 = reactive<User>({ name: 'tang', age: 18 })
const user4 = reactive({} as User)

// computed
const msg3 = computed(() => msg1.value)
const user5 = computed<User>(() => {
    return { name: 'tang', age: 18 }
})
</script>

<template>
    <div>msg1:{{ msg1 }}</div>
    <div>msg2:{{ msg2 }}</div>
    <div>user1:{{ user1 }}</div>
    <div>user2:{{ user2 }}</div>
    <div>user3:{{ user3 }}</div>
    <div>user4:{{ user4 }}</div>
    <div>msg3:{{ msg3 }}</div>
    <div>user5:{{ user5 }}</div>
    <div>obj:{{ obj }}</div>
</template>
