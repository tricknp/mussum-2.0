<template>

    <header class="head">
      <vue-progress-bar></vue-progress-bar>
        <div class="header-container">
            <router-link :to="{path:'/'}">
                <img :src="logo" id="logo">
                <img :src="shortLogo" class="short-logo">
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
          logo: '/../../../../static/images/mussum2.0.png',
          shortLogo: '/../../../../static/images/logo.svg'
      };
  }


}
</script>

<style>

.icon-alert{
    position: absolute;
    right: .5%;
    top: 1em;
    width: 1.2em;
    height: 1.5em;
    fill: #ddd;
}

.icon-alert:hover{
    fill: #fff;
    transition: ease-in .15s;
}

@media screen and (max-width: 600px){
  .icon-alert{
    display: none;
  }
}
</style>
