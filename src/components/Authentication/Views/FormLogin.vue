<template>
  <div>
    <form>
      <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" class="form-control" v-model="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="form-control" v-model="password">
      </div>
      <div>
        <button type="submit" @click.prevent="login">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "FormLogin",

  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:8080/login", //(Need to create a fake server to test) Still there is no Post for login route.
          { username: this.username, password: this.password }, //Send the user unformation from back to validate
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        ) //Send the information through an AJAX equest
        .then(response => {
          const token = response.data.token;
          const base64Url = token.split(".")[1];
          const base64 = base64Url.replace("-", "+").replace("_", "/"); //Split and replace token elements just for  better visualization at console
          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
