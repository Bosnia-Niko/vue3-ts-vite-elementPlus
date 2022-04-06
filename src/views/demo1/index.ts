/*
 * @Description: 文件介绍
 * @Version: 1.0.0
 * @Author: 张豪
 * @Date: 2022-03-10 10:23:22
 * @LastEditTime: 2022-03-21 09:42:40
 * @LastEditors: 张豪
 */
import {reactive, toRefs, onMounted, onUnmounted} from "vue";

type mousePositionData = {
  x: number,
  y: number
}
export default function useMousePosition() {
  const mouseData: mousePositionData = reactive({
    x: 0,
    y: 0
  })

  const updateMouse = (e: MouseEvent) => {
    mouseData.x = e.pageX
    mouseData.y = e.pageY
  }

  onMounted(async () => {
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })
  return {
    ...toRefs(mouseData)
  }
}