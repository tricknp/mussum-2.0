<template>
  <div class="div-activities">

      <div class="activities-head">
        <h1>{{title}}</h1>
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>

      <div class="activities-container">
          <div v-for="aviso in avisos" :key="aviso.titulo" class="box-admin-content">
            <label>
              <input type="radio" name="name" @change="select(aviso)">
              <span for="name"> {{ aviso.titulo }} </span>
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
  name: "ActivitiesBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Avisis",
      avisos: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/avisos';
    }
  }

}
</script>