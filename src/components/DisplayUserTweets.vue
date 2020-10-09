<template>
    <div>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <h3>Tweet:</h3>
            <p>{{ tweet.content }}</p>
            <p>{{ tweet.createdAt }}</p>
            <comments v-bind:tweetId="tweet.tweetId"> </comments>
            <tweet-likes v-bind:tweetId="tweet.tweetId"> </tweet-likes>
            <edit-user-tweets v-bind:tweetId="tweet.tweetId"> </edit-user-tweets>
            <delete-user-tweets v-bind:LoginId="tweet.userId" v-bind:tweetId="tweet.tweetId"> </delete-user-tweets>
            <show-comments v-bind:tweetId="tweet.tweetId"> </show-comments>

        </div>
    </div>
</template>

<script>
import Comments from "../components/Comments.vue"
import TweetLikes from "../components/TweetLikes.vue"
import EditUserTweets from "../components/EditUserTweets.vue"
import DeleteUserTweets from "../components/DeleteUserTweets.vue"
import ShowComments from "../components/ShowComments.vue"

    export default {
        name: "display-user-tweets",
        components: {
            Comments,
            TweetLikes,
            EditUserTweets,
            DeleteUserTweets,
            ShowComments,

        },
        // data() {
        //     return {
        //         userTweets: this.tweets
        //     }
        // },
        props: {
            tweets: Array,
        },
        methods: {
            
        },
    
    }
</script>

<style lang="sass" scoped>

</style>