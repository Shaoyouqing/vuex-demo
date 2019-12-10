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
  changeTodo(state,updTodo){
    const index =state.todos.findIndex(item=>item.id==updTodo.id);
    if(index!==-1){
      state.todos.splice(index,1,updTodo)
    }
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
    const limit=parseInt($event.target.options[$event.target.options.selectedIndex].innerText)
    const res= await axios.get('http://jsonplaceholder.typicode.com/todos?_limit='+limit)
    commit('setTodos',res.data)
  },
  async updateTodo({commit},updTodo){
    const res = await axios.put(`http://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
    commit('changeTodo',res.data)
  }
}
export default { state, getters, mutations, actions }