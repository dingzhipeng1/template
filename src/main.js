import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import auth from './assets/auth.js'

Vue.use(ElementUI)

/*Vue.config.productionTip = false*/
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created() {
    auth.ajax.call(this).then(function (data) {
      if (data.login == true) {
      }
    }).catch(() => {
      this.$router.push("/")
    });
    auth.auth.call(this, router)
  }
})
