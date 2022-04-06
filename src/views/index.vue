<template>
  <div class="w-full">
    <div class="w-9/12 lg:mx-auto">
      <el-table :data="tableData" max-height="250">
        <el-table-column fixed prop="date" label="Date" width="150"/>
        <el-table-column prop="name" label="Name" width="120"/>
        <el-table-column prop="state" label="State" width="120"/>
        <el-table-column prop="city" label="City" width="120"/>
        <el-table-column prop="address" label="Address" width="600"/>
        <el-table-column prop="zip" label="Zip" width="120"/>
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
                type="text"
                size="small"
                @click.prevent="deleteRow(scope.$index)"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="w-9/12 lg:mx-auto">
      <el-cascader-panel :options="options" @change="changeVal"/>
    </div>

    <HomeComponents :total="total" :page="page"></HomeComponents>
    <el-button @click="getData">调用接口</el-button>
    <div v-if="dataList.isSuccess">{{ dataList.result }}</div>
  </div>
  <el-button @click="$router.push('/demoFirst')">demoFirst</el-button>
  <el-button @click="$router.push('/demoSecond')">demoSecond</el-button>
  <el-button @click="$router.push('/demoThird')">demoThird</el-button>
</template>

<script lang="ts">

import HomeComponents from "../components/HomeComponents.vue"
import {useStore} from 'vuex';
import {computed, defineComponent, onMounted, reactive, toRefs} from "vue";
import {tableList} from "./json/tableList";

export default defineComponent({
  components: {
    HomeComponents,
  },
  setup() {
    const {tableData, deleteRow, options} = tableList()
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
      isSuccess: false
    })
    const getData = async () => {
      let getBData = await getBCallback();
      dataList.result = getBData.data.result
      dataList.isSuccess = true

    }
    onMounted(async () => {
      await store.dispatch('setName', '小明');// 修改
      await store.dispatch('getA');
    })
    const pageObject = reactive({
      total: "total",
      page: "page"
    })
    const changeVal = (val: String) => {
      pageObject.total = val[0]
      pageObject.page = val[2]
    }
    return {
      tableData, deleteRow, changeVal, getData, dataList, ...toRefs(pageObject), options
    }
  }
})




</script>