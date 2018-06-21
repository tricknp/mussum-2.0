<template>
    <div class="feed">

        <h1 class="feed-title"> Atividades </h1>

        <div class="feed-container">
            <div  v-for="content in feedContent" :key="content.id" >
                <div class="feed-types">
                    
                  <div v-if="content.tipo == 'upload'" class="feed-upload">

                      <button class="btn-delete-feed" @click="deleteFeed">
                        <IconDelete class="icon-delete-feed" />
                      </button>

                      <div class="content-aligned">
                        <img v-if="img" class="feed-photo" :src="`data:image/png;base64,${img}`">
                        <div class="feed-text-content">
                            <p> 
                                <b>{{ content.professor }}</b> {{textUpload}} 
                                <b class="feed-link-place"> {{ content.dir }}</b>
                            </p>
                            <p> <b class="feed-archive-name">{{ content.arquivo }}</b> </p>
                            <p> {{ content.comentario }} </p>
                        </div>
                      </div>
                        <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'recado'" class="feed-upload"  >

                      <button class="btn-delete-feed" @click="deleteFeed">
                        <IconDelete class="icon-delete-feed" />
                      </button>

                      <div class="content-aligned">
                        <img v-if="img" class="feed-photo" :src="`data:image/png;base64,${img}`">
                        <div class="feed-text-content">
                          <p> <b>{{ content.professor }}</b> {{ textRecado }} </p>
                          <b> <p class="feed-archive-name"> {{ `${content.titulo}` }} </p> </b>
                          <p> {{ `${content.comentario}` }} </p>
                        </div>  
                        </div>
                          <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>
                
                    <div v-if="content.tipo == 'link'" class="feed-upload">
                        
                        <button class="btn-delete-feed" @click="deleteFeed">
                          <IconDelete class="icon-delete-feed" />
                        </button>

                        <div class="content-aligned">
                          <div>
                            <img v-if="img" class="feed-photo" :src="`data:image/png;base64,${img}`">
                          </div>

                          <div class="feed-text-content">
                            <p> 
                              <b>{{ content.professor }}</b> {{ textLink }} 
                            </p>
                            
                            <b><p class="feed-archive-name"> 
                              <a :href="content.link" target="_blank">
                                {{ `${content.titulo}` }}
                              </a> 
                            </p></b>

                            <p> {{ `${content.comentario}` }}  </p>
                          </div>
                        </div>
                            <p class="feed-date"> {{ content.dataCriacao }} </p>
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
import IconDelete from '../../_utils/Svgs/IconDelete'

export default {

  data() {
    return {
      feedContent: "",
      img: '',
      textUpload: "adicionou um novo arquivo em",
      textRecado: "adicionou um novo recado.",
      textLink: "adicionou um novo link.",
      username: '',
    };
  },

  components: { IconDelete },

  mixins: [url],

  created() {
    this.getphoto();
    this.feed();
  },

  methods: {
    getphoto(){
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: this.username }
        })
        .then((res, err) => {
          this.img = res.data;
        })
      },

    feed() {
      axios.get(`${this.BASE_URL}api/feed`).then(res => {
        let contents = res.data;
        let a = [];

        contents.forEach(element => {
          if (element.tipo == "upload") {
            this.username = element.username
            a.unshift({
              tipo: "upload",
              professor: element.professor,
              dir: element.dir,
              arquivo: element.arquivo,
              comentario: element.comentario,
              dataCriacao: element.dataCriacao,
            },
            )
              
          }

          if (element.tipo == "recado") {
            this.username = element.username
            a.unshift({
              tipo: "recado",
              professor: element.professor,
              titulo: element.titulo,
              comentario: element.comentario,
              dataCriacao: element.dataCriacao,
              username: element.username
            });
          }
          if (element.tipo == "link") {
            this.username = element.username
            a.unshift({
              tipo: "link",
              professor: element.professor,
              titulo: element.titulo,
              comentario: element.comentario,
              link: element.link,
              dataCriacao: element.dataCriacao,
              username: element.username
            });
          }
        });

        this.feedContent = a;
      });
    },

    deleteFeed(){
      alert('ok')
    }
  }
}
</script>


<style>
.icon-delete-feed
{
  width: .9em;
}
  .btn-delete-feed
  {
    right: .2em;
    top: .1em;
    position: absolute;
  }

.icon-delete-feed:hover
{
  fill: red;
}

</style>


