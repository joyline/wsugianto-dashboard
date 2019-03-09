<!-- // <template> -->
<!-- //   <div class="home"> -->
<!-- //     <img alt="Vue logo" src="../assets/logo.png"> -->
<!-- //     <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- //   </div> -->
<!-- // </template> -->

<!-- // <script> -->
<!-- // // @ is an alias to /src -->
<!-- // import HelloWorld from '@/components/HelloWorld.vue' -->

<!-- // export default { -->
<!-- //   name: 'home', -->
<!-- //   components: { -->
<!-- //     HelloWorld -->
<!-- //   } -->
<!-- // } -->
<!-- // </script> -->

<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- {{msg}} -->
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> 
    
    <!-- header -->
        <!-- add post -->
        <!-- delete post -->
        <!-- update post -->
    <!-- forum -->



    <!-- <Header /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from '../components/layout/Header.vue';
import Forums from '../components/Forums.vue';
import AddTodo from '../components/AddTodo.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Forums,
    AddTodo,
    // HelloWorld
  },
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   title: "todo 1",
        //   completed: true,
        // },
        // {
        //   id: 2,
        //   title: "todo 2",
        //   completed: false,
        // },
        // {
        //   id: 3,
        //   title: "todo 3",
        //   completed: false,
        // }
      ]
    }
  },
  methods: {
    deleteTodo(id){
      console.log('Home', id);
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(err => console.log(err))
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
        })
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err))
      // this.todos = [...this.todos, newTodo];
    },
    updateForum() {
      
    },
    createForum() {

    },
    deleteForum() {

    },

  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos=res.data)
    .catch(err => console.log(err))
  },

}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;

  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
