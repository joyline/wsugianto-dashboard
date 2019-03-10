<template>
    <div>
        <form v-if="logged() == true" @submit="addForum" action="">
            <h2>add forum</h2>
            <input v-if="logged() == true" type="text" v-model="title" name="title" placeholder="forum title">
            <!-- <a href="http://"></a> -->
            <input v-if="logged()" type="text" name="" v-model="description" id="" placeholder="forum description">
            <input v-if="logged() == true" type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid';
export default {
    name: "AddForum",
    data() {
        return {
            title: ''
        }
    },
    props: {

    },
    methods: {
        addForum(e){
            e.preventDefault();
            
            const newForum = {
                // id: uuid.v4(),
                forumName: this.title,
                forumDescription: this.description,
                // userId: 1,
            }
            // send up to parent
            console.log("AAA",newForum)
            this.$emit('add-forum', newForum);
            // this.title ="";
        },
        logged() {
            console.log(localStorage.getItem('secretkey') != null)
            if(localStorage.getItem('secretkey') != null) {
                return true
            } else {
                return false
            }
    }
    },
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
