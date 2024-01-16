<script setup lang="ts">
    import DefinepropsCom from '../components/DefinepropsCom.vue'
    const list = [
        {
            name: 'name',
            age: 10
        }
    ]
</script>

<template>
    <DefinepropsCom msg="msg" :list="list" />
</template>
