<template>
    <div id="userPage">
        <!-- <h2 @click="showUserTweets">Show Tweets</h2> -->
        <!-- <div v-for="tweet in tweets" :key="tweet.tweetId"> -->
            <display-user-tweets v-bind:tweets="tweets"> </display-user-tweets>
            <!-- <p> {{ tweet.content }} </p> -->
            <!-- <button @click="editing = tweet.tweetId">Edit</button> -->
            <!-- <button @click="deleteTweet(tweet.tweetId)">Delete</button> -->
            <!-- <comments v-bind:tweetId="tweet.tweetId"> </comments>
            <tweet-likes v-bind:tweetId="tweet.tweetId"> </tweet-likes> -->
            <!-- <div v-if="editing == tweet.tweetId">
                <textarea id="newTweet" v-model="newTweet"></textarea>
                <p @click="editTweets(tweet.tweetId)">Post Edit</p>
            </div> -->
       
        <!-- </div> -->
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
// import Comments from "../components/Comments.vue"
// import TweetLikes from "../components/TweetLikes.vue"
import DisplayUserTweets from "../components/DisplayUserTweets.vue"

    export default {
        name: "user-tweets",
        components: {
            // Comments,
            // TweetLikes,
            DisplayUserTweets,
        },
        data() {
            return {
                tweets: [],
                newTweet: "",
                editing: -1,
            }
        },
        
        methods: {
            getUserTweets: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    this.tweets = response.data.reverse()
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            // editTweets: function(tweetId) {
            //     for(let i = 0; i < this.tweets.length; i++) {
            //         console.log(this.tweets[i].tweetId)
            //     }
            //     this.editing = -1,
            //     axios.request({
            //         method: "PATCH",
            //         url: "https://tweeterest.ml/api/tweets",
            //         headers: {
            //             "Content-Type":"application/json",
            //             "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
            //         },
            //         data: {
            //             loginToken: cookies.get('session'),
            //             tweetId: tweetId,
            //             content: this.newTweet
            //         },
                    
            //     }).then((response) => {
            //         console.log(response)
            //     }).catch((error) => {
            //         console.log(error)
            //     })
            // },
            // deleteTweet: function(tweetId) {
            //     axios.request({
            //         method: "DELETE",
            //         url: "https://tweeterest.ml/api/tweets",
            //         headers: {
            //             "Content-Type":"application/json",
            //             "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
            //         },
            //         data: {
            //             loginToken: cookies.get('session'),
            //             tweetId: tweetId
            //         }
            //     }).then((response) => {
            //         console.log(response)
                    
                    
            //     }).catch((error) => {
            //         console.log(error)
            //     })
            // }

            
        },
        mounted () {
            this.getUserTweets();
        },
    }
</script>

<style lang="scss" scoped>
// #userPage{
//     display: grid;
//     justify-items: center;
//     align-items: center;
// }

</style>