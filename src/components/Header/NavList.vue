<template>
      <div class="list-links">
          
          <v-menu open-on-hover offset-y>
            <v-btn id="btn-list" slot="activator"> {{ title.link1 }} </v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="professor in professores" :key="professor.name">
                <v-list-tile-title>{{ professor.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>    

          <v-menu open-on-hover offset-y>
            <v-btn id="btn-list" slot="activator"> {{ title.link2 }} </v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="horario in horarios" :key="horario.turma">
                <v-list-tile-title>{{ horario.turma }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu open-on-hover offset-y>
            <v-btn id="btn-list" slot="activator"> {{ title.link3 }} </v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="horario in horarios" :key="horario.turma">
                <v-list-tile-title>{{ horario.turma }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        
        </div>      
</template>

<script>
export default {
  name: 'NavList',
  data(){
    return{
      title:
      { 
        link1: 'PROFESSORIS',
        link2: 'HORARIS',
        link3: 'DEREGUEDERIS',
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