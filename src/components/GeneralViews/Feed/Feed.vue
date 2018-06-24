<template>
    <div class="feed">
        <vue-progress-bar></vue-progress-bar>

        <h1 class="feed-title"> Atividades </h1>

        <div class="feed-container">
            <div  v-for="content in feedContent" :key="content.id" >
                <div class="feed-types">

                  <div v-if="content.tipo == 'upload'" class="feed-upload">
                    
                      <button v-if="content.username == username" class="btn-delete-feed" @click="deleteFeed(content.id)">
                        <IconDelete class="icon-delete-feed" />
                      </button>

                      <div class="content-aligned">
                        <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
                        <div class="feed-text-content">
                            <p>
                              <router-link :to="{path: `professor/${content.username}`}">
                                <b class="teacher-name-feed" >{{ content.professor }}</b>
                              </router-link>
                                {{textUpload}}
                                <b class="feed-link-place"> {{ content.dir }}</b>
                            </p>
                            <p> <b class="feed-archive-name">{{ content.arquivo }}</b> </p>
                            <p> {{ content.comentario }} </p>
                        </div>
                      </div>
                        <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'recado'" class="feed-upload"  >

                      <button v-if="content.username == username" class="btn-delete-feed" @click="deleteFeed(content.id)">
                        <IconDelete class="icon-delete-feed" />
                      </button>

                      <div class="content-aligned">
                        <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
                        <div class="feed-text-content">
                          <p>
                            <router-link :to="{path: `professor/${content.username}`}">
                              <b class="teacher-name-feed">{{ content.professor }}</b>
                            </router-link>
                              {{ textRecado }} </p>
                          <b> <p class="feed-archive-name"> {{ `${content.titulo}` }} </p> </b>
                          <p> {{ `${content.comentario}` }} </p>
                        </div>
                        </div>
                          <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'link'" class="feed-upload">

                        <button v-if="content.username == username" class="btn-delete-feed" @click="deleteFeed(content.id)">
                          <IconDelete class="icon-delete-feed" />
                        </button>

                        <div class="content-aligned">
                          <div>
                            <img v-if="content.img" class="feed-photo" :src="`data:image/png;base64,${content.img}`">
                          </div>

                          <div class="feed-text-content">
                            <p>
                              <router-link :to="{path: `professor/${content.username}`}">
                                <b class="teacher-name-feed">{{ content.professor }}</b>
                              </router-link>
                              {{ textLink }}
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
      username: '',
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
          this.feedContent.splice(-1,1) // isso aqi é pra n acumular objetos vazios no array por causa da gambiarra
        });
    },

    feed() {
      this.$Progress.start()
      axios.get(`${this.BASE_URL}api/feed`).then(res => {
        this.feedContent = res.data;
        this.feedContent.forEach(element => {
          this.getphoto(element);

          if (element.username == localStorage.username) {
            this.username = element.username
          }

        })

        this.feedContent.reverse()
        this.$Progress.finish()

      })
      .catch(err => {
        this.$Progress.fail()
      })

    },

    deleteFeed(id) {
      let decision = confirm('Tem certeza que deseja excluir esse feed?')
      if (decision) {
        axios
          .delete(`${this.BASE_URL}api/feed/${id}`)
          .then(res => {
            console.log(res.data)
            this.feed();
        })
      }

    } 
     }

};
</script>
