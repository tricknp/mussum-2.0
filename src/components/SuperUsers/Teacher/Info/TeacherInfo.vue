<template>
  <div class="teacher-profile">

     <h1 class="title-teacher"> {{ title }} </h1>

     <div class="info-teacher">
        <div class="desc-photo">
            <Photo />
            <Description /> 
        </div>
        <div class="info-content">
           <Tabs />
        </div>
     </div>

  </div>
</template>


<script>
import Photo from './Components/Photo'
import Description from './Components/Description'
import Tabs from './Tabs/Tabs'        

export default {
  name: 'Info',
  
  components: 
  {
      Photo,
      Description,
      Tabs
  },

  data(){
      return{
          title: 'Professoris',
      }
  },

}
</script>
