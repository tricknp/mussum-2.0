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
                        <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
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
                        <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
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
                            <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
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
import IconDelete from "../../_utils/Svgs/IconDelete";

export default {
  data() {
    return {
      feedContent: "",
      textUpload: "adicionou um novo arquivo em",
      textRecado: "adicionou um novo recado.",
      textLink: "adicionou um novo link."
    };
  },

  components: { IconDelete },

  mixins: [url],

  created() {
    this.feed();
  },

  methods: {
    getphoto(feed) {
      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: feed.username }
        })
        .then((res, err) => {
          feed.img = res.data;
          this.feedContent.push({});
        });
    },

    feed() {
      axios.get(`${this.BASE_URL}api/feed`).then(res => {
        this.feedContent = res.data;
        this.feedContent.forEach(element => {
          this.getphoto(element);
        });
      });
    },

    deleteFeed() {
      alert("ok");
    }
  }
};
</script>


<style>
.icon-delete-feed {
  width: 0.9em;
}
.btn-delete-feed {
  right: 0.2em;
  top: 0.1em;
  position: absolute;
}

.icon-delete-feed:hover {
  fill: red;
}
</style>


