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
          <div v-for="professor in professores" :key="professor.nome" class="inside-container-dashboard">
            <div class="item-container-dashboard">
              <label>
                <input type="checkbox" name="name" @change="select(professor)">
                <span for="name"> {{ `${professor.nome} ${professor.sobrenome}` }} </span>
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
  name: "TeacherBox",

  components: { Create, Delete, Edit },

  mixins: [ url, initialize ],

  data() {
    return {
      title: "Professoris",
      professores: null,
    }
  },

  computed:{
    isTrue: function(){
      this.initialize()
      alert("puta que pariu")
      return true
    }
  },

  methods:{
    refresh(){
      alert('taoso')
        this.initialize()
    },

    postData(){
      this.route = 'api/professores';
    }
  }

}
</script>
