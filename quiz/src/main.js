import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueVisual from 'vue-visual'
import { store } from './store/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.component('visual', VueVisual)
require('vue-visual/index.css')

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
})