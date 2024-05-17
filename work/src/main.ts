import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)
// 注册所有图标组件
for (const [key, component] of Object.entries(ElIcons)) {
    app.component(key, component)
}
app.use(ElementPlus).use(store).use(router).mount('#app')
