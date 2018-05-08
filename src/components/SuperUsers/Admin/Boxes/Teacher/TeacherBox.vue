<template>
  <div class="div-teacher">

      <div class="teacher-head">
        <h1>{{title}}</h1>
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>

      <div class="teacher-container">
          <div v-for="professor in professores" :key="professor.nome" class="teacher-content">
            <label>
              <input type="radio" name="name" @change="select(professor)">
              <span for="name"> {{ professor.nome }} </span>
            </label>
          </div>
      </div>

  </div>
</template>


<script>
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";
import { url } from '../../../../_mixins/url.js'
import { initialize } from '../../../../_mixins/boxInitialize.js'

export default {
  name: "TeacherBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Professoris",
      professores: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/professores';
    }
  }

}
</script>