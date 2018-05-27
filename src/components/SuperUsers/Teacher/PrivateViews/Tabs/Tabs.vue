<template>
    <div>
        <div class="tabs-header">
        <span :class="{'active': tabDirectories}" @click="directories">Diretóris</span>
        <span :class="{'active': tabScraps}" @click="scraps">Recadis</span>
        <span :class="{'active': tabAbout}" @click="about">Sobris</span>
    </div>
    
    <div class="tabs-content">
        <div v-if="tabDirectories">
            <Directories />
        </div>
        <div v-if="tabScraps">
            <Scraps />
        </div>
        <div v-if="tabAbout">
            <About />
        </div>
    </div>
    </div>
</template>

<script>
import Directories from './Components/Directories'
import Scraps from './Components/Scrap'
import About from './Components/About'

    export default {

        components:
        {
            Directories,
            Scraps,
            About 
        },

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