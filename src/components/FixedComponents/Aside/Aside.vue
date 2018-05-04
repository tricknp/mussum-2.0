<template>
  <aside id="aside">
      <Wikis />
      <Directories />
  </aside>
</template>


<script>
import Wikis from './Wikis';
import Directories from './Directories'

export default {
  name: 'Aside',
  
  components:
  {
      Wikis,
      Directories,
  },
}
</script>
