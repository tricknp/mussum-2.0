<template>
  <div class="nav-list">

      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.listProfessores }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item id="dropdown-content" v-for="professor in professores" :key="professor.nome">
              {{ professor.nome }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>

      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.link3 }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="professor in professores" :key="professor.nome">
              {{ professores.nome }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>
    
      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.listHorarios }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="horario in horarios" :key="horario.turma">
              {{ horario.turma }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>
      
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data(){
    return{
      title:
      { 
        listProfessores: 'Professoris',
        listHorarios: 'Horaris',
        link3: 'Cursis',
      },

      professores: 
      [
        {nome: 'kkk'},
      ],

      horarios: 
      [
        {turma: 'Analise e Desenvolvimento de Sistemas'},
        {turma: 'Redes de computadores'}
      ],
    };
  },

  created(){
    var vm = this;
     this.$bus.$on('objectEmited', (teacher) => {
       if(teacher){
         console.log('teacher added     ' + teacher.nome )
          this.professores.push( {name: teacher.nome} )
       }
    })
  }
}
</script>