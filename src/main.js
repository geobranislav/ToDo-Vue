import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import addTodo from './components/AddTodo.vue';
import showTodos from './components/ShowTodos.vue';
import todos from './components/todos.vue';
import login from './pages/login.vue';
import {
  requiresAuth,
  guestOnly
} from './guards/guards';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/todos'},
    { path: '/add', component: addTodo, name: 'add-todo', meta: { requiresAuth:true }},
    { path: '/todos', component: todos, name: 'Todos', meta: { requiresAuth:true }},
    { path: '/login', component: login, name: 'Login', meta:{ guestOnly:true }}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
  Promise.resolve(to)
    .then(requiresAuth)
    .then(guestOnly)
    .then(() => {
      next()
    })
    .catch(redirect => {
      next(redirect)
    })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
