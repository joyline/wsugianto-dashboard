<template>
  <div class="login">
    <h1>This is Login Page ABC</h1>
    <form action="" method="post">
      email: <input type="email" name="" id="email" placeholder="email"  v-model="emails">
      <br>
      password: <input type="password" name="" id="password" placeholder="password" v-model="passwords">
      <br>
      <router-link to="/"><a v-on:click="login()">Login Now !</a></router-link>
      
      <!-- <button type="submit">Login</button> -->
    </form>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "",
  components: "",
  data() {
    return {
      user: [

      ]
    }
  },
  methods: {
    login(){
      const user = {
        email: this.emails,
        password: this.passwords,
      }
      // console.log(user)
      if(this.emails != "" && this.passwords != "") {
        const qs = require('qs');
        
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        // console.log(newUser)
        // console.log(qs.stringify(newUser))

        axios.post('http://localhost:3000/login',
        qs.stringify(user), config
        )
        .then(res => {
          let token = res.data.token
          let user = res.data.user
          console.log(token)
          console.log(user)
          localStorage.setItem('secretkey', token)
        })
        .catch(err => console.log(err))
        // router.push('/')
        // axios.post('http://localhost:3000/register', user)
      } else {
        return "false";
      }

    }
  },
}
</script>

<style scoped>

</style>
