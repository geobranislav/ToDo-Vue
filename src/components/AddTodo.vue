<template>
    <div id="add-blog">
        <h1>Add ToDo</h1>
        <form  @submit.prevent="onSubmit">
            <h4> Title:</h4>
            <input type="text" name="titile" v-model="todo.title" required />
            <div id="select">
                <h4> Priority:</h4>
                <select v-model="todo.priority">
                    <option disabled value="">Please select one</option>
                    <option>height</option>
                    <option>normal</option>
                    <option>low</option>
                </select>
            </div>
            <div>
                <h4>Completed?</h4>
                <label for="true" class="container">true
                <input type="radio" name="completed" id="true"  value="1" v-model="todo.completed">
                </label>
                <label for="false" class="container">false
                <input type="radio" name="completed" id="false" class="container"  value="0" v-model="todo.completed">
                </label>
            </div>
            <button name="submit" type="submit"  class="btn btn-primary">Add</button>
        </form>
        <div id="preview">
            <h3>Preview todo</h3>
            <p>Todo title: {{ todo.title }}</p>

            <p>Todo priority: {{ todo.priority }}</p>
            <p>Todo completed: {{ todo.completed }}</p>
        </div>

    </div>
</template>

<script>

import { todosService } from '../services/TodosService';

export default{

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
        onSubmit () {
          this.$route.params.id ? this.editTodo() : this.addTodo()
        },

        editTodo() {
          todosService.edit(this.todo)
           .then(()=> {
             this.$router.push('/todos');

           })
        },

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

    created() {
    if(this.$route.params.id) {
      todosService.get(this.$route.params.id)
        .then((response)=> {
          this.todo = response.data
        })
    }
  },
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
