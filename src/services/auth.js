import Vue from 'vue'

export default {
    getRole() {
        return localStorage.getItem('role')
    },

}