<template>
    <div class="forum-item" v-bind:class="{'is-complete': forum.completed}">
        <!-- <p>Todo Item</p> -->
        <p>
            <!-- <input type="checkbox" name="" id="" v-on:change="markComplete"> -->
            <h2> title: {{forum.forumName}}</h2>
            <h5> description: {{forum.forumDescription}}</h5>
            <!-- {{forum.connectForumTags}} -->
            <h5>
                Created By:
                {{forum.User.firstName}}
                {{forum.User.lastName}}
            </h5>
            <h5>Post Tags: <button v-for="i in tags" :key="i.Tag.id"> {{i.Tag.tagName}}</button> </h5>
            <!-- <h5>Comments:: <span v-for="i in comments" :key="i.Comments.id"></span></h5> -->
            <!-- query forum -->
            <!-- forum description -->
            <h5>Comments: <br> <span v-for="j in comments" :key="j.Comment"> {{j.message}} <br> </span></h5>
            <!-- <button @click="test()">aaaa</button> -->
            <!-- query comment -->
            <button v-if="logged() == true" @click="$emit('del-forum', forum.id)" class="del">Delete</button>
            <button v-if="logged() == true" @click="$emit('del-forum', forum.id)" class="del">Update</button>
            <br> 

            <span v-if="logged() == true">Add Comment Here: </span> <input v-if="logged() == true" type="text" name="" id="">
            <!-- <a href=""> <button type="submit"> Post Comment </button>  </a> -->
            <a v-if="logged() == true" href="">Post Comment</a>
            <!-- where user create comment -->
        </p>
    </div>
</template>

<script>
export default {
    name: "ForumItem",
    props:["forum"],
    data() {
        return {
            tags: this.forum.ConnectForumTags,
            comments: this.forum.Comments,
        }
    },
    methods: {
        markComplete() {
            this.forum.completed = !this.forum.completed
            // console.log(123)
        },
        logged() {
            console.log(localStorage.getItem('secretkey') != null)
            if(localStorage.getItem('secretkey') != null) {
                return true
            } else {
                return false
            }
        },
        comments() {
            {{forum.Comments}}
        },
        tags() {

        },
        test() {
            // console.log(this.tags)
            console.log(this.comments)
        }
    },
}
</script>

<style scoped>
    .forum-item {
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
