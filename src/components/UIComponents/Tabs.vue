<template>
    <div v-if="changeTeacher">
        <div class="tabs-header">

            <span :class="{'active': tabDirectories}" @click="directories">
              <router-link :to="{ name: 'Dir' }"> Diretoris </router-link>
            </span>

            <span :class="{'active': tabScraps}" @click="scraps">
              <router-link :to="{ name: 'Recados' }"> Recadis </router-link>
            </span>

            <span :class="{'active': tabAbout}" @click="about">
              <router-link :to="{ name: 'Sobre' }"> Sobris </router-link>
            </span>
        </div>

        <div class="tabs-content">
            <div v-if="tabDirectories">
                <slot name="directories">
                    <h1>~</h1>
                </slot>
            </div>

            <div v-if="tabScraps">
                <slot name="scraps">
                    <h1>~</h1>
                </slot>
            </div>

            <div v-if="tabAbout">
                <slot name="about">
                    <h1>~</h1>
                </slot>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { url } from '../_mixins/url'

export default {

    mixins: [ url ],

    data() {
      return {
        tabDirectories: true,
        tabScraps: false,
        tabAbout: false,
        currentPath: `/professor/${this.$route.params.targetName}/`,
        professor: '',
        username: this.$route.params.targetName,
      }
    },

    computed:{
        changeTeacher: function(){
           if (this.username) {
             this.directories()
           }
           return true;
        }
    },

    created(){
        this.initRoutes();
        this.$bus.$on("selectProfessor", username => {
          console.log('SELECT PROFESSOR AND REFRESH');

          this.refresh(username);
        });
    },

    methods: {
      directories() {
        this.tabDirectories = true
        this.tabScraps = false
        this.tabAbout = false
      },

      scraps() {
        this.tabDirectories = false
        this.tabScraps = true
        this.tabAbout = false

      },

      about() {
        this.tabDirectories = false
        this.tabScraps = false
        this.tabAbout = true

      },

      refresh(username) {
        this.username = username;
      },

      initRoutes(){
        if (this.$route.path == `${this.currentPath}diretorios`) {
            this.directories()
        }else if (this.$route.path == `${this.currentPath}recados`) {
            this.scraps()
        }else if (this.$route.path == `${this.currentPath}sobre`) {
            this.about()
        }

        axios.get(`${this.BASE_URL}api/professores`).then(res => {
          this.professor = res.data;
          this.refresh(this.username);
      })

    }
  }
};
</script>
