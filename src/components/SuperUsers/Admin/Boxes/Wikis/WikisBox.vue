<template>
  <div class="dashboard-actions">

      <div class="header-dashboard-actions">
        <h1 class="dashboard-actions-title">{{title}}</h1>
        <div class="dashboard-actions-buttons">
          <Create @create="refresh()" class="dashboard-action-create" />
          <Delete @delete="refresh()"/>
        </div>
      </div>

      <div class="dashboard-actions-container">
          <div v-for="wiki in wikis" :key="wiki.titulo" class="inside-container-dashboard">
            <div class="item-container-dashboard">
              <label>
                <input type="checkbox" name="name" @change="select(wiki)">
                <span for="name"> {{ wiki.titulo}} </span>
              </label>
              <Edit />
            </div>
          </div>
      </div>

  </div>
</template>


<script>
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";
import { url } from '../../../../_mixins/url.js'
import { initialize } from '../../../../_mixins/boxInitialize.js'
export default {
  name: "WikisBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Wikis",
      wikis: null,
    }
  },


  methods:{
    refresh(){
        this.initialize()
    },

    postData(){
      this.route = 'api/wikis';
    }
  }
}

</script>
