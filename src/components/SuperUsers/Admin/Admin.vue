<template>
  <section>
     
      <Header />
     
      <div>
        <div>
          <TeacherBox />
          <ActivitiesBox />  
        </div>
        
        <div>
          <LinksBox />
          <DirectoriesBox />
          <CoursesBox /> 
        </div>
     
      </div>
  </section>
</template>

<script>
//import FileUpload from '../../Upload/FileUpload'

import Header from '../../FixedComponents/Header/Header'
import TeacherBox from '../Boxes/Teacher/TeacherBox'
import ActivitiesBox from '../Boxes/ActivitiesBox'
import LinksBox from '../Boxes/LinksBox'
import DirectoriesBox from '../Boxes/DirectoriesBox'
import CoursesBox from '../Boxes/CoursesBox'

export default {
  name: 'Admin',

  components: { Header, TeacherBox, ActivitiesBox, LinksBox, DirectoriesBox, CoursesBox },

}
</script>
