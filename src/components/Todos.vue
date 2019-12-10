<template>
  <div>
    <h1>Todos</h1>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span>=Incomplete
      </span>
      <span>
        <span class="complete-box"></span>=Complete
      </span>
    </div>
    <div class="todos">
      <div 
      class="todo" 
      v-for="todo in todos" 
      v-bind:key="todo.id"
      @dblclick="switchCompleted(todo)" 
      v-bind:class="{'is-complete':todo.completed}">
      {{todo.title}}
      <i @click="deleteTodo(todo.id)" class="iconfont icon-delete"></i>
      </div>
    </div> 
  </div>
</template>

<script>

import { mapGetters ,mapActions} from "vuex"
export default {
  name:'Todos',
  computed:mapGetters({
    todos:"giveState"
  }),
  methods:{
    ...mapActions(['getAllTodos',"deleteTodo","updateTodo"]),
    switchCompleted(todo){
      window.console.log(todo.completed);
      const updTodo={
        id:todo.id,
        title:todo.title,
        completed:!todo.completed
      };
      window.console.log(updTodo.completed);
      this.updateTodo(updTodo);
    }
  },
  created() {
    this.getAllTodos();
  },
  // created() {
  //   this.$store.dispatch("getAllTodos")
  // },
  
  // computed:{
  //   todos(){
  //     window.console.log(this.$store.getters.getAllTodos)
  //     return this.$store.getters.getAllTodos
  //   }
  // }
}
</script>

<style scoped>
  .todos{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
  }
  .todo{
    background: #41b883;
    padding: 10px;
    border: 1px solid #41b883;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    color: white;
  }
  i{
    position: absolute;
    /* bottom: 10px; */
    vertical-align: middle;
    right: 5px;
    color: purple;
    cursor: pointer;
  }
  .legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 2px;
  }
  .complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #35495e;
  }
  .incomplete-box{
   display: inline-block;
   width: 10px;
   height: 10px;
   background-color: #41b883; 
  }
  .is-complete{
    background-color: #35495e;
    color: #fff;
  }
  @media (max-width: 500px){
    .todos{
       grid-template-columns:1fr;
    }
  }
</style>