<template>
    <div id="tweet">
        <div id="display" v-for="tweet in tweets" :key="tweet.tweetId">
            <h3>Tweet:</h3>
            <p>{{ tweet.content }}</p>
            <h5>Created On:</h5>
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

<style lang="scss" scoped>
#tweet{
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 20px;

    #display{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 40vw;
        border: solid lightblue;
        padding-bottom: 10px;
        
        
    }
}

@media only screen and (min-width:600px) {
    #tweet{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
}

</style>