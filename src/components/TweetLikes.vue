<template>
    <div>
        <button @click="likeTweet" v-if="isLiked == false">Like</button>
        <button @click="unlikeTweet" v-else-if="isLiked == true">Unlike</button>
        <!-- <div v-for="tweet in tweetsLiked" :key="tweet.tweetId">
            <button v-if="tweetId != this.tweetId">Follow</button>
            <button v-else-if="tweetId = this.tweetId">Unfollow</button>

        </div> -->
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
                tweetsLiked: [],
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
            },
            getTweetLikes: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/tweet-likes",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        tweetId: this.tweetId
                    }

                }).then((response) => {
                    console.log(response)
                    this.tweetsLiked = response.data
                    // for(let i = 0; i < this.isLiked.length; i++) {
                    //     if(cookies.get('userId') = response.data.userId) {
                    //         this.isLiked = true
                    //     }
                    // }
                    let currentUser = cookies.get('userId')
                    for(let i = 0; i < this.tweetsLiked.length; i++) {
                        if(currentUser == this.tweetsLiked[i].userId) {
                            this.isLiked = true
                        }else if(currentUser != this.tweetsLiked[i].userId) {
                            this.isLiked = false
                        }
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted () {
            this.getTweetLikes();
        },
    }
</script>

<style lang="sass" scoped>

</style>