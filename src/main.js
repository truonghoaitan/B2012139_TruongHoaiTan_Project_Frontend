import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/themify-icons/themify-icons.css"
import './assets/main.css'
ádf
createApp(App).mount('#app')
import router from "./router";
createApp(App).use(router).mount("#app");
