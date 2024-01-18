<template>
    <div>
      {{ book }}
      <br>
      {{ bookA }}
      <br>
      <button @click="clickHandle">addBook</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}
// 为了让 TypeScript 正确地推导出组件选项内的类型，我们需要通过 defineComponent() 这个全局 API 来定义组件
export default defineComponent({
  // 我们可以给 emits 选项提供一个对象 来声明组件所触发的事件，以及这些事件所期望的参数类型。
  emits: {
    addBook(payload: { bookName: string }) {
      // 执行运行时校验
      let ret = payload.bookName.length > 0;
      console.log('emit-validate', ret)
      return ret
    }
  },
  data() {
    return {
      message: 'Hello, Vue 3!'
    }
  },
  props: {
    bookA: {
      type: Object as PropType<Book>,
      // 如果你的 TypeScript 版本低于 4.7，确保使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    book: {
      // 提供相对 `Object` 更确定的类型
      type: Object as PropType<Book>,
      required: true
    },
    // 也可以标记函数
    callback: Function as PropType<(id: number) => void>
  },
  computed: {
    // 显式标注返回类型
    greeting(): string {
      return this.message + '!'
    },

    // 标注一个可写的计算属性
    greetingUppercased: {
      get(): string {
        return this.message
      },
      set(newValue: string) {
        this.message = newValue
      }
    }
  },
  mounted() {
    this.book.title // string
    this.book.year // number

    // TS Error: argument of type 'string' is not
    // assignable to parameter of type 'number'
    this.callback?.(1)
  },
  methods: {
    clickHandle(){
      this.$emit('addBook', {bookName: 'vue3'})
    }
  }
})
</script>

<style scoped>

</style>