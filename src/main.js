import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createRouter, createWebHistory } from "vue-router";
import DogYears from "./DogYears.vue";
import FaceShape from "./FaceShape.vue";

const routes = [
  { path: '/lab/dogyears', component: DogYears },
  { path: '/lab/faceshape', component: FaceShape },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



createApp(App).mount('#app');
