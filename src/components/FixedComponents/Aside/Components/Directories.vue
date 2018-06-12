<template>
  <div class="div-dir-home">
    <div class="div-aside-home">
      <div class="aside-head">
          <slot name="header">
            <h1 class="title-home-aside"> {{ title }} </h1>
          </slot>  
      </div>
      <div class="home-aside-container">
        <slot name="content">
          <h1 v-for="diretorio in diretorios" :key="diretorio.titulo">
            {{ diretorio.titulo }}
          </h1>
        </slot>  
      </div>
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
