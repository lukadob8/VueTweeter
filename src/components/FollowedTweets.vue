<template>
    <div>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <h4>Tweet:</h4>
            <p> {{ tweet.content }} </p>
            <p> {{ tweet.created_at }} </p>
            <tweet-likes v-bind:tweetId="tweet.tweetId"> </tweet-likes>
            <comments v-bind:tweetId="tweet.tweetId"> </comments>
            <show-comments v-bind:tweetId="tweet.tweetId"> </show-comments>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
//import cookies from 'vue-cookies'
import Comments from '../components/Comments.vue'
import ShowComments from '../components/ShowComments.vue'
import TweetLikes from '../components/TweetLikes.vue'


    export default {
        props: {
            userId: Number,
        },
        name: "followed-tweets",
        data() {
            return {
                tweets: [],
            }
        },
        components: {
            Comments,
            ShowComments,
            TweetLikes,
        },
        methods: {
            showFollowedTweets: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: this.userId
                    }
                }).then((response) => {
                    this.tweets = response.data
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted () {
            this.showFollowedTweets();
        },
    }
</script>

<style lang="sass" scoped>

</style>