<template>
    <div>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <h4>Tweet:</h4>
            <p> {{ tweet.content }} </p>
            <p> {{ tweet.created_at }} </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


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