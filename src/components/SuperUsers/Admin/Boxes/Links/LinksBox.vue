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
          <div v-for="link in links" :key="link.titulo" class="inside-container-dashboard">
            <div class="item-container-dashboard">

              <div class="styled-input--square">
                 <div class="styled-input-single">
                   <input type="checkbox" @change="select(link)" :id="link.id" />
                   <label :for="link.id"> {{ link.titulo }} </label>
                 </div>
             </div>

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
  name: "linksBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Links",
      links: null,
    }
  },


  methods:{
    refresh(){
        this.initialize()
    },

    postData(){
      this.route = 'api/admlinks';
    }
  }
}

</script>
