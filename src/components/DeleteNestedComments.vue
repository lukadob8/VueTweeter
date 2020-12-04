<template>
    <div>
        <button @click="deleteComment()" v-if="isUserComment == true">delete</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "delete-nested-comments",
        data() {
            return {
                isUserComment: false
            }
        },
        props: {
            userId: Number,
            commentId: Number,
        },
        methods: {
            deleteComment: function() {
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/nested-comments",
                    data: {
                        loginToken: cookies.get('session'),
                        nestedCommentId: this.commentId
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