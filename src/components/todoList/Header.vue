<template>
  <div class="w-full pb-4">
    <el-input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="title"
        @keyup.enter="add"
    />
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue"
import {Todo} from "@/types/todo"
// 定义接口,约束对象的类型

export default defineComponent({
  name: "Header",
  props: {
    addTodo: {
      type: Function,
      required: true, // 必须
    },
  },

  setup(props: any) {
    // 定义一个ref类型的数据
    const title = ref("")

    // 回车的事件的回调函数,用来添加数据
    const add = () => {
      // 获取文本框中输入的数据,判断不为空
      const text = title.value
      if (!text.trim()) return
      // 此时有数据,创建一个todo对象
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      }

      // 调用方法addTodo的方法
      props.addTodo(todo)
      console.log("添加todo", todo)

      // 清空文本框
      title.value = ""
    }
    return {
      title,
      add,
    }
  },
})
</script>