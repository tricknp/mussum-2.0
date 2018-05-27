<template>
    <div v-if="!image">
        <div class="dropzone-area" @dragenter="hovering = true" @dragleave="hovering = false" :class="{'dropzone-hover': hovering}">
            <div class="dropzone-text">
                <span class="dropzone-title">Arraste a imagem aqui ou clique para selecionar</span>
                <span class="dropzone-info" v-if="info">{{ info }}</span>
            </div>
            <input type="file" @change="onFileChange" name="img">
        </div>
    </div>
    <div class="dropzone-preview" v-else>
        <img :src="image" />
        <button @click="onUpload">Upload</button>
        <div class="dropzone-close modal-close" @click="removeImage">
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
import { url } from '../_mixins/url.js'

    export default {
        name: 'imgUpload',
        props: ['info'],
        data() {
            return {
                image: '',
                hovering: false,
                selectedFile: ''
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                    vm.hovering = false;
                };
                reader.readAsDataURL(file);
            },

            onUpload() {
              axios.post(this.BASE_URL + 'api/photo', this.selectedFile)
            },   

            removeImage: function (e) {
                this.image = '';
            }
        }
    };
</script>