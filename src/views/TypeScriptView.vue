<template>
    <div>
      <TypeScriptCom :book="book" :callback="callback" @addBook="addBook"/>
      number:{{ number }}
      <ToRefCom title="title-1" :number="number" :reactiveBook="reactiveBook"/>
      <input v-model="number" />
    </div>
</template>

<script lang="ts">
import TypeScriptCom from '@/components/TypeScriptCom.vue';
import ToRefCom from '@/components/ToRefCom.vue';
import { reactive, ref } from 'vue';

export default {
  props: ['message'],
  components: { TypeScriptCom, ToRefCom },
  // setup: 在组件中使用组合式 API 的入口
  // 1.需要在非单文件组件中使用组合式 API 时。
  // 2.需要在基于 选项式 API 的组件中 集成 基于组合式 API 的代码时。
  // 3.在 setup() 中访问 this 会是 undefined
  // 4.setup() 应该同步地返回一个对象。唯一可以使用 async setup() 的情况是，该组件是 Suspense 组件的后裔。
  // 5.常规解构 props 对象，解构出的变量将会丢失响应性
  // 6.保持响应性: toRefs() 和 toRef() 这两个工具函数：
  setup(props, context) { // context 上下文对象: 上下文对象是非响应式的，可以安全地解构
    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit)

    // 暴露公共属性（函数）
    // expose 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose 函数暴露出的内容：
    console.log(context.expose)


    const book = {
      title: 'ttt',
      author: 'aaa',
      year: 2024
    }

    const reactiveBook = reactive(book);
    const number = ref(1);

    // function callback<T>(value:T):void {
    //   console.log('callback', value);
    // }

    const callback: <T>(arg: T) => void = (value)=> {
        console.log('callback', value);
    }

    const addBook = (value: any) => {
      console.log('addBook', value);
    }
    // 返回值会暴露给模板和其他的选项式 API 钩子
    // 1.在模板中访问从 setup 返回的 ref 时，它会自动浅层解包，因此你无须再在模板中为它写 .value
    return { book, callback, addBook, number, reactiveBook }
  },
  mounted() {
    console.log('--mounted--', this.book) // 0
  }
}
</script>

<style scoped>

</style>