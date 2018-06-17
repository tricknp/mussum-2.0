<template>
    <div class="feed">

        <h1 class="feed-title"> Atividades </h1>

        <div class="feed-container">
            <div  v-for="content in feedContent" :key="content.id" >
                <div class="feed-types">
                    
                    <div v-if="content.tipo == 'upload'" class="feed-upload">
                        <img src="#">
                        <div class="feed-text-content">
                            <p> 
                                <b>{{ content.professor }}</b> {{textUpload}} 
                                <b class="feed-link-place"> {{ content.dir }}</b>
                            </p>
                            <p> <b class="feed-archive-name">{{ content.arquivo }}</b> </p>
                            <p> {{ content.comentario }} </p>
                        </div>
                        <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'recado'">
                        <img src="#">
                        <p> <b>{{ content.professor }}</b> {{ textRecado }} </p>
                        <p> {{ `${content.titulo}` }} </p>
                        <p> {{ `${content.comentario}` }} </p>
                        <p> {{ content.dataCriacao }} </p>
                    </div>
                
                    <div v-if="content.tipo == 'link'">
                        <img src="#">
                        <p> <b>{{ content.professor }}</b> {{ textLink }} </p>
                        <p> <a :href="content.link">{{ `${content.titulo}` }}</a> </p>
                        <p> {{ `${content.comentario}` }}  </p>
                        <p> {{ content.dataCriacao }} </p>
                    </div>
                
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from "axios";
import { url } from "../../_mixins/url";
import LoginVue from "../../Authentication/Login.vue";

export default {
  data() {
    return {
      feedContent: "",
      textUpload: "adicionou um novo arquivo em",
      textRecado: "adicionou um novo recado.",
      textLink: "adicionou um novo link."
    };
  },

  mixins: [url],

  created() {
    this.feed();
  },

  methods: {
    feed() {
      axios.get(`${this.BASE_URL}api/feed`).then(res => {
        let contents = res.data;
        let a = [];

        contents.forEach(element => {
          console.log(element);
          if (element.tipo == "upload") {
            a.unshift({
              tipo: "upload",
              professor: element.professor,
              dir: element.dir,
              arquivo: element.arquivo,
              comentario: element.comentario,
              dataCriacao: element.dataCriacao
            });
          }
          if (element.tipo == "recado") {
            a.unshift({
              tipo: "recado",
              professor: element.professor,
              titulo: element.titulo,
              comentario: element.comentario,
              dataCriacao: element.dataCriacao
            });
          }
          if (element.tipo == "link") {
            a.unshift({
              tipo: "link",
              professor: element.professor,
              titulo: element.titulo,
              comentario: element.comentario,
              link: element.link,
              dataCriacao: element.dataCriacao
            });
          }
        });

        this.feedContent = a;
        console.log(this.feedContent);
      });
    }
  }
};
</script>




