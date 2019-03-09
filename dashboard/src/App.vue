<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="logged() == false" to="/login">Login</router-link> |
      <router-link v-if="logged() == false" to="/register">Register</router-link> | 
      <router-link v-if="logged() == true" to="/change-password">Change Password</router-link> | 
      <router-link v-on:click="logout()" v-if="logged() == true"  to="/"> <a href="/" v-on:click="logout">Logout</a> </router-link> | 
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "",
  components: "",
  methods: {
    logged() {
      console.log(localStorage.getItem('secretkey') != null)
      if(localStorage.getItem('secretkey') != null) {
        
        return true
      }
      else {
        return false
      }
    },
    logout() {
      localStorage.removeItem('secretkey')
      router.push('/')
    }
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
