<template>
  <section class="teacher-page" >

      <Header />

      <div class="teacher-page-content">

        <div class="teacher-profile">

            <div class="info-teacher">
               <div class="container">
                   <Photo />
                   <Description />
               </div>

               <div class="info-content">
                  <Tabs />
               </div>
            </div>
        </div>

          <Aside />
      </div>

      <Footer />

  </section>
</template>

<script>
import Header from "../../FixedComponents/Header/Header";
import Footer from "../../FixedComponents/Footer/Footer";
import Aside  from '../../FixedComponents/Aside/Aside';

import Photo       from "./Components/Photo";
import Description from "./Components/Description";
import Tabs        from "./Components/Tabs/Tabs";


export default {
  name: "Teacher",

  components:
  {
     Header,
     Footer,
     Aside,
     Photo,
     Description,
     Tabs,
  },

  data(){
    return{
      title: 'Professoris'
    }
  }

}
</script>
