<template>
  <div>
    <p>
      子组件中total={{ total }}
    </p>
    <p>
      子组件中page={{ page }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onMounted, ref} from 'vue'

export default defineComponent({
  props: {
    total: String,
    page: String,
  },
  setup() {
    const a = ref(1)
    console.log(1);

    onBeforeMount(() => {
      console.log(2);
    });

    onMounted(() => {
      console.log(3);
    });

    console.log(4);

    return {a}
  }
})
</script>

<style scoped>

</style>