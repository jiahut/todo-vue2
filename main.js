import Vue from 'vue'
import Vuex from 'vuex'
import TodoApp from './todoapp.vue'
import filters from './filters.js'

Vue.use(Vuex)

new Vue({
  el: '#todo',
  render: h => h(TodoApp)
});
