<template>
  <div id="menubar-right">
    <v-menu open-on-hover offset-y id="menubar">
              
        <v-btn id="btn-list" slot="activator">
          <img class="menubar-icon" src="../../assets/images/menu-bar.svg">
        </v-btn>
          
        <v-list id="dropdown">
          <v-list-tile v-for="item in items" :key="item.x">
          <v-list-tile-title>{{ item.x }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
  </div>   
</template>


<script>
export default {
  name: 'Navbar',
  
data(){
  return{
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


<style>
@import url("https://fonts.googleapis.com/css?family=Karla");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.material-icons
{
  color: #dfdfdf;
}

.divider
{
  border: solid 1px darkgray;
  height: 0;
  line-height: 0;
  list-style: none;
}
</style>
