/**/
var temp = {
  ajax: function () {
    return new Promise((r1, r2) => {
      if (this.$store.state.lognameobj.login) {
        r1({login: true})
      } else {
        r2(false)
      }
    })
  },
  auth: function (router) {
    router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth) {
        next();
      }
      else {
        //ajax做权限判断 没后端 Promise模拟了一个
        /*
               this.axios({
                 method: 'get',
                 url: 'user/status'
               })*/
        temp.ajax.call(this).then((data) => {
          if (data.login == true) {
            this.$store.commit('setlognameobj', data)
            //这里做权限等级管理

            next();
          } else {
            next('/');
          }
        }).catch((data) => {

        })
      }
    })

  }
}
export default temp

