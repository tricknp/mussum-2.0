<template>
    <Tabs>
        <Directories slot="directories"></Directories>
        <Scraps slot="scraps"></Scraps>
        <About slot="about"></About>
    </Tabs>
</template>

<script>
import Tabs from '../../../../UIComponents/Tabs'
import Directories from './Components/Directories'
import Scraps from './Components/Scraps/Scrap'
import About from './Components/About'

export default {

  components:
  {
      Tabs,
      Directories,
      Scraps,
      About
  },

  props:{
    tab: {
      type: Object
    }
  },

};
</script>
