<template>
  <el-cascader-panel :options="options" @change="changeVal"/>
  <HomeComponents :total="total" :page="page"></HomeComponents>
  <el-button @click="getData">调用接口</el-button>
  <div v-if="dataList.isSuccess">{{ dataList.result }}</div>

</template>

<script lang="ts" setup>
import HomeComponents from "../components/HomeComponents.vue"
import {useStore} from 'vuex';
import {computed, onMounted, reactive, toRaw, toRefs} from "vue";
const store = useStore();
let name = computed(() => {
  return store.state.name
});
let Adata = computed(() => {
  return store.state.Adata
});
const getBCallback = async () => {
  return await store.dispatch('getB');
}
const dataList = reactive({
  result: String,
  isSuccess:false
})

const getData = async () => {
  let getBData = await getBCallback();
  console.log("getBData", getBData);
  dataList.result = getBData.data.result
  dataList.isSuccess=true
}
onMounted(async () => {
  console.log(dataList.result)
  console.log("name", name.value);// 原值
  await store.dispatch('setName', '小明');// 修改
  console.log("name", name.value);// 新值

  console.log("Adata", Adata.value)
  await store.dispatch('getA');
  console.log("Adata", toRaw(Adata.value.data));
})
const pageObject = reactive({
  total: "total",
  page: "page"
})

const {total, page} = toRefs(pageObject)
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
const changeVal = (val: String) => {
  console.log(toRaw(val))
  total.value = val[0]
  page.value = val[2]
}
</script>