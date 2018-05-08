<template>
  <div class="div-directories">

      <div class="directories-head">
        <h1>{{title}}</h1>
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>

      <div class="directories-container">
          <div v-for="diretorio in diretorios" :key="diretorio.titulo" class="directories-content">
            <label>
              <input type="radio" name="name" @change="select(diretorio)">
              <span for="name"> {{ diretorio.titulo }} </span>
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
  name: "DirectoriesBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Diretóris",
      diretorios: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/diretorios';
    }
  }

}
</script>