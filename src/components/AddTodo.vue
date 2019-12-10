<template>
<div>
  <h3>Add Todo</h3>
  <form>  
    <input type="text" v-model="title" placeholder="Add Todo">
    <input type="button" @click="onSubmit"  value="Submit">
  </form>

</div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name:'AddTodo',
  data() {
    return {
      title:''
    }
  },
  methods:{
    ...mapActions(['addTodo']),
    onSubmit(){ 
      const todo={
        title:this.title,
        completed:false
      }
      this.addTodo(todo);
      this.title="";
    }
  }
}
</script>

<style scoped>
  form{
    display: flex;
  }
  input[type="text"]{
    flex: 10;
    border: 1px solid #41b883;
    padding: 10px;
    cursor: pointer;
  }
  input[type="button"]{
    background: #41b883;
    
    color: white;
    flex: 2;
  }
</style>