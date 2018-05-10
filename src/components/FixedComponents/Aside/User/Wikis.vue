<template>
    <div class="div-links">
        <div class="aside-head"> 
            <h1> {{ title }} </h1>
        </div>
        <div class="links-container">
            <h1 v-for="wiki in wikis" :key="wiki.titulo"> 
                {{ wiki.titulo }} 
            </h1>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import { url } from '../../../_mixins/url.js'

export default {
  name: 'Wikis',

  mixins: [ url ],
  
  data(){
      return{
          wikis: '',
          title: 'Wikis'
      };
  },

  methods: { 
      initWikis() {
          console.log('ta chegando aq');
          
          axios
            .get(this.BASE_URL + 'api/wikis')
            .then(res => {
              this.wikis = res.data;
              console.log(this.wikis);
              
            });
        },
    },

    created(){
        this.initWikis();
    }

}   
</script>

