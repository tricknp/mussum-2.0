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
    top: 1em;
    width: 1.2em;
    height: 1.5em;
    fill: #ddd;
}

.icon-alert:hover{
    fill: #fff;
    transition: ease-in .15s;
}
</style>
