<template>
  <aside id="aside">
      <Wikis />
      <Directories />
  </aside>
</template>


<script>
import Wikis from './User/Wikis';
import Directories from './User/Directories'

export default {
  name: 'Aside',
  
  components:
  {
      Wikis,
      Directories,
  },
}
</script>
