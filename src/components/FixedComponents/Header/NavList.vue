<template>
  <div class="nav-list">
      <dropdown trigger="hover">
        <button id="btn-nav-list"> Professoris </button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item
                id="dropdown-content"
                v-for="professor in professores"
                :key="professor.nome"
                :targetName="professor.username" >
                <router-link :to="{ path: '/professor/' + professor.username.toLowerCase() }" >
                  <a class="ass" @click="select(professor.username)">
                    {{ professor.nome }}
                  </a>
                </router-link>

            </menu-item>
          </menus>
        </div>
      </dropdown>

      <dropdown trigger="hover">
        <button id="btn-nav-list">Links</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="link in links" :key="link.id">
                <a :href="link.url" target="_blank"> {{ link.titulo }} </a>
            </menu-item>
          </menus>
        </div>
      </dropdown>

      <dropdown trigger="hover">
        <button id="btn-nav-list">Horaris</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="horario in horarios" :key="horario.id">
                <a :href="horario.url" target="_blank"> {{ horario.titulo }} </a>
            </menu-item>
          </menus>
        </div>
      </dropdown>

  </div>
</template>

<script>
import axios from "axios";
import { url } from "../../_mixins/url.js";
import auth from "../../../services/auth.js";

export default {
  name: "NavList",

  mixins: [url],

  props: {
    targetName: {
      type: Object | String
    }
  },

  data() {
    return {
      professores: '',
      horarios: '',
      links: ''
    };
  },

  created() {
    this.getTeachers();
    this.getLinks();
    this.getHours();

    if (auth.getUsername() == this.$route.params.targetName) {
      this.$bus.isOwner = true;
    } else {
      this.$bus.isOwner = false;
    }
  },

  methods: {
    getTeachers() {
      axios.get(this.BASE_URL + "api/professores").then(res => {
        this.professores = res.data
      })
    },

    getLinks(){
      axios.get(this.BASE_URL + "api/admlinks").then(res => {
        this.links = res.data
      })
    },

    getHours(){
      axios.get(this.BASE_URL + "api/horarios").then(res => {
        this.horarios = res.data
      })
    },

    select(obj) {
      this.targetName = obj;
    },

    select(username) {
      this.$route.params.targetName = username;
      this.$bus.$emit("selectProfessor", username);

      if (auth.getUsername() == username) {
        this.$bus.isOwner = true;
      } else {
        this.$bus.isOwner = false;
      }
    }
  },

};
</script>
