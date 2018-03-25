<template>
  <div id="app">
    <v-app>

      <mHeader />    
      <Aside />  
      
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>

import mHeader from '@/components/mHeader.vue'
import Aside from '@/components/Aside.vue'
export default {
  name: 'App',

  components: { mHeader }, 
 
}
</script>