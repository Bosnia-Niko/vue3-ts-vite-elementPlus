import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
import router from './router/index'
import store from './store/index'
app.use(ElementPlus).use(router).use(store)
app.mount('#app')