<script setup lang="ts">
    import DefinepropsCom from '../components/DefinepropsCom.vue'
    import DefineEmitsCom from '../components/DefineEmitsCom.vue'
    import { onMounted, ref } from 'vue';

    // 此处暂时使用any，需要定义类型
    const root = ref<any>(null)

    const list = [
        {
            name: 'name',
            age: 10
        }
    ]


    const msg = ref('Hello Vue3')
    const changeMsg = (v: string) => {
        msg.value = v
    }

    onMounted(() => {
        console.log( '---ref---' ,root.value.name)
    })
</script>

<template>
    <DefinepropsCom :msg="msg" :list="list" />
    <DefineEmitsCom :msg="msg" @changeMsg="changeMsg" ref="root"/>
</template>
