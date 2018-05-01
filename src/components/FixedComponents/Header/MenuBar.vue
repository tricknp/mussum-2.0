<template>
  <div>  
  
    <dropdown>

      <a>
        <span><img id="menubar-icon" src="../../../assets/images/menu-bar.svg"></span>
      </a>
      
      <div slot="content" id="dropdown-content">  
        <menus>
          
          <menu-item v-for="item in items"  :key="item.name">
            <a href="#" > 
              {{ item.name }} 
            </a>
          </menu-item>

          <div class="divider"></div>
          
          <menu-item> 
            <router-link :to="{ name: 'login' }"> Login </router-link>
          </menu-item>

        </menus>
      </div>
   
    </dropdown> 

  </div> 
   
</template>


<script>
export default {
  name: 'Navbar',
  
data(){
  return{
    items: 
    [
      { name: 'BlackBoard' },
      { name: 'Portal do Aluno' },
      { name: 'Faculdade Senac' },
    ],

    links: 
    [
      { url: 'https://senac.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_6_1' },
      { url: 'https://www.senacrs.com.br/meusenac_login.asp' },
      { url: 'https://www.senacrs.com.br/' }
    ]
  
  };
},

}
</script>
