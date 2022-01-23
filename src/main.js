import { createApp } from 'vue';
import App from './App.vue';
import './styles/style.scss';
import { vClickOutside } from '@/directives/vClickOutside.js';

const app = createApp(App);

app.directive('click-outside', vClickOutside);

app.mount('#app');
