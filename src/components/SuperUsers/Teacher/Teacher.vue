<template>
  <section>      
      <Header />
      <Info />
      <Footer />
  </section>
</template>

<script>
import Header from "../../FixedComponents/Header/Header";
import Info from "./Info/TeacherInfo";
import Footer from "../../FixedComponents/Footer/Footer";

export default {
  name: "Teacher",

  components: { Header, Info, Footer },

}
</script>
