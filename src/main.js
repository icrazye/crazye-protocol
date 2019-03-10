import Vue from 'vue'
import App from './App.vue'
import UserProtocol from './components/UserProtocol'
import authorize from './components/authorize'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/user-protocol',
    component: UserProtocol,
    name: UserProtocol
  },
  {
    path: '/authorize',
    component: authorize,
    name: authorize
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');