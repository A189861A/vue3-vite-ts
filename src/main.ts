import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import directives from './directives/index.js'

Object.keys(directives).forEach(key => {  
    app.directive(key, (directives as any)[key])
 })

// 自定义全局指令
app.directive("blur", {
    mounted(el) {
        const input = el as HTMLElement;
        input.addEventListener('blur', function (e) {
            alert('失去焦点了')
        })
    }
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
