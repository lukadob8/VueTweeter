<template>
    <div>
         <button @click="deleteTweet(tweet.tweetId)">Delete</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "delete-user-tweets",
        methods: {
            deleteTweet: function(tweetId) {
                axios.request({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: tweetId
                    }
                }).then((response) => {
                    console.log(response)
                    
                    
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>