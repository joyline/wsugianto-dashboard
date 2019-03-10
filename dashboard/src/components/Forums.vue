<template>
    <div>
        <!-- <h1>Todos</h1> -->
        <div v-bind:key="forum.id" v-for="forum in forums">
            <!-- <h3>{{todo.title}}</h3> -->
            
            <ForumItem v-bind:forum="forum" @del-forum="$emit('del-forum', forum.id)"/>
        </div>
    </div>
</template>

<script>
import ForumItem from './ForumItem.vue';

export default {
    name: "Forums", // component names
    components: {
        ForumItem
    },
    props: ["forums"],
    methods: {
        test() {
            console.log('asdasdas');
        }
    }
}
</script>

<style scoped>

</style>
