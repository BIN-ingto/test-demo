import Vue from 'vue'
import App from './App'
import router from './router'
//引入Element
import ElementUI from 'element-ui'
//引入Element样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
