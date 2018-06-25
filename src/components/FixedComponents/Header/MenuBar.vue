<template>
  <div>
    <vue-progress-bar></vue-progress-bar>

    <dropdown>
      <a v-if='isLoged'>
        <span class="span-nav-photo">
          <Arrow class="arrow" />
          <img v-if="img" class="nav-teacher-photo" :src="`data:image/png;base64,${img}`">
        </span>
      </a>

      <a v-else>
        <span>
          <IconNavbar />
        </span>
      </a>
      <div slot="content" id="dropdown-content">
        <menus>

          <menu-item v-for="item in items"  :key="item.name">
            <a href="#" >
              {{ item.name }}
              <img v-if="img" class="teacher-photo" :src="`data:image/png;base64,${img}`">
            </a>
          </menu-item>

          <div class="divider"></div>

          <menu-item v-if='isLoged'>
            <h1 v-on:click='signOut'> Sign Out </h1>
          </menu-item>
          <menu-item v-else>
            <router-link :to="{ name: 'login' }"> Login </router-link>
          </menu-item>

        </menus>
      </div>

    </dropdown>

  </div>

</template>


<script>
import IconNavbar from '../../_utils/Svgs/IconNavbar'
import Arrow from '../../_utils/Svgs/IconArrowDown'
import {url} from '../../_mixins/url'
import axios from 'axios'

export default {

  name: "Navbar",

  components: { IconNavbar, Arrow },

  mixins: [ url ],

  data() {
    return {
      showModal: false,
      items: [
        { name: "BlackBoard" },
        { name: "Portal do Aluno" },
        { name: "Faculdade Senac" },
        { name: "Administrador"}
      ],
      username: '',
      img: '',

    };
  },

  computed: {
    isLoged: function() {
      const localSize = localStorage.length;
      this.username = localStorage.getItem('username');

      return localSize > 1;
    }
  },

  created(){
    this.getPhoto()
  },

  methods: {
    signOut: function() {
      localStorage.clear();
      this.$router.push("/");
    },

    getPhoto() {
      this.$Progress.start()
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: localStorage.username }
        })
        .then((res) => {
          this.img = res.data;
          this.$Progress.finish()
        })
        .catch(err => {
          this.$Progress.fail()
        })
    }

  },

};
</script>

<style>
.nav-teacher-photo
{
  width: 37px;
  border-radius: 50px;
}

.arrow
{
  margin-top: 15%;
}
</style>
