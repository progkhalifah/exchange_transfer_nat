import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "normalize.css";
import i18n from "@/i18n";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(i18n);
appInstance.mount('#app');
