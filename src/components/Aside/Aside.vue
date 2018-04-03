<template>
  <aside id="aside">
      <Links />
      <Directories />
  </aside>
</template>


<script>
import Links from './Links';
import Directories from './Directories'

export default {
  name: 'Aside',
  
  components:
  {
      Links,
      Directories,
  },
}
</script>
