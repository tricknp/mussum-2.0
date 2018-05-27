<template>
    <div>
        <div class="tabs-header">
            <span :class="{'active': tabDirectories}" @click="directories">Diretóris</span>
            <span :class="{'active': tabScraps}" @click="scraps">Recadis</span>
            <span :class="{'active': tabAbout}" @click="about">Sobris</span>
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
      }
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
      }
    }
};
</script>