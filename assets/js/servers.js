import Vue from 'vue'
import App from './components/App.vue'
import VueMaterial from 'vue-material'
// import { MdButton, MdContent, MdTabs , MdCheckbox } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
// Vue.use(MdContent)
// Vue.use(MdTabs)

new Vue({
    el: '#app',
    components: {App, VueMaterial}
})