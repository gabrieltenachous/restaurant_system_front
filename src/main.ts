import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import axios from 'axios';
import VueApexCharts from "vue3-apexcharts"; 
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router/index' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap'


const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.use(createPinia())
app.use(router)
app.use(VueApexCharts);

app.mount('#app')
