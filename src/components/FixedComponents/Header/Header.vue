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

        <router-link :to="{path: '/form'}"> 
            <IconAlert />
        </router-link>

    </header>
    
</template>

<script>
import MenuBar from './MenuBar'
import NavList from './NavList'
import Search from './Search'
import IconAlert from '../../_utils/Svgs/IconAlert'

export default {
  name: 'Header',
  
  components:
  {
      MenuBar,
      NavList,
      Search,
      IconAlert
  },

  data(){
      return{
          logo: '../../../../static/images/mussum2.0.png'
      };
  }
  

}
</script>

<style>
.icon-alert{
    position: absolute;
    right: .5%;
    top: 2.2%;
    width: 1.4em;
    fill: #ddd;
    border-radius: 50px;
}

.icon-alert:hover{
    fill: rgba(190, 46, 46, 0.9);
    transition: ease-in .25s;
}
</style>


