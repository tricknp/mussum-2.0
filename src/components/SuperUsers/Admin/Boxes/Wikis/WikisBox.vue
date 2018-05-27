<template>
  <div class="div-wikis tp">

      <div class="wikis-head">
        <h1>{{title}}</h1>
        <div class="div-adm-button">
          <Create @create="initialize"></Create>
          <Delete></Delete>
          <Edit></Edit>
        </div>
      </div>

      <div class="wikis-container">
          <div v-for="wiki in wikis" :key="wiki.titulo" class="box-admin-content">
            <label>
              <input type="radio" name="name" @change="select(wiki)">
              <span for="name"> {{ wiki.titulo }} </span>
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
  name: "WikisBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Wikis",
      wikis: null,
    }
  },
  
  methods:{
    postData(){
      this.route = 'api/wikis';
    }
  }

}
</script>