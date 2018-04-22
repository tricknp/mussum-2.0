<template>
  <div>  
    <dropdown trigger="hover">

      <a>
        <span><img class="menubar-icon" src="../../../assets/images/menu-bar.svg"></span>
      </a>
      
      <div slot="content">
      
        <menus>
          <menu-item v-for="item in items" :key="item.x">{{ item.x }}</menu-item>
          <div class="divider"></div>
          <menu-item icon="">Login</menu-item>       
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
     {x: 'test1'},
     {x: 'test2'},
     {x: 'test3'},
   ],
  
  };
},

}
</script>
