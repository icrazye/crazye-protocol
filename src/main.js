import Vue from 'vue'
import App from './App.vue'
import UserProtocol from './components/UserProtocol'
import authorize from './components/authorize'
import privacy from './components/privacy'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/user-protocol',
    component: UserProtocol,
    name: UserProtocol,
    meta: {
      title: 'CrazyE用户协议'
    }

  },
  {
    path: '/authorize',
    component: authorize,
    name: authorize,
    meta: {
      title: '教务信息查询服务协议'
    }
  },
  {
    path: '/privacy',
    component: privacy,
    name: privacy,
    meta: {
      title: '隐私政策'
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');