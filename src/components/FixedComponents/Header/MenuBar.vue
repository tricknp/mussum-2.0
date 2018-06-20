<template>
  <div>  
  
    <dropdown>
      <a v-if='isLoged'>
        <h1> {{ this.user.name }}</h1>
        
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

export default {
  name: "Navbar",

  components: { IconNavbar },
  data() {
    return {
      showModal: false,
      items: [
        { name: "BlackBoard" },
        { name: "Portal do Aluno" },
        { name: "Faculdade Senac" },
        { name: "Administrador"}
      ],
      user: {
        name: ''
      },

      img: '',
     
    };
  },

  computed: {
    isLoged: function() {
      const localSize = localStorage.length;
      this.user.name = localStorage.getItem('nome');
      return localSize > 1;
    }
  },
  
  methods: {
    signOut: function() {
      localStorage.clear();
      this.$router.push("/");
    },

    getPhoto() {
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.$route.params.targetName }
        })
        .then((res, err) => {
          //let f = res.data
          //this.$refs.photo.src = `data:image/png;base64,${f}`;
          //this.img = this.$refs.photo
          this.img = res.data;
        })
    }

  },

};
</script>
