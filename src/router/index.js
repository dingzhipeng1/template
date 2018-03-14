import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.prototype.axios = axios;
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: resolve => require(['@/components/Login'], resolve),
    meta: {
      requireAuth: true
    }
  },
    {
      path: '/index',
      component: resolve => require(['@/components/index/Index'], resolve),
      children: [{
        path: '/',
        component:resolve => require(['@/components/group1/tab1'], resolve),
      },
        {
          path: '/tab1',
          component:resolve => require(['@/components/group1/tab1'], resolve),
        },
        {
          path: '/tab2',
          component:resolve => require(['@/components/group1/tab2'], resolve),
        }]
    }
  ]
})
