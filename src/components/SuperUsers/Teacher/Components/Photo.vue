<template>
  <div class="div-teacher-img">

      <div v-show="upload">
        <PhotoUpload v-if="this.$bus.isOwner" />
      </div>

      <div class="square-photo" v-show="photo">

        <img v-if="img" class="teacher-photo" :src="`data:image/png;base64,${img}`">
        <img v-if="!img" class="teacher-photo" :src="defaultImg">

        <button @click="showUpload">
          <IconEdit v-if="this.$bus.isOwner" class="edit-photo-profile" />
        </button>

      </div>

  </div>

</template>


<script>
import PhotoUpload from "../../../Upload/PhotoUpload";
import { url } from '../../../_mixins/url'
import IconEdit from '../../../_utils/Svgs/IconEdit'
import axios from 'axios'

export default {

  components: { PhotoUpload, IconEdit },

  mixins: [url],

  data(){
    return{
      defaultImg: '../../../../../static/images/blackNwhite.jpeg',
      img: '',
      upload: false,
      photo: true,
    }
  },

  methods: {
    getPhoto() {

      let professor = this.$route.params.targetName;
      this.$Progress.start();

      axios
        .get(`${this.BASE_URL}api/photo`, {
          headers: { professor: professor }
        })
        .then((res, err) => {

          if (professor == this.$route.params.targetName) {
            this.img = res.data;
          }

          this.$Progress.finish();
        })
        .catch(error => {
          this.$Progress.finish();
          this.img = 0;
        });
    },

    showUpload(){
      this.upload = true
      this.photo = false
    },

  },

  created() {
    this.getPhoto();

    this.$bus.$on("selectProfessor", username => {
      this.getPhoto();
    });

    this.$bus.$on('onUpload', () => {
      this.upload = false;
      this.photo = true;
      this.getPhoto();
    });

  }
};
</script>
