<template>
    <div id="menubar-right">
        
        <div class="text-xs-right" id="as">
           
            <v-menu open-on-hover offset-y id="menubar">
                
                <v-btn id="btn-list" dark slot="activator">
                    <img class="menubar-icon" src="../../assets/images/menu-bar.svg">
                </v-btn>
            
                <v-list id="dropdown">
                    <v-list-tile v-for="item in items" :key="item.x" @click="">
                    <v-list-tile-title>{{ item.x }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

        </div>

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
