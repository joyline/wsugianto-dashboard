<template>
    <div>
        <!-- <h1>Todos</h1> -->
        <div v-bind:key="todo.id" v-for="todo in todos">
            <!-- <h3>{{todo.title}}</h3> -->
            <ForumItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import ForumItem from './ForumItem.vue';

export default {
    name: "Todos", // component names
    components: {
        ForumItem
    },
    props: ["todos"],
    methods: {
        test() {
            console.log('asdasdas');
        }
    }
}
</script>

<style scoped>

</style>
