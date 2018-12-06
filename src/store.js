import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  addTodo: (state, payload) => {
    // add an id
    payload.id = state.todos.length
    state.todos.unshift(payload)
  },
  updateTodo: (state, payload) => {
    // find index of current item
    const todoIndex = state.todos.findIndex((todo) => {
      return payload.id === todo.id
    })

    // set a new value to the property
    state.todos[todoIndex].checked = payload.checked

    // sort an array (display not-checked items at the top of the list)
    state.todos.sort((x, y) => {
      return (x.checked === y.checked) ? 0 : x.checked ? 1 : -1
    })
  },
  removeTodo: (state, payload) => {
    // find index of current item
    const todoIndex = state.todos.findIndex((todo) => {
      return payload === todo.id
    })

    state.todos.splice(todoIndex, 1)
  }
}

export const actions = {
  addTodo: ({commit}, payload) => {
    commit('addTodo', payload)
  },
  updateTodo: ({commit}, payload) => {
    commit('updateTodo', payload)
  },
  removeTodo: ({commit}, payload) => {
    commit('removeTodo', payload)
  }
}

export const defaultState = {
  todos: [
    {
      id: 0,
      text: 'Think real hard about whats for lunch',
      checked: false,
      createdAt: new Date(Date.now() - 3600)
    },
    {
      id: 1,
      text: 'Buy some Pantos and start looking for Lambos',
      checked: false,
      createdAt: new Date(Date.now() - 7200)
    }
  ]
}

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions
})
