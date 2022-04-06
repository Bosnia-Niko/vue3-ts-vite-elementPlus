<!--
 * @Description: 文件介绍
 * @Version: 1.0.0
 * @Author: 张豪
 * @Date: 2022-03-10 10:23:13
 * @LastEditTime: 2022-03-14 13:45:33
 * @LastEditors: 张豪
-->
<template>
  <div>
    <h1>X:{{ x }}, Y:{{ y }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import useMousePosition from "./index";

export default defineComponent({
  components: {},
  setup() {
    const {x, y} = useMousePosition();
    return {x, y};
  },
});
</script>
