<template>
  <section>
      <Header></Header>
      <Aside></Aside>
      <Footer></Footer>
  </section>
</template>


<script>
import Header from './Header/Header'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'

export default {
  name: 'Home',

  components: 
  {
      Header,
      Aside,
      Footer,
  },
}
</script>
