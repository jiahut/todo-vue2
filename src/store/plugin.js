import storage from '../storage.js'
const localStoragePlugin = store => {
   store.subscribe((mutation, { todos }) => {
     storage.save(todos)
  })
}
export default [localStoragePlugin]
