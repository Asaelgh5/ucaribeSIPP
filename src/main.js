import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

axios.defaults.withCredentials = true

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
