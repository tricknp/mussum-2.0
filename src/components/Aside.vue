<template>
  <aside>
      <h1>sou o aside</h1>
  </aside>
</template>

<script>
export default {
  name: 'Aside',

  data(){
      return{
          links: 
          [
              {item: 'test1'},
              {item: 'test2'},
              {item: 'test3'},
              {item: 'test4'},
          ],

          diretorios:
          [
              {dir: 'test11'},
              {dir: 'test22'},
              {dir: 'test33'},
              {dir: 'test33'},
          ],
      }
  },
}
</script>

