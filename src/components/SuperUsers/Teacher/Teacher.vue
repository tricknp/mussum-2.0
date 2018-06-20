<template>
  <section class="teacher-page" >      
       
      <Header />

      <div class="teacher-page-content">

        <div class="teacher-profile">

            <div class="info-teacher">
               <div class="container">
                   <PrivatePhoto />
                   <PrivateDescription /> 
               </div>

               <div class="info-content">
                  <PrivateTabs />
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

import PrivatePhoto       from "./PrivateViews/Photo";
import PrivateDescription from "./PrivateViews/Description";
import PrivateTabs        from "./PrivateViews/Tabs/Tabs";


export default {
  name: "Teacher",

  components: 
  {
     Header, 
     Footer,
     Aside,
     PrivatePhoto,
     PrivateDescription,
     PrivateTabs,
  },  

  data(){
    return{
      title: 'Professoris'
    }
  }

}
</script>
