import Vue from 'vue'
import TodoApp from './todoapp.vue'
import filters from './filters.js'
new Vue({
  el: '#todo',
  render: h => h(TodoApp)
});
