<template>
    <div>
        <h2 @click="showUserTweets">Show Tweets</h2>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <p> {{ tweet.content }} </p>
            <p @click="editing = tweet.tweetId">Edit</p>
            <p>Delete</p>
            <div v-if="editing == tweet.tweetId">
                <textarea id="newTweet" v-model="newTweet"></textarea>
                <p @click="editTweets(tweet.tweetId)">Post Edit</p>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "user-tweets",
        data() {
            return {
                tweets: [],
                newTweet: "",
                editing: -1,
            }
        },
        
        methods: {
            showUserTweets: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    this.tweets = response.data
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            editTweets: function(tweetId) {
                for(let i = 0; i < this.tweets.length; i++) {
                    console.log(this.tweets[i].tweetId)
                }
                this.editing = -1,
                axios.request({
                    method: "PATCH",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: tweetId,
                        content: this.newTweet
                    },
                    
                }).then((response) => {
                    for(let i = 0; i < this.tweets.length; i++) {
                    if(this.tweets[i].tweetId == tweetId) {
                        this.tweets[i].content = this.newTweet
                    }
                }
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },

            
        }
    }
</script>

<style lang="sass" scoped>

</style>