<template>
    <div id="button">
        <button v-if="showComments == false" @click="getComments()">Show Comments</button>
        <button v-if="showComments == true" @click="showComments = false">Hide Comments</button>
        <div id="grid" v-if="showComments == true">
            <div id="comment" v-for="comment in comments" :key="comment.commentId">
            <p> {{ comment.content }} </p>
            <comment-likes v-bind:commentId="comment.commentId"> </comment-likes>
            <edit-comments v-bind:commentId="comment.commentId" v-bind:userId="comment.userId"> </edit-comments>
            <delete-comments v-bind:commentId="comment.commentId" v-bind:userId="comment.userId"> </delete-comments>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
// import cookies from 'vue-cookies'
import EditComments from '../components/EditComments.vue'
import CommentLikes from '../components/CommentLikes.vue'
import DeleteComments from '../components/DeleteComments.vue'

    export default {
        name: "show-comments",
        props: {
            tweetId: Number,
        },
        data() {
            return {
                comments: [],
                showComments: false,
            }
        },
        components: {
            EditComments,
            CommentLikes,
            DeleteComments,
        },
        methods: {
            getComments: function() {
                this.showComments = true
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/comments",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    this.comments = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
#button{
    display: grid;
    align-items: center;
    justify-items: center;
}
#grid{
    display: grid;
    align-items: center;
    justify-items: center;

    #comment{
         display: grid;
        align-items: center;
        justify-items: center;
    }
}

</style>