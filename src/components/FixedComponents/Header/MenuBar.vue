<template>
  <div>  
  
    <dropdown>
   <a v-if='isLoged'>
    <h1> {{ this.user.name }}</h1>
      </a>
      <a v-else>
        <span><img id="menubar-icon" src="../../../../static/images/icons/menu-bar.svg"></span>
      </a>
      
      <div slot="content" id="dropdown-content">  
        <menus>
          
          <menu-item v-for="item in items"  :key="item.name">
            <a href="#" > 
              {{ item.name }} 
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
export default {
  name: "Navbar",

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
    }
  },

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
      links: [
        {
          url:
            "https://senac.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_6_1"
        },
        { url: "https://www.senacrs.com.br/meusenac_login.asp" },
        { url: "https://www.senacrs.com.br/" }
      ]
    };
  }
};
</script>
