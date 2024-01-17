<template>
   <label for="name">name</label>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps<{name: string}>()
</script>

<style scoped>

</style>