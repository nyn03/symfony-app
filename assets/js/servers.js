import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './components/App.vue'


Vue.use(VueMaterial)

new Vue({
    el: '#app',
    components: {App, VueMaterial}
})