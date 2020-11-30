<template>
    <div id="grid">
        <div id="tweets" v-for="tweet in tweets" :key="tweet.tweetId">
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
                    url: "http://127.0.0.1:5000/api/tweets",
                    
                    params: {
                        userId: this.userId
                    }
                }).then((response) => {
                    this.tweets = response.data.reverse()
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

<style lang="scss" scoped>


#tweets{
    display: grid;
    align-items: center;
    justify-items: center;
    width: 40vw;
    border: solid lightblue;

}

</style>