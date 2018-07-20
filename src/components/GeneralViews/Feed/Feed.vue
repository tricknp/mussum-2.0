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
                                <b class="feed-link-place">
                                  <router-link :to="{ path: `professor/${userPath}/diretorios${dirPath}` }">
                                    {{ content.dir }}
                                  </router-link>
                                </b>
                            </p>
                            <p> <b class="feed-archive-name">{{ content.arquivo }}</b> </p>
                            <p> {{ content.comentario }} </p>
                        </div>
                      </div>
                        <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'link'" class="feed-upload">

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


                    <div v-if="content.tipo == 'recado'" class="feed-recado"  >

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
                          <b> <p class="feed-title-recado"> {{ `${content.titulo}` }} </p> </b>
                          <p> {{ `${content.comentario}` }} </p>
                        </div>
                        </div>
                          <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>

                    <div v-if="content.tipo == 'aviso'" class="feed-aviso"  >

                      <button v-if="content.username == username" class="btn-delete-feed" @click="deleteFeed(content.id)">
                        <IconDelete class="icon-delete-feed" />
                      </button>

                      <div class="content-aligned">
                        <img v-if="content.img" class="feed-photo" :src="`${content.img}`">
                        <div class="feed-text-content">
                          <p>
                            <router-link :to="{path: `professor/${content.username}`}">
                              <!-- <b class="teacher-name-feed">{{ content.professor }}</b> -->
                            </router-link>
                          <span class="title-aviso"> {{ textAviso }} </span>
                          </p>
                            <b> <p class="feed-text-aviso"> {{ `${content.titulo}` }} </p> </b>
                          <p> {{ `${content.comentario}` }} </p>
                        </div>
                        </div>
                          <p class="feed-date"> {{ content.dataCriacao }} </p>
                    </div>


                    <div v-if="content.tipo == 'wiki'" class="feed-aside">

                        <button v-if="content.username == username" class="btn-delete-feed" @click="deleteFeed(content.id)">
                          <IconDelete class="icon-delete-feed" />
                        </button>

                        <div class="content-aligned">
                            <img v-if="content.img" class="feed-photo" :src="`${content.img}`">

                          <div class="feed-text-content">
                            <p>
                              <router-link :to="{path: `professor/${content.username}`}">
                                <!-- <b class="teacher-name-feed">Mussum </b> -->
                              </router-link>
                              {{ textWiki }}
                            </p>

                            <b><p class="feed-archive-name">
                              <a :href="content.link" target="_blank">
                                {{ `${content.titulo}` }}
                              </a>
                            </p></b>
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

  components: { IconDelete },

  mixins: [url],

  props: {
    path:{
      type: Object
    }
  },

  data() {
    return {
      username: "",
      feedContent: "",
      textUpload: "adicionou um novo arquivo em",
      textRecado: "adicionou um novo recado.",
      textLink: "adicionou um novo link.",
      textWiki: "Foi adicionado uma nova Wiki.",
      textAviso: "Aviso!",
      userPath: "",
      dirPath: "",
    };
  },



  created() {
    this.feed();
  },

  methods: {
    getPhoto(feed) {
      if (feed.tipo == "aviso") {
            feed.img = "../../../../static/images/megaphone.svg";
            this.feedContent.push({});
            this.feedContent.splice(-1, 1); // isso aqi é pra n acumular objetos vazios no array por causa da gambiarra
      }else if (feed.tipo == "wiki") {
            feed.img = "../../../../static/images/wikipedia.svg";
            this.feedContent.push({});
            this.feedContent.splice(-1, 1); // isso aqi é pra n acumular objetos vazios no array por causa da gambiarra
      }else if (feed.tipo == "horario") {
            feed.img = "../../../../static/images/wall-clock.svg";
            this.feedContent.push({});
            this.feedContent.splice(-1, 1);
      } else {
        axios
          .get(`${this.BASE_URL}api/photo`, {
            headers: { professor: feed.username }
          })
          .then((res, err) => {
            feed.img = res.data;
            this.feedContent.push({});
            this.feedContent.splice(-1, 1); // isso aqi é pra n acumular objetos vazios no array por causa da gambiarra
          });
      }
    },

    getPath(el){
      let path = el.split('/')
      let initialSize = path[0].length
      let totalSize = el.length
      this.userPath = path[0]
      this.dirPath = el.substring(initialSize, totalSize)
    },

    feed() {
      this.$Progress.start();
      axios
        .get(`${this.BASE_URL}api/feed`)
        .then(res => {
          this.feedContent = res.data;
          this.feedContent.forEach(element => {
            this.getPhoto(element);
            this.getPath(element.dir);
            if (element.username == localStorage.username) {
              this.username = element.username;
            }
          });

          this.feedContent.reverse();
          this.$Progress.finish();
        })
        .catch(err => {
          this.$Progress.fail();
        });
    },

    deleteFeed(id) {
      let decision = confirm("Tem certeza que deseja excluir esse feed?");
      if (decision) {
        axios.delete(`${this.BASE_URL}api/feed/${id}`).then(res => {
          console.log(res.data);
          this.feed();
        });
      }
    }
  }
};
</script>
