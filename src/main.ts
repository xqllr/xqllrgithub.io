import { createApp } from 'vue'
import '@shoelace-style/shoelace/dist/themes/light.css';
import App from './App.vue'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.10.0/cdn/');

createApp(App).mount('#app')
