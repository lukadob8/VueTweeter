<template>
    <div>
        <button v-if="currentUser == userId" @click="editing = true">edit</button>
        <div v-if="editing == true">
            <textarea v-model="newComment"></textarea>
            <button @click="editComment()">Done</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "edit-nested-comments",
        props: {
            commentId: Number,
            userId: Number
        },
        data() {
            return {
                newComment: "",
                currentUser: cookies.get('userId'),
                editing: false
            }
        },
        methods: {
            editComment: function() {
                axios.request({
                    method: "PATCH",
                    url: "http://127.0.0.1:5000/api/nested-comments",
                    data: {
                        loginToken: cookies.get('session'),
                        nestedCommentId: this.commentId,
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