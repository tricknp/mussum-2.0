<template>
  <section class="admin-section">

      <Header />

      <div class="admin-container">
        <aside class="admin-dashboard">
          <h1 class="header-aside">Admin</h1>
          <span :class="{'active': tabActivities}"  @click="activities()"  > Atividadis  </span>
          <span :class="{'active': tabCourses}"     @click="courses()"     > Cursis      </span>
          <span :class="{'active': tabDirectories}" @click="directories()" > Diretóris   </span>
          <span :class="{'active': tabWikis}"       @click="wikis()"       > Wikis       </span>
          <span :class="{'active': tabHours}"       @click="hours()"       > Horaris     </span>
          <span :class="{'active': tabTeachers}"    @click="teachers()"    > Professoris </span>
        </aside>

        <div class="dashboard-container">
          <h1>{{ title }}</h1>

          <div v-if="tabActivities">
            <ActivitiesBox />
          </div>

          <div v-if="tabCourses">
            <CoursesBox />
          </div>

          <div v-if="tabDirectories">
            <DirectoriesBox />
          </div>

          <div v-if="tabWikis">
            <WikisBox />
          </div>

          <div v-if="tabHours">
            <h2>kkk otario</h2>
          </div>

          <div v-if="tabTeachers">
            <TeacherBox />
          </div>

        </div>
      </div>


      <!--<div class="div-admin">
        <div class="left-boxes">
          <TeacherBox />
          <ActivitiesBox />
        </div>
        <div class="right-boxes">
          <WikisBox />
          <DirectoriesBox />
          <CoursesBox />
        </div>
      </div> -->

  </section>
</template>

<script>
import Header from "../../FixedComponents/Header/Header";
import TeacherBox from "./Boxes/Teacher/TeacherBox";
import ActivitiesBox from "./Boxes/Activities/ActivitiesBox";
import WikisBox from "./Boxes/Wikis/WikisBox";
import DirectoriesBox from "./Boxes/Directories/DirectoriesBox";
import CoursesBox from "./Boxes/Courses/CoursesBox";

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

  data(){
    return{
      title: 'ok',
      tabActivities: true,
      tabCourses: false,
      tabDirectories: false,
      tabWikis: false,
      tabHours: false,
      tabTeachers: false,
    }
  },

  created(){
    this.activities()
    this.courses()
    this.directories()
    this.wikis()
    this.hours()
    this.teachers()

  },

  methods:{
    activities(){
      this.tabActivities  = true
      this.tabCourses     = false
      this.tabDirectories = false
      this.tabWikis       = false
      this.tabHours       = false
      this.tabTeachers    = false
    },

    courses(){
      this.tabActivities  = false
      this.tabCourses     = true
      this.tabDirectories = false
      this.tabWikis       = false
      this.tabHours       = false
      this.tabTeachers    = false
    },

    directories(){
      this.tabActivities  = false
      this.tabCourses     = false
      this.tabDirectories = true
      this.tabWikis       = false
      this.tabHours       = false
      this.tabTeachers    = false
    },

    wikis(){
      this.tabActivities  = false
      this.tabCourses     = false
      this.tabDirectories = false
      this.tabWikis       = true
      this.tabHours       = false
      this.tabTeachers    = false
    },

    hours(){
      this.tabActivities  = false
      this.tabCourses     = false
      this.tabDirectories = false
      this.tabWikis       = false
      this.tabHours       = true
      this.tabTeachers    = false
    },

    teachers(){
      this.tabActivities  = false
      this.tabCourses     = false
      this.tabDirectories = false
      this.tabWikis       = false
      this.tabHours       = false
      this.tabTeachers    = true
    },
  },

};
</script>

<style>

  .admin-container
  {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
    background: black;
  }

  .admin-dashboard
  {
    background: red;
    height: 100%;
    width: 20em;
    display: flex;
    flex-direction: column;;
  }

  .header-aside
  {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }

</style>
