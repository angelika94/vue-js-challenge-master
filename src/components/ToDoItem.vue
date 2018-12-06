<template>
  <li class="todo-item" :class="{'todo-item--checked': todo.checked}">
    <input :id="`index-${todo.id}`" class="todo-checkbox" type='checkbox' v-model="checked">
    <label :for="`index-${todo.id}`" class="todo-label">
        <span class="todo-text">
          {{todo.text}}
        </span>
        <time-ago :created-at="todo.createdAt" />
    </label>
    <button class="todo-button" @click="removeTodo">remove</button>
  </li>
</template>

<script>
import TimeAgo from './TimeAgo'

export default {
  name: 'ToDoItem',
  components: {TimeAgo},
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    checked: {
      get () {
        return this.todo.checked
      },
      set (checked) {
        this.$store.dispatch('updateTodo', {checked, id: this.todo.id})
      }
    }
  },
  methods: {
    removeTodo () {
      this.$store.dispatch('removeTodo', this.todo.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .todo-item
    padding .5rem
    display flex
    font-size 1rem
    transition .4s
    border-bottom 1px solid #eee
    &:hover
      .todo-button
        display: block

  .todo-label
    flex 1
    display flex
    align-items center
    cursor default
    &::before
      content ''
      margin-right .5rem
      flex-shrink 0
      width 2rem
      height 2rem
      display: block
      background-image url(../assets/not-checked.svg)
      background-repeat no-repeat
      background-position center
      background-size contain

  .todo-item--checked
    .todo-text
      text-decoration line-through
      color: #ADADAD
    .todo-label::before
      background-image url(../assets/checked.svg)

  .todo-button
    color: rgba(0,0,0,.7)
    font-weight 300
    outline-width: 0
    border none
    background-color transparent
    cursor pointer
    border-radius 2px
    font-size .8rem
    display none

  .todo-checkbox
    display: none
</style>
