import Vue from 'vue'
import TodoApp from './components/todoapp.vue'
import filters from './filters.js'
import store from './store'

new Vue({
  el: '#todo',
  store,
  render: h => h(TodoApp)
});
