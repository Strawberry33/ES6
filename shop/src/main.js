import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import { Icon, NavBar, Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Button} from 'vant';

Vue.use(Icon).use( NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Button);

import '@/mock/mock.js';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
