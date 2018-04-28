<template>
  <div>
    <h1>LOGIN</h1>
    <form  v-on:submit.prevent="onSubmit" method="POST">
      <label>
        <input type="text" v-model="username" placeholder="username">
      </label>
      <label>
        <input type="password" v-model="password" placeholder="Password">
      </label><br>
      <button type="submit">Login</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "FormLogin",

  data() {
    return {
      form: {},
      username: "",
      password: ""
    };
  },

  methods: {
    onSubmit() {
      axios
        .post(
          "http://www.mocky.io/v2/5ae3d1e33100004c0d083f3a",
          this.username,
          this.password,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" } //Send the information through an AJAX equest
          }
        )
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          const role = response.data.role;

          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
          localStorage.setItem("role", role);

          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
