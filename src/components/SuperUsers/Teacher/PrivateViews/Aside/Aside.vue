<template>
  <aside id="aside">
      <Wikis />
      <Directories /> 

  </aside>
</template>


<script>
import Wikis from './Components/Wikis';
import Directories from './Components/Directories';

export default {
  name: 'PrivateAside',
  
  components:
  {
      Wikis,
      Directories,
  },
}
</script>
