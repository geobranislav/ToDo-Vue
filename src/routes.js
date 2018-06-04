import addTodo from './components/AddTodo.vue';
import showTodos from './components/ShowTodos.vue';
import singlTodo from './components/SinglTodo.vue';
import todos from './components/todos.vue';


export default [
    { path: '/', component: todos},
    { path: '/add', component: addTodo,name: 'add-todo'},
    { path: '/singl/:id', component: singlTodo},
    { path: '/todos', component: todos}
]
