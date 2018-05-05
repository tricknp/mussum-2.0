<template>
  <div>
    <Home class="login"></Home>

    <modal v-if="showModal" 
        @close="showModal = false">

        <img :src="senacLogo" slot="header" id="senac-logo">
        
        <form slot="content" class="form-login">
          <input type="text" v-model="username" name="username" placeholder="username">
          <input type="password" v-model="password" name="password" placeholder="Password">
        </form>  

        <div slot="subContent">
            <button type="submit" class="btn-login" @click.prevent="onSubmit">ENTRAR</button>
        </div>

        <div slot="footer" class="small-messages">
          <p>Esqueceu sua senha?</p>
          <p></p>
        </div>
    </modal>

  </div>
</template>

<script>
import axios from "axios";
import Header from "../FixedComponents/Header/Header";
import Modal from "../UIComponents/Modal";
import Home from "../GeneralViews/Home";

export default {
  name: "Login",

  components: {
    Modal,
    Home
  },

  data() {
    return {
      showModal: true,
      senacLogo: "../../../static/senac-logo.png",
      username: "",
      password: ""
    };
  },

  methods: {
    onSubmit() {
      let data = JSON.stringify({
        username: this.username,
        password: this.password
      });
      axios
        .post("http://mussum2api.herokuapp.com/login", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          } //Send the information through an AJAX request
        })
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          const role = response.data.role; //Receive the role to provide the correct access to the protectec content
          console.log(token);
          console.log(role);
          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
          localStorage.setItem("role", role);
          console.log(response);

          if (role == "admin" || role == "professor") {
            return this.$router.push(`/${role}`);
          }
          return this.$router.push("/");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
