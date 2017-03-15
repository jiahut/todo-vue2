<template>
  <section class="todoapp" >
    <todo-head ></todo-head>
    <todo-body ></todo-body>
    <todo-foot ></todo-foot>
  </section>
</template>

<script>
  import TodoHead from './todohead.vue'
  import TodoBody from './todobody.vue'
  import TodoFoot from './todofoot.vue'
  import storage from '../storage.js'
  import filters from '../filters.js'

  export default {
    components: {
        TodoHead,
        TodoBody,
        TodoFoot
    },
    // created() {
    //     window.addEventListener('hashchange',() => {
    //         let visibility = window.location.hash.replace(/#\/?/, '')
    //         if(!filters[visibility]){
    //             visibility = 'all'
    //         }
    //         this.$store.state.visibility = visibility
    //     })
    // }
}
</script>
