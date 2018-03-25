<template>

  <header class="head">
  
    <nav class="navigation">
  
      <img class="logo" src="../../static/logo.svg">
  
      <div class="search">
        <input type="text" id="" placeholder="Procuraris">
        <img src="#" alt="">
      </div>

      <div class="list-links">
        <div class="text-xs-left">
          
          <v-menu open-on-hover top offset-y>
            <v-btn id="btn-list" dark slot="activator">Professoris</v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="professor in professores" :key="professores.name" @click="">
                <v-list-tile-title>{{ professor.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>    

          <v-menu open-on-hover top offset-y>
            <v-btn id="btn-list" dark slot="activator">Horaris</v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="horario in horarios" :key="horarios.turma" @click="">
                <v-list-tile-title>{{ horario.turma }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu open-on-hover top offset-y>
            <v-btn id="btn-list" dark slot="activator">Dereguederes</v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="horario in horarios" :key="horarios.turma" @click="">
                <v-list-tile-title>{{ horario.turma }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        
        </div>      
      </div>

      <div id="menubar-right">
        <div class="text-xs-right" id="as">
          <v-menu open-on-hover top offset-y id="menubar">
            <v-btn id="btn-list" dark slot="activator">
              <img class="menubar-icon" src="../assets/images/menu-bar.svg">
            </v-btn>
            <v-list id="dropdown">
              <v-list-tile v-for="item in items" :key="items.x" @click="">
                <v-list-tile-title>{{ item.x }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </div>

    </nav>
    
  </header>

</template>


<script>

const linkHorarios = 'https://docs.google.com/spreadsheets/d/1eh4vz5QlTYqHdMzX36_a_UF6xhJ5HvazfKGMiBt_zeU/edit?usp=sharing';

export default {
  name: 'mHeader',

data(){
  return{
    
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

   items:
   [
     {x: 'test1'},
     {x: 'test2'},
     {x: 'test3'},
   ],
    
  };
},



}
</script>
