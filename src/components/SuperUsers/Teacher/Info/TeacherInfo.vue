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
import Photo from "./Components/Photo";
import Description from "./Components/Description";
import Tabs from "./Tabs/Tabs";
//Usar rotas dinamicas para diferenciar os componentes do usuário professor e aluno

export default {
  name: "Info",

  components: {
    Photo,
    Description,
    Tabs
  },

  data() {
      console.log("Nome da Rota: " + this.$route.params.targetName);
    return {
      title: "Professoris"
    };
  }
};
</script>
