<template>
  <div>
    <h1>LOGIN</h1>
    <form  @submit.prevent="onSubmit">
        <input type="text" v-model="username" name="username" placeholder="username">
        <input type="password" v-model="password" name="password" placeholder="Password">
        <input type="submit">Login
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "FormLogin",

  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    onSubmit() {
      
      let data = JSON.stringify({
        username: this.username,
        password: this.password
      })

      axios
        .post(
          'http://mussum2api.herokuapp.com/login', data, {
            headers: { 
              'X-Requested-With': 'XMLHttpRequest', 
              'Content-Type': 'application/json'
            }, //Send the information through an AJAX request
          }
        )
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          const role = response.data.role;
          console.log(token)

          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
          localStorage.setItem("role", role);

          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
