import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EditNote from '../views/EditNote.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная',
    },
  },
  {
    path: '/notes/new',
    name: 'Create',
    component: EditNote,
    meta: {
      title: 'Создать заметку',
      newNote: true,
    },
  },
  {
    path: '/notes/:id/edit',
    name: 'Edit',
    component: EditNote,
    meta: {
      title: 'Изменить заметку',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(((to, from, next) => {
  document.title = to.meta.title;
  next();
}));

export default router;
