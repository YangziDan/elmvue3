import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import cookie from "vue-cookies";
import { createPinia } from 'pinia'
import axios from "axios";
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())

import router from './router'
app.use(router)
app.use(cookie)
app.provide('baseUrl','http://localhost:8666')


app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
