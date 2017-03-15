import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import TodoApp from './components/todoapp.vue'
import filters from './filters.js'
import store from './store'
import { routes } from './config'

Vue.use(VueRouter)


const router = new VueRouter(routes)

router.beforeEach((to, from , next) => {
    let visibility = to.path.slice(1)
    if(!filters[visibility]){
        visibility = 'all'
    }
    store.state.visibility = visibility
    next()
})

sync(store, router)

new Vue({
  store,
  router,
  render: h => h(TodoApp)
}).$mount("#todo")
