<template>
  <section class="todoapp" >
    <todo-head :todos="todos" :remaining="remaining" ></todo-head>
    <todo-body :todos="todos" :visibility="visibility" ></todo-body>
    <todo-foot :todos="todos" :remaining="remaining" :visibility="visibility"></todo-foot>
  </section>
</template>

<script>
  import TodoHead from './todohead.vue'
  import TodoBody from './todobody.vue'
  import TodoFoot from './todofoot.vue'
  import storage from '../storage.js'
  import filters from '../filters.js'

  export default {
    watch: {
        todos: {
            handler(todos) {
               storage.save(todos)
            },
            deep: true
        }
    },
    data() {
        return {
            todos: storage.fetch(),
            visibility: 'all'
        }
    },
    computed: {
        remaining() {
            return filters.active(this.todos).length
        }
    },
    components: {
        TodoHead,
        TodoBody,
        TodoFoot
    },
    created() {
        this.$on('removeCompleted', () => {
            this.todos = filters.active(this.todos)
        })
        window.addEventListener('hashchange',() => {
            let visibility = window.location.hash.replace(/#\/?/, '')
            console.log(visibility)
            if(!filters[visibility]){
                visibility = 'all'
            }
            this.visibility = visibility
        })
    }
}
</script>
