import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { store } from './store/store'

import VueFreezeGif from 'vue-freeze-gif'
import 'vue-freeze-gif/lib/vue-freeze-gif.css'
Vue.component('freeze', VueFreezeGif)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
})