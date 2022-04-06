<template>
  <div class="w-full pt-4 text-center">
    <label class="flex justify-start items-center">
      <el-checkbox v-model="isCheckAll"/>
      <span>已完成{{ count }}</span> / 全部{{ todos.length }}
    </label>
    <el-button type="danger" @click="clearAllCompletedTodos">
      清除已完成任务
    </el-button>
  </div>
</template>
<script lang="ts">
import {defineComponent, computed} from "vue"
import {Todo} from "@/types/todo"

export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
      default: [],
    },
    checkAll: {
      type: Function,
      required: true,
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true,
    },
  },
  setup(props: any) {
    console.log("Footer setup")
    console.log(props.todos)

    // 已完成的计算属性操作
    const count = computed(() => {
      console.log("Footer computed todos")
      console.log(props.todos)
      return props.todos.reduce(
          (pre, todo, index) => pre + (todo.isCompleted ? 1 : 0),
          0
      )
    })

    // 全选/全不选的计算属性操作
    const isCheckAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value
      },
      set(val) {
        props.checkAll(val)
      },
    })
    return {
      count,
      isCheckAll,
    }
  },
})
</script>