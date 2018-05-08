<template>
  <section class="admin-section">
     
      <Header />
     
      <div class="div-admin">

        <div class="left-boxes">
          <TeacherBox />
          <ActivitiesBox />  
        </div>
        
        <div class="right-boxes">
          <WikisBox />
          <DirectoriesBox />
          <CoursesBox /> 
        </div>
     
      </div>

  </section>
</template>

<script>
//import FileUpload from '../../Upload/FileUpload'

import Header from '../../FixedComponents/Header/Header'
import TeacherBox from './Boxes/Teacher/TeacherBox'
import ActivitiesBox from './Boxes/Activities/ActivitiesBox'
import WikisBox from './Boxes/Wikis/WikisBox'
import DirectoriesBox from './Boxes/Directories/DirectoriesBox'
import CoursesBox from './Boxes/Courses/CoursesBox'

export default {
  name: "Admin",

  components: {
    Header,
    TeacherBox,
    ActivitiesBox,
    WikisBox,
    DirectoriesBox,
    CoursesBox
  },

}

</script>
