import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vFadeIn } from './directives/fadeIn'

const app = createApp(App)
app.directive('fade-in', vFadeIn)
app.mount('#app')
