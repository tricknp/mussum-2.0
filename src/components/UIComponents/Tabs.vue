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
                    <h1>Diretorios</h1>
                </slot>
            </div>

            <div v-if="tabScraps">
                <slot name="scraps">
                    <h1>Recados</h1>
                </slot>
            </div>

            <div v-if="tabAbout">
                <slot name="about">
                    <h1>Sobre</h1>
                </slot>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    data() {
      return {
        tabDirectories: true,
        tabScraps: false,
        tabAbout: false,
        currentPath: `/professor/${this.$route.params.targetName}/`,
      }
    },

    computed:{
        changeTeacher: function(){
           if (this.$route.params.targetName) {
               
           }
            return true;
        }
    },

    created(){
        this.initRoutes()
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

      initRoutes(){
        if (this.$route.path == `${this.currentPath}diretorios`) {
            this.tabDirectories = true
            this.tabScraps = false
            this.tabAbout = false
        }else if (this.$route.path == `${this.currentPath}recados`) {  
            this.tabDirectories = false
            this.tabScraps = true
            this.tabAbout = false
        }else if (this.$route.path == `${this.currentPath}sobre`) {  
            this.tabDirectories = false
            this.tabScraps = false
            this.tabAbout = true
        }
      }
      
    }
};
</script>
