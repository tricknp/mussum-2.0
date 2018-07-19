<template>
  <div>
    <dropdown>
      <a v-if='isLoged'>
        <span class="span-nav-photo">
          <Arrow class="arrow-header" />
          <img v-if="img" class="nav-teacher-photo" :src="`data:image/png;base64,${img}`">
          <img v-else     class="nav-teacher-photo" :src="defaultImg">
        </span>
      </a>

      <a v-else>
        <span>
          <IconNavbar />
        </span>
      </a>
      <div slot="content" id="dropdown-content">
        <menus>

          <span v-if="isAdmin">
            <router-link :to="{ path: '/admin' }">
              <a> Admin </a>
            </router-link>
          </span>

          <span v-if='isLoged'>
            <router-link :to="{ path: '/' }">
              <a @click='signOut'> Sair </a>
            </router-link>
          </span>


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
      username: '',
      img: '',
      defaultImg: '../../../static/images/blackNwhite.jpeg',
    };
  },

  computed: {
    isLoged: function() {
      const localSize = localStorage.length;
      this.username = localStorage.getItem('username');
      return localSize > 1;
    },

    isAdmin: function(){
      if (localStorage.role == 'admin') {
        return true
      }else{
        return false
      }
    }
  },

  created(){
    this.getPhoto()
  },

  methods: {
    signOut() {
      localStorage.clear()
      this.$router.push('/')
    },

    getPhoto() {
      if (this.isLoged) {
        axios
          .get(`${this.BASE_URL}api/photo`, {
            headers: { professor: localStorage.username }
          })
          .then((res) => {
            this.img = res.data;
          })
        }
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
