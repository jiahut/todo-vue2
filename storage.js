export default {
  STORAGE_KEY:  "vue-todo2",
  uid: 0,
  fetch() {
    let todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
    todos.forEach((todo, index) => {
      todo.id = index
    })
    this.uid = todos.length
    return todos
  },
  save(todos) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
  }
}
