<template>
    <div id="show-blogs">
        <h1>All TODOS</h1>
        <div v-for="todo in todos" class="single-blog">
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.completed }}</p>
            <p>{{ todo.id }}</p>
            <p>{{ todo.priority }}</p>
            <button v-on:click="deleteTodo(todo.id)">Delete</button>
            <!--button v-on:click.prevent="onSubmit()"> Edit </button-->
            <router-link :to="{ name: 'add-todo', params: { id: todo.id } }">
                <button >Edit</button>
            </router-link>
        </div>

    </div>
</template>

<script>

import { todosService } from '../services/TodosService';

export default {
    props:['todos'],

    data () {
        return {

        }
    },
    methods: {
        deleteTodo(id) {
            todosService.remove(id).then(()=> {
                this.$emit('todoDeleted', id)
            });
        },

        kontrola(){

          console.log(this.edit)
        }
    }

}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
