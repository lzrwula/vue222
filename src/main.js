import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Calendar,Toast,Icon,Checkbox, CheckboxGroup } from 'vant';

Vue.use(Calendar);
Vue.use(Vant);
Vue.use(Toast);
Vue.use(Icon)
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
