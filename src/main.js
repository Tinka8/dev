import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createRouter, createWebHistory } from "vue-router";
import Index from "./Index.vue";
import DogYears from "./DogYears.vue";
import FaceShape from "./FaceShape.vue";
import isPalindrome from "./IsPalindrome.vue";
import Videoplayer from "./Videoplayer.vue";


const routes = [
  { path: '/', component: Index},
  { path: '/lab/dogyears', component: DogYears },
  { path: '/lab/faceshape', component: FaceShape },
  { path: '/lab/isPalindrome', component: isPalindrome },
  { path: '/lab/videoplayer', component: Videoplayer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);

app.use(router);

app.mount('#app');