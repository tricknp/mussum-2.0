<template>
  <div>
    <Home class="login"></Home>

    <modal v-if="showModal" 
        @close="showModal = false">

        <div slot="header">
         <router-link :to="{ path: '/' }"> 
            <button class="btn-close-log">
              <IconDelete class="icon-log" />
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
          <h1 class="login-fail" v-show="fail">{{status}}</h1>
          <p @click="forgotPass" class="forgotPass"> Esqueceu sua senha? </p>
        </div>
    </modal>

  </div>
</template>

<script>
import axios from "axios";
import Header from "../FixedComponents/Header/Header";
import Modal from "../UIComponents/Modal";
import Home from "../GeneralViews/Home";
import { url } from "../_mixins/url";
import IconDelete from '../_utils/Svgs/IconDelete'

export default {
  name: "Login",

  components: { Modal, Home, IconDelete },

  mixins: [url],

  data() {
    return {
      showModal: true,
      senacLogo: "../../../static/images/senac-logo.png",
      username: "",
      password: "",
      status: "Usuário ou Senha Inválidos",
      fail: false
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
        .post(this.BASE_URL + "login", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          } //Send the information through an AJAX request
        })
        .then(response => {
          const token = response.data.token; //Receive the token back from the server
          const role = response.data.role;
          const nome = response.data.nome;
          const sobrenome = response.data.sobrenome;

          //console.log("============ ROLE ============ ");
          //console.log(role);

          localStorage.setItem("token", token); //Store the token to send it to the back whem an access is needed
          localStorage.setItem("role", role);
          localStorage.setItem("nome", nome);
          localStorage.setItem("username", this.username)
          

          if (role === "professor") {
            return this.$router.push(`professor/${this.username.toLowerCase()}`);
          } else if (role === "admin") {
            return this.$router.push(`/admin`);
          }
        })
        .catch( error => {
          console.log(error)
          this.fail = true
        });
    },

    forgotPass(){
      alert('Bem feitis!')
    }
  }
};
</script>

<style>
  .forgotPass
  {
    cursor: pointer;
  }
</style>

