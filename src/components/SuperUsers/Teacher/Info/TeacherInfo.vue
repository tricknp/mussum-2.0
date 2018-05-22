<template>
  <div v-if='isProfessor' class="teacher-profile">

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
  <div v-else class="teacher-profile">

     <h1 class="title-teacher"> {{ title }} </h1>

     <div class="info-teacher">
        <div class="desc-photo">
            <PublicPhoto />
            <PublicDescription /> 
        </div>
        <div class="info-content">
           <PublicTabs />
        </div>
     </div>

  </div>
</template>


<script>
import Photo from "./Components/Photo";
import Description from "./Components/Description";
import Tabs from "./Tabs/Tabs";
//Componentes temporários para teste
import PublicPhoto from "./Components/PublicTeacher/publicPhoto";
import PublicDescription from "./Components/PublicTeacher/publicDescription";
import PublicTabs from "./Components/PublicTeacher/publicTabs";

export default {
  name: "Info",

  components: {
    Photo,
    Description,
    Tabs,
    PublicPhoto,
    PublicDescription,
    PublicTabs
  },
  computed: {
    isProfessor: function() {
      const nome = localStorage.getItem("nome").toLowerCase();
      const role = localStorage.getItem("role");

      return role == "professor" && nome == this.$route.params.targetName;
    }
  },

  data() {
    console.log("Nome da Rota: " + this.$route.params.targetName);
    return {
      title: "Professoris"
    };
  }
};
</script>
