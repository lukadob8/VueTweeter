<template>
    <div>
        <button v-if="currentUser == userId" @click="editing=true">Edit</button>
        <div v-if="editing == true">
            <textarea v-model="newComment"></textarea>
            <button @click="editComment()">Submit</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "edit-comments",
        props: {
            commentId: Number,
            userId: Number,
        },
        data() {
            return {
                newComment: "",
                currentUser: cookies.get('userId'),
                editing: false,
            }
        },
        methods: {
            editComment: function() {
                axios.request({
                    method: "PATCH",
                    url: "http://127.0.0.1:5000/api/comments",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                        content: this.newComment
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>