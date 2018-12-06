<template>
  <div class="todo-list">

      <to-do-input class='input'></to-do-input>

      <transition-group tag="ul" class='todo-items' v-if="todos && todos.length">
          <to-do-item v-for="todo in todos" :key="todo.createdAt.getTime()" :todo="todo"></to-do-item>
      </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem'

export default {
  name: 'ToDoList',
  computed: mapState(['todos']),
  components: {ToDoInput, ToDoItem}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .todo-list
    margin 0 auto
    max-width 600px
    background-color: #fff

  .todo-items
    margin 0
    padding 0
    display flex
    flex-direction column
    text-align left
    list-style none
</style>
