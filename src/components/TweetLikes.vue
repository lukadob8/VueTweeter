<template>
    <div>
        <button @click="likeTweet" v-if="isLiked == false">Like</button>
        <button @click="unlikeTweet" v-else-if="isLiked == true">Unlike</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "tweet-likes",
        props: {
            tweetId: Number,
        },
        data() {
            return {
                isLiked: false,
            }
        },
        methods: {
            likeTweet: function() {
                this.isLiked = true,
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/tweet-likes",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            unlikeTweet: function() {
                this.isLiked = false,
                axios.request({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/tweet-likes",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
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