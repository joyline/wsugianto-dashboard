<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
        <!-- <p>Todo Item</p> -->
        <p>
            <!-- <input type="checkbox" name="" id="" v-on:change="markComplete"> -->
            {{todo.title}}
            <!-- query forum -->
            <!-- query comment -->
            <!-- validate button for logged in user -->
            <button @click="$emit('del-todo', todo.id)" class="del">Delete</button>
            <button @click="$emit('del-todo', todo.id)" class="del">Update</button>
            <br> Add Comment Here: <input type="text" name="" id="">
            <!-- where user create comment -->
        </p>
    </div>
</template>

<script>
export default {
    name: "ForumItem",
    props:["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed
            // console.log(123)
        }
    },
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
