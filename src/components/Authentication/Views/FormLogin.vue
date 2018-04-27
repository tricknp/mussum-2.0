<template>
  <div>
    <h1>LOGIN</h1>
    <P v-if="$route.query.redirect">
      Você precisa logar primeiro.
    </P>
    <form>
      <label>
        <input type="text" v-model="username" placeholder="E-mail">
      </label>
      <label>
        <input type="password" v-model="password" placeholder="Password">
      </label><br>
      <button type="submit" @click.prevent="login">Login</button>
      
      
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "FormLogin",

  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    logItIn() {
      axios
        .post("mussum2api.herokuapp.com/login", this.login, {
          headers: { "X-Requested-With": "XMLHttpRequest" } //Send the information through an AJAX equest
        })
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
        })
        .catch(error => console.log(error));
    } //Send the user information from back to validate
  }
};
</script>
