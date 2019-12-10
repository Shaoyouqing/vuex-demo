import axios from 'axios';

const state = {
  todos:[]
}
const getters = {
    giveState(state){
      return state.todos;
    }
}
const mutations = { 
  setTodos(state,todos){
    state.todos=todos;
  },
  saveTodo(state,todo){
    state.todos.unshift(todo);
  },
  removeTodo(state,id){
    state.todos=state.todos.filter(item=>item.id!==id)
  },
  filterTodos(state,todos){
    state.todos=todos
  }
}
const actions = {
  async getAllTodos({ commit }){
    const res = await axios.get('http://jsonplaceholder.typicode.com/todos');
    commit("setTodos",res.data);
  },
  async addTodo({ commit },todo){
    const res=await axios.post('http://jsonplaceholder.typicode.com/todos',todo);
    commit('saveTodo',res.data)
  },
  async deleteTodo({commit},id){
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo',id)
  },
  async selectTodos({commit},$event){
    //Get selected number
    window.console.log($event.target.options)
    const limit=parseInt($event.target.options[$event.target.options.selectedIndex].innerText)
    const res= await axios.get('http://jsonplaceholder.typicode.com/todos?_limit='+limit)
    commit('filterTodos',res.data)
  }
}
export default { state, getters, mutations, actions }