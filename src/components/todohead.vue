<template>
  <header class="header">
    <h1>todos</h1>
    <input class="toggle-all" type="checkbox" @change="toggleAll(!allChecked)" :checked="allChecked"/>
    <input class="new-todo"
           autofocus
           autocomplete="off"
           placeholder="What needs to be done?"
           @keyup.enter="addTodo($event)" />
  </header>
</template>

<script>
import storage from '../storage.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import * as types from '../store/types.js'

export default {
  computed: {
    ...mapGetters(['allChecked', 'remaining'])
  },
  methods: {
    ...mapMutations([ 'toggleAll']),
    ...mapActions(['addTodo'])
  }
}
</script>

<style>
  input.toggle-all{
  top: 10px;
  z-index: 1;
  }
</style>
