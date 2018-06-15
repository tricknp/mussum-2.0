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
        <!--<PrivateAside />-->
  </div>

  <div v-else class="teacher-profile">
    
    <div class="left-teacher-profile">
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
    
    <div class="right-teacher-profile">
      <Aside />
    </div>
  </div>
</template>


<script>
//private views, only be acessed when the teacher is logged
import PrivatePhoto       from  "../PrivateViews/Photo"
import PrivateDescription from  "../PrivateViews/Description"
import PrivateTabs        from  "../PrivateViews/Tabs/Tabs"
import PrivateAside       from  '../PrivateViews/Aside/Aside'

//public views, everybody without token can see this content
import PublicPhoto        from  "../PublicViews/Photo"
import PublicDescription  from  "../PublicViews/Description"
import PublicTabs         from  "../PublicViews/Tabs/Tabs"
import Aside              from  '../../../FixedComponents/Aside/Aside'

import auth               from  "../../../../services/auth";

export default {
  name: "Info", 

  components: {
    //components with private views
    PrivatePhoto,
    PrivateDescription,
    PrivateTabs,
    PrivateAside,
    //components with public views
    PublicPhoto,
    PublicDescription,
    PublicTabs,
    Aside
  },
  computed: {
    isProfessor: function() {
      if (auth.getUsername() !== null && auth.getRole() !== null) {
        const username = auth.getUsername().toLowerCase();
        const role = auth.getRole();

        return role == "professor" && username == this.$route.params.targetName;
      }
    }
  },

  data() {
    return {
      title: "Professoris"
    };
  }
};
</script>
  