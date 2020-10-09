<template>
    <div>
        <button @click="deleteComment()" v-if="isUserComment == true">Delete Comment</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "delete-comments",
        data() {
            return {
                isUserComment: false,
            }
        },
        props: {
            commentId: Number,
            userId: Number,
        },
        methods: {
            deleteComment: function() {
                axios.request({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/comments",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            checkCreator: function() {
                let currentUser = cookies.get('userId')
                if(currentUser == this.userId) {
                    this.isUserComment = true
                }
            }
        },
        mounted () {
            this.checkCreator();
        },
    }
</script>

<style lang="sass" scoped>

</style>