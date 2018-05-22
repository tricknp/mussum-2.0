<template>
  <div>
    <Home class="login"></Home>

    <modal v-if="showModal" 
        @close="showModal = false">

        <div slot="header">
         <router-link :to="{ path: '/' }"> 
            <button class="btn-close-log">
              <svg class="icon-log" enable-background="new 0 0 348.333 348.334" version="1.1" viewBox="0 0 348.333 348.334" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="m336.56 68.611l-105.54 105.55 105.54 105.55c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769l-105.57-105.56-105.56 105.56c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.55-105.55-105.55c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.56 105.55 105.56-105.55c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145 6e-3 56.844z"/>
              </svg>
            </button>
          </router-link> 
          <img :src="senacLogo" id="senac-logo">
        </div>

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

  components: { Modal, Home },

  mixins: [url],

  data() {
    return {
      showModal: true,
      senacLogo: "../../../static/images/senac-logo.png",
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
      //mesmo quando não enviar o error enviar erro 401 e não 500
      axios
        .post("http://mussum2api.herokuapp.com/login", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          } //Send the information through an AJAX request
        })
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          const role = response.data.role;
          const name = response.data.name;

          console.log("============ TOKEN ============ ");
          console.log(token);
          console.log("============ NAME ============ ");
          console.log(name);
          console.log("============ ROLE ============ ");
          console.log(role);

          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
          localStorage.setItem("role", role);

          console.log(response);

          if (role === "professor") {
            localStorage.setItem("name", name);
            return this.$router.push(`professor/${name}`);
          } else if (role === "admin") {
            return this.$router.push(`/admin`);
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
