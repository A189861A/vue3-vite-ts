<template>
    <div>
      <TypeScriptCom :book="book" :callback="callback" @addBook="addBook"/>
    </div>
</template>

<script lang="ts">
import TypeScriptCom from '@/components/TypeScriptCom.vue';

export default {
  props: ['message'],
  components: { TypeScriptCom },
  setup(props, content) {
    const book = {
      title: '',
      author: '',
      year: 2024
    }

    // function callback<T>(value:T):void {
    //   console.log('callback', value);
    // }

    const callback: <T>(arg: T) => void = (value)=> {
        console.log('callback', value);
    }

    const addBook = (value: any) => {
      console.log('addBook', value);
    }
    return { book, callback, addBook }
  }
}
</script>

<style scoped>

</style>