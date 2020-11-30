<template>
    <div id="grid">
        <p>Likes {{ likesNum }}</p>
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
                tweetsLiked: [],
                likesNum: 0,
            }
        },
        methods: {
            likeTweet: function() {
                this.isLiked = true,
                axios.request({
                    method: "POST",
                    url: "http://127.0.0.1:5000/api/tweet-likes",
                    
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    this.likesNum++
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            unlikeTweet: function() {
                this.isLiked = false,
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/tweet-likes",
                    
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    this.likesNum--
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            getTweetLikes: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/tweet-likes",
                    
                    params: {
                        tweetId: this.tweetId
                    }

                }).then((response) => {
                    
                    this.tweetsLiked = response.data
                    this.likesNum = this.tweetsLiked.length
                   
                    let currentUser = cookies.get('userId')
                    for(let i = 0; i < this.tweetsLiked.length; i++) {
                        if(currentUser == this.tweetsLiked[i].userId) {
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
            this.getTweetLikes();
        },
    }
</script>

<style lang="scss" scoped>
#grid{
    display: grid;
    align-items: center;
    justify-items: center;
}

</style>