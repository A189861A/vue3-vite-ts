<template>
    <div>
        toRefs: {{ title }} <br> number:{{ number }}
    </div>
</template>

<script>
import { toRefs, toRef } from 'vue';

export default {
    props: {
        number: String,
        title: String,
        reactiveBook: Object,
    },
  setup(props) {
    console.log('---props---', props)
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { number, reactiveBook } = toRefs(props)
    // `number` 是一个追踪着 `props.number` 的 ref
    console.log('--reactiveBook--', reactiveBook)
    console.log('--number--', number.value)
    
    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'title')

    console.log('--title--', title.value)
    return {
        // props,
        // title
    }
  }
}
</script>

<style scoped>

</style>