<template>
    <div>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <h3>Tweet:</h3>
            <p>{{ tweet.content }}</p>
            <p>{{ tweet.createdAt }}</p>
            <comments vbind:tweetId="tweet.tweetId"> </comments>
            <tweet-likes vbind:tweetId="tweet.tweetId"> </tweet-likes>
            <edit-user-tweets> </edit-user-tweets>
            <delete-user-tweets> </delete-user-tweets>

        </div>
    </div>
</template>

<script>
import Comments from "../components/Comments.vue"
import TweetLikes from "../components/TweetLikes.vue"
import EditUserTweets from "../components/EditUserTweets.vue"
import DeleteUserTweets from "../components/DeleteUserTweets.vue"

    export default {
        name: "display-user-tweets",
        components: {
            Comments,
            TweetLikes,
            EditUserTweets,
            DeleteUserTweets,

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