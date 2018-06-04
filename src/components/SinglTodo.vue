<template>
    <div id="show-blogs">
      <p>super</p>

    </div>
</template>

<script>

import { todosService } from '../services/TodosService';

export default {

    data () {
        return {

        }
    },
    methods: {
        editTodo(){
          todosService.edit(this.edit)
           .then(()=> {
             //this.$router.push('/todos')
           })
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
