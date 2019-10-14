import Vue from 'vue';
import Router from 'vue-router';

/**
 * import paths
 */
import routes from '@/router/routes';
import { setTitle, setDescription } from '@/mixins';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title);
  setDescription(to.meta.description);
  next();
});
export default router;
