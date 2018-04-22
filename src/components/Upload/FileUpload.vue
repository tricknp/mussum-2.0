<template>
    <div class="container">
      <!--UPLOAD-->
      <form 
          enctype="multipart/form-data" 
          novalidate 
          v-if="isInitial || isSaving">

        <h1>Upload images</h1>
        
        <div class="dropbox">
          <input 
              type="file" 
              multiple :name="uploadFieldName" 
                       :disabled="isSaving" 
              @change="filesChange($event.target.name, $event.target.files); 
              fileCount = $event.target.files.length" 
              class="input-file">
            <p v-if="isInitial">
              {{ dragText }} <br> {{ dragText2 }}
            </p>
            <p v-if="isSaving">
              Fazendo upload de {{ fileCount }} arquivos...
            </p>
        </div>
      </form>

             <!--SUCCESS-->
      <div v-if="isSuccess">
        <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Upload again</a>
        </p>
        <ul class="list-unstyled">
          <li v-for="item in uploadedFiles" :key="item.url">
            <img :src="item.url" class="" :alt="item.originalName">
          </li>
        </ul>
      </div>
  
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Tente de novo</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
  </div>
</template>

<script>
import { wait } from './utils';

const STATUS_INITIAL = 0, 
      STATUS_SAVING = 1, 
      STATUS_SUCCESS = 2, 
      STATUS_FAILED = 3;

export default {
  name: 'FileUpload',
  
  data(){
    return{
      dragText: 'Arraste seu (s) arquivo (s) aqui para começar',
      dragText2: 'Ou clique em procurar',

      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos'
      
    };
  },

   computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      }
   },
   methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

    /* //--------------- FAKE SERVICE ---------------//
      upload(formData)
        .then(wait(1500)) // DEV ONLY: wait for 1.5s 
        .then(x => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        }) 
      //------------- END FAKE SERVICE -------------//*/
          
        upload(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })

          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        this.save(formData);
        // save it
      }
    },
    mounted() {
      this.reset();
    },    
}
</script>
