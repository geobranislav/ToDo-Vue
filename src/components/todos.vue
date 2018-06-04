<template>
    <div>
        <app-ShowTodos v-bind:todos="todos" v-on:todoDeleted="deleteTodo($event)"></app-ShowTodos>
    </div>
</template>

<script>

import { todosService } from '../services/TodosService';
import ShowTodos from './ShowTodos.vue';

export default{

  components: {
      'app-ShowTodos': ShowTodos,
  },

    data () {
        return {
            todo: {
                title: '',
                priority: '',
                completed:''
            },
            todos: []
        }
    },
    methods: {
        addTodo() {
            todosService.add(this.todo).then((response) => {
                console.log(response.data);
                this.todos.push(response.data);
            })
        },
        deleteTodo (id) {
            let index = this.todos.findIndex(todo => todo.id === id)
            this.todos.splice(index, 1)
        }


    },
    beforeRouteEnter (to, from, next) {
      todosService.getAll()
        .then((response) => {
            next((vm) => {
              vm.todos = response.data
            })
        })
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}


</style>
