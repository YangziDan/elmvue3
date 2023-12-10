import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from "axios";
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())


app.provide('baseUrl','http://localhost:8666')


app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}