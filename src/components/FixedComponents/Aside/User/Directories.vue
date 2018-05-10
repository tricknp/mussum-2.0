<template>
  <div class="div-dir">
      <div class="aside-head">
          <h1> {{ title }} </h1>
      </div>
      <div class="dir-container">
        <h1 v-for="diretorio in diretorios" :key="diretorio.titulo">
          {{ diretorio.titulo }}
        </h1>
      </div>
  </div>
</template>


<script>
import axios from 'axios'
import { url } from '../../../_mixins/url.js'

export default {
  name: 'Directories',

  mixins: [ url ],
  
  data(){
      return{
        diretorios: '',
        title: 'Diretórios',  
      };
  },

  methods: {
    initDirectories(){
      axios
        .get(this.BASE_URL + 'api/diretorios')
        .then( (res) => {
          this.diretorios = res.data
        });
    }
  },

  created(){
    this.initDirectories();
  }
  
}
</script>
