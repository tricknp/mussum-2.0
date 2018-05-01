<template>
  <div class="nav-list">

      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.listProfessores }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item id="dropdown-content" v-for="professor in professores" :key="professor.name">
              {{ professor.name }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>

      <dropdown trigger="hover">
        <button id="btn-nav-list">{{ title.link3 }}</button>
        <div slot="content" id="dropdown-content">
          <menus>
            <menu-item v-for="professor in professores" :key="professor.name">
              {{ professor.name }}
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
        {name: 'Angelo'},
        {name: 'Edecio'},
        {name: 'Gladimir'},
        {name: 'CV'},
        {name: 'Dartagnan'},
      ],
      horarios: 
      [
        {turma: 'Analise e Desenvolvimento de Sistemas'},
        {turma: 'Redes de computadores'}
      ],
    };
  },
}
</script>