<template>
    
    <header class="head">
        <div class="div-icon-search">
            <router-link :to="{path:'/'}"> 
                <img :src="logo" id="logo">
            </router-link>
            
            <div class="search">
                <input type="text" class="input-search" placeholder="Procuraris">
                <!--<i class="material-icons" id="search-icon">search</i>-->
            </div>
         </div> 

        <NavList />
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
          logo: '../../../../static/images/logo.svg'
      };
  }
  

}
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>


