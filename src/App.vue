<template>
  <div id="app">

      <mHeader></mHeader>    
   
      <!--<SideNav></SideNav> -->

  <!-- <router-view></router-view> -->

  </div>
</template>

<script>

import mHeader from '@/components/Header/mHeader.vue'
import SideNav from '@/components/Aside/SideNav.vue'

export default {
  name: 'App',

  components: 
  { 
    mHeader,
    SideNav 
  }, 
 
}
</script>