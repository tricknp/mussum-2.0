<template>
    
    <header class="head">
        <router-link :to="{path:'/'}"> 
            <img :src="logo" id="logo">
        </router-link>
        
        <div class="search">
            <input type="text" class="input-search" placeholder="Procuraris">
            <!--<i class="material-icons" id="search-icon">search</i>-->
        </div>
            
        <NavList class="nav-list"></NavList>
        <MenuBar />

    </header>
    
</template>

<script>
import MenuBar from './MenuBar'
import NavList from './NavList'

export default {
  name: 'Header',
  
  components:
  {
      MenuBar,
      NavList,
  },

  data(){
      return{
          logo: '../../../../static/logo.svg'
      };
  }
  

}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>


