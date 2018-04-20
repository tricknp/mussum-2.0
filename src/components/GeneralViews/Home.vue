<template>
  <section>
      <Header />
      <Aside />
      <Footer />
  </section>
</template>
 

<script>
import Header from '../FixedComponents/Header/Header'
import Aside from '../FixedComponents/Aside/Aside'
import Footer from '../FixedComponents/Footer/Footer'

export default {
  name: 'Home',

  components: { Header, Aside, Footer },


}
</script>
