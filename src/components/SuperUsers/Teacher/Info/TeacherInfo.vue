<template>
  <div class="teacher-profile">

     <h1 class="title-teacher"> {{ title }} </h1>

     <div v-if="isProfessor"  class="info-teacher">
        <div class="desc-photo">
            <component v-bind:is="photo"></component>
            <component v-bind:is="description"></component>
        </div>
         <div class="info-content">
         <component v-bind:is="tabs"></component>
        </div>
  </div>

   <div v-else  class="info-teacher">
        <div class="desc-photo">
            <component v-bind:is="photo = 'viewPhoto'"></component>
            <component v-bind:is="description = 'viewDescription'"></component>
        </div>
        <div class="info-content">
            <component v-bind:is="tabs = 'viewTabs'"></component>
        </div>
     </div>
</template>


<script>
import Photo from "./Components/Photo";
import Description from "./Components/Description";
import Tabs from "./Tabs/Tabs";
//Precisa importar os Components que não são editados

export default {
  name: "Info",

  components: {
    'configPhoto': Photo,
    'configDescription': Description,
    'configTabs': Tabs,
    'viewPhoto': "",
    'viewDescription': "",
    'viewTabs': ""
  },

  computed: {
    isProfessor: function() {
      const nome = localStorage.getItem("nome").toLowerCase();
      const role = localStorage.getItem("role");

      return role === "professor" && nome === this.$route.params.targetName;
    }
  },

  data() {
    return {
      title: "Professoris",
      role: localStorage.getItem("role"),
      name: localStorage.getItem("name"),
      photo: 'configPhoto',
      description: 'configDescription',
      tabs: 'cofigTabs'
    };
  }
};
</script>
