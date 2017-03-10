<template>
  <header class="header">
    <h1>todos</h1>
    <input class="toggle-all" type="checkbox" v-model="allDone" />
    <input class="new-todo"
           autofocus
           autocomplete="off"
           placeholder="What needs to be done?"
           v-model="newTodo"
           @keyup.enter="addTodo" />
  </header>
</template>

<script>
import storage from '../storage.js'
export default {
  props: {
    todos: Array,
    remaining: Number
  },
  data() {
    return {
      newTodo: '',
    }
  },
  computed: {
        allDone: {
            get() {
                return this.remaining === 0
            },
            set(value){
               this.todos.forEach(todo => todo.completed = value)
            }
        }
  },
  methods: {
    addTodo() {
      console.log(this.todos)
      let todo = this.newTodo && this.newTodo.trim()
      if(!todo) return
      this.todos.push({
        id: storage.uid++,
        title: todo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style>
  input.toggle-all{
  top: 10px;
  z-index: 1;
  }
</style>
