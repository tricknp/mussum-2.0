<template>
  <section>      
      
      <Header />
      
      <div class="teacher-profile">

        <h1 class="title-teacher"> {{ title }} </h1>
        
        <div class="info-teacher">
           <div class="desc-photo">
               <PrivatePhoto />
               <PrivateDescription /> 
           </div>
           <div class="info-content">
              <PrivateTabs />
           </div>
        </div>
  
     </div>

      <Footer />

  </section>
</template>

<script>
import Header from "../../FixedComponents/Header/Header";
import Footer from "../../FixedComponents/Footer/Footer";

import PrivatePhoto       from  "./components/Photo"
import PrivateDescription from  "./components/Description"
import PrivateTabs        from  "./components/Tabs/Tabs"
import PrivateAside       from  './components/Aside/Aside'

export default {
  name: "Teacher",

  components: 
  { 
    Header, 
    Footer,
    PrivatePhoto,
    PrivateDescription,
    PrivateTabs,
    PrivateAside,
  },

  data(){
    return{
      title: 'Professoris'
    }
  }

}
</script>
