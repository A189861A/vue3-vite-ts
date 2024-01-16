<script setup lang="ts">
    import DefinepropsCom from '../components/DefinepropsCom.vue'
    import DefineEmitsCom from '../components/DefineEmitsCom.vue'
    import { ref } from 'vue';

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

</script>

<template>
    <DefinepropsCom :msg="msg" :list="list" />
    <DefineEmitsCom :msg="msg" @changeMsg="changeMsg" />
</template>
