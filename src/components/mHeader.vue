<template>

  <header class="head">
  
    <nav class="navigation">
  
      <img class="logo" src="../../static/logo.svg">
  
      <div class="search">
        <input type="text" id="" placeholder="Procuraris">
        <img src="#" alt="">
      </div>

      <div class="list-links">

        <div class="text-xs-left" id="">
          <v-menu open-on-hover top offset-y>
            <v-btn id="btn-list" dark slot="activator">Professoris</v-btn>
            <v-list>
              <v-list-tile v-for="professor in professores" :key="professores.name" @click="">
                <v-list-tile-title>{{ professor.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          
          <v-menu open-on-hover top offset-y>
            <v-btn id="btn-list" dark slot="activator"><a href="#" target="_blank">Horaris</a></v-btn>
          </v-menu>
        </div>   

      </div>

      <img class="menu-bar" src="../assets/images/menu-bar.svg">
    </nav>
    
  </header>

</template>


<script>

const linkHorarios = 'https://docs.google.com/spreadsheets/d/1eh4vz5QlTYqHdMzX36_a_UF6xhJ5HvazfKGMiBt_zeU/edit?usp=sharing';

export default {
  name: 'mHeader',

data(){
  return{

    horarios: linkHorarios,

    professores: 
    [
      {name: 'Angelo'},
      {name: 'Edecio'},
      {name: 'Gladimir'},
      {name: 'CV'},
      {name: 'Dartagnan'},
    ],

   

    
  };
},



}
</script>
