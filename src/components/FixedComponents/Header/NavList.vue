<template>
  <div>

      <dropdown trigger="hover">
        <button>{{ title.listProfessores }}</button>
        <div slot="content">
          <menus>
            <menu-item v-for="professor in professores" :key="professor.name">
              {{ professor.name }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>

    
      <dropdown trigger="hover">
        <button>{{ title.listHorarios }}</button>
        <div slot="content">
          <menus>
            <menu-item v-for="horario in horarios" :key="horario.turma">
              {{ horario.turma }}
            </menu-item>
          </menus>
        </div>  
      </dropdown>

    
      <dropdown trigger="hover">
        <button>{{ title.link3 }}</button>
        <div slot="content">
          <menus>
            <menu-item v-for="professor in professores" :key="professor.name">
              {{ professor.name }}
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
        link3: 'Dereguederis',
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