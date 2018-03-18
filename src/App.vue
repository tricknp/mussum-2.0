<template>
  <div id="app">
    <v-app>

      <mHeader />      
      
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

export default {
  name: 'App',

  components: { mHeader },
}
</script>