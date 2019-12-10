<template>
  <div id="app">
    <AddTodo/>
    <FilterTodos/>
    <Todos/>
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue"
import AddTodo from "@/components/AddTodo.vue";
import FilterTodos from "@/components/FilterTodos.vue"
export default {
  name: 'app',
  components:{
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
body{
  background-color: #cccccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 1100px;
  margin: 60px auto;
}
h3{
  padding: 10px;
  margin: 0;
}
</style>
