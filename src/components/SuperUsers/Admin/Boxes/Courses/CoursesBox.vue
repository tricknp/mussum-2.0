<template>
  <div class="div-courses">

      <div class="courses-head">
        <h1>{{title}}</h1>
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>

      <div class="courses-container">
          <div v-for="curso in cursos" :key="curso.titulo" class="box-admin-content">
            <label>
              <input type="radio" name="name" @change="select(curso)">
              <span for="name"> {{ curso.titulo }} </span>
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
  name: "CoursesBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Cursis",
      cursos: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/cursos';
    }
  }

}
</script>