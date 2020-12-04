<template>
    <div id="button">
        <button v-if="showComments == false" @click="getComments()">Show Comments</button>
        <button v-if="showComments == true" @click="showComments = false">&times;</button>
        <div id="grid" v-if="showComments == true">
            <div id="comment" v-for="comment in comments" :key="comment.commentId">
            <p> {{ comment.content }} </p>
            <comment-likes v-bind:commentId="comment.commentId"> </comment-likes>
            <edit-comments v-bind:commentId="comment.commentId" v-bind:userId="comment.userId"> </edit-comments>
            <delete-comments v-bind:commentId="comment.commentId" v-bind:userId="comment.userId"> </delete-comments>
            <post-nested-comments :commentId="comment.commentId"> </post-nested-comments>
            <show-nested-comments :commentId="comment.commentId"> </show-nested-comments>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

import EditComments from '../components/EditComments.vue'
import CommentLikes from '../components/CommentLikes.vue'
import DeleteComments from '../components/DeleteComments.vue'
import PostNestedComments from '../components/PostNestedComments.vue'
import ShowNestedComments from '../components/ShowNestedComments.vue'

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
            PostNestedComments,
            ShowNestedComments,
        },
        methods: {
            getComments: function() {
                this.showComments = true
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/comments",
                    
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