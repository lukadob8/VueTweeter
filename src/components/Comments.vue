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
        name: "comments",
        props: {
            tweetId: Number,
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
                    url: "http://127.0.0.1:5000/api/comments",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId,
                        content: this.commentContent
                    }
                }).then((response) => {
                    console.log(response)
                    this.commentContent = ""
                    this.isCommenting = false
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>