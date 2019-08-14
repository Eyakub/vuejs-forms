import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';

import jQuery from 'jquery';
import 'popper.js';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
