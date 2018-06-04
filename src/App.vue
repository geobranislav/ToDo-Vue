<template>
    <div>
        <Add-header></Add-header>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import AddTodo from './components/AddTodo.vue';
import Header from './components/Header.vue';


export default {
    components: {
        'Add-todo': AddTodo,
        'Add-header': Header
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
