<template>
  aboutaView<Abouta />
  <br>
  ----------
  <br>
  aboutbView<Aboutb />
</template>

<script>
import { defineComponent, ref } from 'vue'
import Abouta from '@/components/Abouta.vue'
import Aboutb from '@/components/Aboutb.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: { Abouta, Aboutb },
  props: {
  },
  setup(props, ctx) {
    return {
    }
  },
})
</script>
