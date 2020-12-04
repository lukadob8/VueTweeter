<template>
    <div>
        <button @click="startComment" v-if="isCommenting == false">Comment</button>
        <div v-if="this.isCommenting == true">
            <textarea id="comment" v-model="commentContent"></textarea>
            <button @click="makeComment">Post Comment</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "post-nested-comments",
        props: {
            commentId: Number,
        },
        data() {
            return {
                commentContent: "",
                isCommenting: false,
            }
        },
        methods: {
            startComment: function() {
                this.isCommenting = true
            },
            makeComment: function() {
                axios.request({
                    method: "POST",
                    url: "http://127.0.0.1:5000/api/nested-comments",
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId,
                        content: this.commentContent
                    }
                }).then((response) => {
                    console.log(response)
                    this.isCommenting = false
                    this.commentContent = ""
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>