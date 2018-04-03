<template>
    
    <header class="head">
        <a href="#">
            <img src="../../../static/logo.svg" class="logo">
        </a>
        
        <div class="search">
            <input type="text" class="input-search" placeholder="Procuraris">
            <!--<i class="material-icons" id="search-icon">search</i>-->
        </div>
            
        <MenuBar></MenuBar>
        <NavList class="nav-list"></NavList>

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
  

}
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>


