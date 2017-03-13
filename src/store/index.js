import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../storage'
import filters from '../filters.js'
import * as types from './types'
import plugins from './plugin.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: storage.fetch(),
    visibility: 'all',
    editedTodo: ''
  },
  mutations: {
    [types.ADD_TODO]: (state, todo)  => {
      state.todos.push({
        id: storage.uid++,
        title: todo,
        completed: false
      })
    },
    [types.REMOVE_COMPLETED_TODO]: (state) => {
        state.todos = filters.active(state.todos)
    },
    removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTodo(state, todo) {
        state.beforeEditCache = todo.title
        state.editedTodo = todo
    },
    cacelEdit(state, todo){
        state.editedTodo = null
        todo.title = state.beforeEditCache
    },
    toggleAll(state, completed) {
      state.todos.forEach(todo => todo.completed = completed)
    },
  },
  actions: {
    doneEdit({commit, state}, todo) {
        if(!state.editedTodo) return
        state.editedTodo = null
        todo.title = todo.title.trim()
        if(!todo.title) {
          commit("removeTodo", todo)
        }
    },
    addTodo({commit, state}, evt) {
      let newTodo = evt.target.value
      let todo = newTodo && newTodo.trim()
      if(!todo) return
      commit(types.ADD_TODO, todo)
      evt.target.value = null
    }
  },
  getters: {
    allChecked: (state, getters) => {
      return state.todos.every(todo => todo.completed)
    },
    remaining: (state, getters) => {
      return filters.active(state.todos).length
    },
    visibility: (state, getters) => {
      return state.visibility
    },
    todos: (state, getters) => {
      return state.todos
    },
    filteredTodos(state, getters) {
        return filters[state.visibility](state.todos)
    },
    editedTodo(state, getters) {
      return state.editedTodo
    }
  },
  plugins
})
