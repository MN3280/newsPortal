import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import SignUpForm from "../views/SignUpForm.vue"
import LoginForm from '../views/LoginForm.vue'
import FavoritePage from '../views/FavoritePage.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/register',
      name: 'SignUp',
      component: SignUpForm
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/articles/:id',
      name: 'ArticleDetail',
      component: ArticleDetail

    },
    {
      path: '/favorite',
      name: 'FavoritePage',
      component: FavoritePage

    },
  ]
})
router.beforeEach((to, from, next) => {
  console.log("to", to);
  console.log("from", from);

  if ((to.name === "LoginForm" || to.name === "SignUp") && localStorage.getItem("access_token")) {
    next({ name: "home" })
  } else if (to.name === "FavoritePage" && !localStorage.getItem("access_token")) {
    next({ name: "home" })
  } else {
    next()
  }
})
export default router
