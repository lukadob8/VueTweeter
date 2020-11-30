<template>
    <div>
        <p>Likes {{ numLikes }}</p>
        <button @click="likeComment()" v-if="isLiked == false">Like</button>
        <button @click="unlikeComment()" v-if="isLiked == true">Unlike</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "comment-likes",
        props: {
            commentId: Number,
        },
        data() {
            return {
                isLiked: false,
                commentsLiked: [],
                numLikes: 0,
            }
        },
        methods: {
            likeComment: function() {
                this.isLiked = true
                axios.request({
                    method: "POST",
                    url: "http://127.0.0.1:5000/api/comment-likes",
                    
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId
                    }
                }).then((response) => {
                    this.numLikes++
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            unlikeComment: function() {
                this.isLiked = false
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/comment-likes",
                    
                    data: {
                        loginToken: cookies.get('session'),
                        commentId: this.commentId
                    }
                }).then((response) => {
                    this.numLikes--
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            checkForLikes: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/comment-likes",
                    
                    params: {
                        commentId: this.commentId
                    }
                }).then((response) => {
                    this.commentsLiked = response.data
                    this.numLikes = this.commentsLiked.length

                    let currentUser = cookies.get('userId')
                    for(let i = 0; i < this.commentsLiked.length; i++) {
                        if(currentUser == this.commentsLiked[i].userId) {
                            this.isLiked = true
                            return
                        }
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted () {
            this.checkForLikes();
        },
    }
</script>

<style lang="sass" scoped>

</style>