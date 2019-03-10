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
    <AddForum v-on:add-forum="addForum" />
    <Forums v-bind:forums="forums" v-on:del-forum="deleteForum" /> 
    
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
import AddForum from '../components/AddForum.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Forums,
    AddForum,
    // HelloWorld
  },
  data() {
    return {
      forums: [
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
      .then(res => this.forums = this.forums.filter(forum => forum.id !== id))
      .catch(err => console.log(err))
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addForum(newForum){
      const {title, completed} = newForum;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
        })
        .then(res => this.forums = [...this.forums, res.data])
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
    axios.get('http://localhost:3000/get-all-post')
    .then(res => {
      console.log(res.data)
      this.forums = res.data
    })
    .catch(err => console.log(err))
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // .then(res => {
    //   console.log(res.data)
    //   this.forums=res.data
    // })
    // .catch(err => console.log(err))
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
