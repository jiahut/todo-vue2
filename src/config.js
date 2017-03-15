import TodoApp from './components/todoapp.vue'

export default {
  routes: [
    {
      path: '/:visibility',
      component: TodoApp
    }
  ]
}
