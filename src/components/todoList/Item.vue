<template>
  <li
      @mouseenter="mouseHandler(true)"
      @mouseleave="mouseHandler(false)"
      class="bg-white hover:bg-gray-400"
  >
    <label class="flex justify-start items-center">
      <el-checkbox v-model="isComplete"/>
      <span class="ml-2">{{ todo.title }}</span>
    </label>
    <el-button type="danger" v-show="isShow" @click="delTodo">
      删除
    </el-button>
  </li>
</template>
<script lang="ts">
import {defineComponent, ref, computed} from "vue"
// 引入接口
import {Todo} from "@/types/todo"

export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },

  setup(props: any) {
    const todo: Todo = props.todo
    // 设置按钮默认不显示
    const isShow = ref(false)
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag: boolean) => {
      isShow.value = flag;
    }
    // 删除数据的方法
    const delTodo = () => {
      // 提示
      if (window.confirm("确定要删除吗?")) {
        props.deleteTodo(props.index)
      }
    }
    // 计算属性的方式---来让当前的复选框选中/不选中
    const isComplete = computed({
      get() {
        return todo.isCompleted
      },
      set(val) {
        props.updateTodo(todo, val)
      },
    })
    return {
      mouseHandler,
      isShow,
      delTodo,
      isComplete,
    }
  },
})
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>