<template>
  <section>
      <Header />
      <TeacherBox />
      <LinksBox />
      <DirectoriesBox />
      <CoursesBox />
  </section>
</template>

<script>
//import FileUpload from '../../Upload/FileUpload'
import Header from '../../FixedComponents/Header/Header'
import TeacherBox from './Boxes/TeacherBox'
import LinksBox from './Boxes/LinksBox'
import DirectoriesBox from './Boxes/DirectoriesBox'
import CoursesBox from './Boxes/CoursesBox'

export default {
  name: 'Admin',

  components: { Header, TeacherBox, LinksBox, DirectoriesBox, CoursesBox },

}
</script>
