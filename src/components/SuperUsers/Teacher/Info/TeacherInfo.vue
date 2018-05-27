<template>
  <div v-if='isProfessor' class="teacher-profile">

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
//private views, only be acessed when the teacher is logged
import PrivatePhoto from "../PrivateViews/Photo"
import PrivateDescription from "../PrivateViews/Description"
import PrivateTabs from "../PrivateViews/Tabs/Tabs"

//public views, everybody without token can see this content
import PublicPhoto from "../PublicViews/Photo"
import PublicDescription from "../PublicViews/Description"
import PublicTabs from "../PublicViews/Tabs/Tabs"

import auth from "../../../../services/auth";

export default {
  name: "Info",

  components: {
    PrivatePhoto,
    PrivateDescription,
    PrivateTabs,
    PublicPhoto,
    PublicDescription,
    PublicTabs
  },
  computed: {
    isProfessor: function() {
      if (auth.getNome() !== null && auth.getRole() !== null) {
        const nome = auth.getNome().toLowerCase();
        const role = auth.getRole();

        return role == "professor" && nome == this.$route.params.targetName;
      }
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
