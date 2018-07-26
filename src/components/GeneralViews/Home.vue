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
  
  components: { Header, Aside, Footer, Feed },


}
</script>
