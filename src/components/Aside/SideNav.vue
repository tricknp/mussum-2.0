<template>
  <aside class="side-bar">
      <Links></Links>
      <Diretorios></Diretorios>
  </aside>
</template>

<script>

import Links from './Links.vue'
import Diretorios from './Diretorios.vue'

export default {
  name: 'SideNav',
  
  components: 
  {
      Links,
      Diretorios
  },
}
</script>

