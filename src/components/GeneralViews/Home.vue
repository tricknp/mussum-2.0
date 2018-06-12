<template>
  <section class="home">
      
      <Header />
      
      <div class="home-container">
        <Feed   />
        <Aside  />
      </div>
     
      <Footer />

  </section>
</template>
 

<script>
import Header from '../FixedComponents/Header/Header'
import Feed   from './Feed/Feed'
import Aside  from '../FixedComponents/Aside/Aside'
import Footer from '../FixedComponents/Footer/Footer'

export default {
  name: 'Home',

  components: { Header, Aside, Footer, Feed },


}
</script>

<style >
  .home
  {
    background-color: rgba(240, 240, 240, 0.966);
    width: 100%;
    height: 100vh;
  }
</style>

