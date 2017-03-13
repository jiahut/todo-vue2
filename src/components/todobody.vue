<template>
  <section class="main" v-show="todos.length">
    <ul class="todo-list">
      <li v-for="todo in filteredTodos"
          class="todo"
          :key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editedTodo}">
        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title}} </label>
          <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <input class="edit"
               type="text"
               v-model="todo.title"
               v-todo-focus="todo == editedTodo"
               @blur="doneEdit(todo)"
               @keyup.enter="doneEdit(todo)"
               @keyup.esc="cancelEdit(todo)" />
      </li>
    </ul>
  </section>
</template>

<script>
import storage from '../storage.js'
import filters from '../filters.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import * as types from '../store/types.js'

export default {
    computed: {
        ...mapGetters(['todos','editedTodo', 'visibility', 'filteredTodos'])
    },
    methods: {
      ...mapMutations(['removeTodo', 'editTodo', 'cancelEdit']),
      ...mapActions(['doneEdit'])
    },
    directives: {
        'todo-focus': (el, value) => {
                if(value) el.focus()
        }
    }
}
</script>
