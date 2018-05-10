<template>
  <div class="nav-list">
      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.listProfessores }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item 
                id="dropdown-content" 
                v-for="professor in professores" 
                :key="professor.nome"
                :targetName="professor.nome" >
                <router-link :to="{ path: '/professores/' + professor.nome }">
                  {{ professor.nome }}
                </router-link>
        
            </menu-item>
          </menus>
        </div>  
      </dropdown>

      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.link3 }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item>
              
            </menu-item>
          </menus>
        </div>  
      </dropdown>
    
      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.listHorarios }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="horario in horarios" :key="horario.turma" >
              {{ horario.turma }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>
      
  </div>
</template>

<script>
import axios from 'axios'
import { url } from '../../_mixins/url.js'

export default {
  name: 'NavList',

  mixins: [ url ],

  props:{
    targetName:
    {
      type: Object | String
    }
  },

  data(){
    return{
      title:
      { 
        listProfessores: 'Professoris',
        listHorarios: 'Horaris',
        link3: 'Cursis',
      },
      professores: '',
      horarios:'',
    };
  },

  methods: { 
      initHeader() {
          axios
            .get(this.BASE_URL + 'api/professores')
            .then(res => {
              this.professores = res.data;
            });
        },

      select(obj) {
        console.log('to aqqqqqqqqqqqqqqqqqqqqqqq')
        this.targetName = obj;
        console.log('selected    ' + this.targetName.nome)
        },
    },

  created(){
    this.initHeader();
  },

  updated(){
    //this.initialize();
  }
}
</script>