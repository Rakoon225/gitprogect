import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';
import components from '@/components/UI/index.js';
import { createApp } from 'vue';
import router from './router';
import store from './store';

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(MotionPlugin).use(router).mount('#app');
