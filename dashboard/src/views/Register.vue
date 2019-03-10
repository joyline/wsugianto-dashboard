<template>
  <div class="register">
    <h1>This is Register Page</h1>
    <form action="" method="post">
      first name: <input type="text"  v-model="firstName"> 
      <br>
      last name: <input type="text" v-model="lastName"> 
      <br>
      email: <input type="email" name="" id="email" v-model="email"> 
      <br>
      password: <input type="password" name="" id="password" v-model="password"> 
      <br>
      <router-link to="/">
        <a v-on:click="register()" >Register Now !</a>
      </router-link>

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
    register(){
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
      // console.log(newUser)
      // console.log("masuk method")
      // const {firstName, lastName, email, password} = newUser;
      if(this.firstName != "" && this.lastName != "" && this.email != "" && this.password !="") {
        // console.log("masuk if")
        console.log(newUser)

        // axios.post(`http://localhost:3000/register`, {
        //   newUser
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        
        // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
        const qs = require('qs');

        // const options = {
        //   method: 'POST',
        //   headers: { 'content-type': 'application/json' },
        //   data: newUser,
        //   url: 'http://localhost:3000/register',
        // };

        // axios(options)
        // .then(response => {
        //   console.log(response)
        // })
        // .catch(error => {
        //   console.log(error)
        // })

        const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

        console.log(newUser)
        console.log(qs.stringify(newUser))

        axios.post('http://localhost:3000/register',
        qs.stringify(newUser), config
        )
        // location.reload()
      } else {
        // location.reload()
        return "false"
      }
    },
  },
}
</script>

<style scoped>

</style>
