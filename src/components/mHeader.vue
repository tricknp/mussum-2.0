<template>

  <header class="head">
  
    <nav class="navigation">
  
      <img class="logo" src="../../static/logo.svg">
  
      <div class="search">
        <input type="text" id="" placeholder="Procuraris">
        <img src="#" alt="">
      </div>

      <ul class="head-ul">
        <li>Professoris</li>
        <li>Horáris</li>
        <li>{{repolho}}</li>
      </ul>

      <img class="menu-bar" src="../assets/images/menu-bar.svg">
    </nav>

  </header>

</template>


<script>
export default {
  name: 'mHeader',

data(){
  return{
    repolho: 'repolhinho',
  };
},



}
</script>
