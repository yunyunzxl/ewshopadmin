import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import '@/styles/tailwind.css'
import '@/styles/index.css'
//导入pinia
import {createPinia} from "pinia";
//创建pinia
const pinia = createPinia()

const app =createApp(App)
//5.创建并挂在根实例
app.use(router)
app.use(pinia)
app.mount('#app')
