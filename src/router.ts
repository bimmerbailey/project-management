import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const linkActiveClass = 'md-active-link';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/viewProjects',
      name: 'viewProjects',
      component: () => import( './views/ProjectsViewer.vue'),
    },
    // {
    //   path: '/viewer',
    //   name: 'viewer',
    //   component: () => import( './views/ProjectsViewer.vue'),
    // },
  ],
});
