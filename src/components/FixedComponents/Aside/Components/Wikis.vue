<template>
    <div class="div-wikis-home">
        
        <div class="div-aside-home">
            <div class="aside-head"> 
                <slot name="header">
                    <h1 class="title-home-aside"> {{ title }} </h1>
                </slot>    
            </div>
            <div class="div-aside-container">
                <slot name="content">    
                    <div class="home-aside-container">
                        <h1 v-for="wiki in wikis" :key="wiki.titulo"> 
                            {{ wiki.titulo }} 
                        </h1>
                    </div>
                </slot>    
            </div>
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
          axios
            .get(this.BASE_URL + 'api/wikis')
            .then(res => {
              this.wikis = res.data;
            });
        },
    },

    created(){
        this.initWikis();
    }

}   
</script>

