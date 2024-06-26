import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import cookie from "vue-cookies";
import {createPinia} from 'pinia'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())

app.use(router)
app.use(cookie)
app.provide('baseUrl', 'http://localhost:10001')


app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
