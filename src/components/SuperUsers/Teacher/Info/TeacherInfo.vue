<template>
  <div class="teacher-profile">

     <h1 class="title-teacher"> {{ title }} </h1>

     <div class="info-teacher">
        <Photo />
        <Description /> 
         
        <nav>
           <Directories />
           <Scrap />
           <About />
        </nav>
     </div>

  </div>
</template>


<script>
import Photo from './Components/Photo'
import Description from './Components/Description'
import Directories from './Components/Directories'
import Scrap from './Components/Scrap'
import About from './Components/About'

export default {
  name: 'Info',
  
  components: 
  {
      Photo,
      Description,
      Directories,
      Scrap,
      About
  },

  data(){
      return{
          title: 'Professoris',
      }
  },

}
</script>
