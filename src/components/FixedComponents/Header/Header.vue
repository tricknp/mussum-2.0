<template>
    
    <header class="head">
        <div class="header-container">
            <router-link :to="{path:'/'}"> 
                <img :src="logo" id="logo">
            </router-link>
            
            <div class="center-header">
                <Search  />
                <NavList />
            </div>
            
            <MenuBar />
        </div>

    </header>
    
</template>

<script>
import MenuBar from './MenuBar'
import NavList from './NavList'
import Search from './Search'

export default {
  name: 'Header',
  
  components:
  {
      MenuBar,
      NavList,
      Search,
  },

  data(){
      return{
          logo: '../../../../static/images/mussum2.0.png'
      };
  }
  

}
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>


