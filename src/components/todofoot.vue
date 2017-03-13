<template>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{ remaining}} </strong> {{ remaining | pluralize }} left
    </span>
    <ul class="filters">
      <li><a href="#/all" :class="{ selected: visibility == 'all'}">All</a></li>
      <li><a href="#/active" :class="{ selected: visibility == 'active'}">Active</a></li>
      <li><a href="#/completed" :class="{ selected: visibility == 'completed'}">Completed</a></li>
    </ul>
    <button class="clear-completed"
            @click="removeCompleted"
            v-show="todos.length > remaining">
      Clear completed
    </button>
  </footer>
</template>

<script>

import storage from '../storage.js'
import filters from '../filters.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import * as types from '../store/types.js'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility', 'remaining'])
  },
  filters: {
    pluralize(n) {
      return n === 1? 'item' : 'items'
    }
  },
  methods:{
    ...mapMutations(['removeCompleted'])
  }
}
    </script>
