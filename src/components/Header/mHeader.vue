<template>
  <header class="head">
    <nav class="navigation">
  
      <img class="logo" src="../../../static/logo.svg">
  
      <div class="search">
        <input type="text" id="" placeholder="Procuraris">
        <img src="#" alt="">
      </div>
        
      <NavList></NavList>
      <Navbar></Navbar>
      
    </nav>
  </header>
</template>


<script>

import Navbar from './Navbar.vue'
import NavList from './NavList.vue'

const linkHorarios = 'https://docs.google.com/spreadsheets/d/1eh4vz5QlTYqHdMzX36_a_UF6xhJ5HvazfKGMiBt_zeU/edit?usp=sharing';

export default {
  name: 'mHeader',

  components: 
  {
    Navbar,
    NavList
  },


}
</script>
