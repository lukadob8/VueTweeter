<template>
    <div>
         <button @click="editing = tweetId">Edit</button>
         <div v-if="editing == tweetId">
                <textarea id="newTweet" v-model="newTweet"></textarea>
                <button @click="editTweets()">Post Edit</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "edit-user-tweets",
        props: {
            tweetId: Number,
        },
        data() {
            return {
                newTweet: "",
                editing: -1,
            }
        },
        methods: {
            editTweets: function() {
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
                        tweetId: this.tweetId,
                        content: this.newTweet
                    },
                    
                }).then((response) => {
                    console.log(response)
                    window.location.reload()
                }).catch((error) => {
                    console.log(error)
                })
            },
        },
    }
</script>

<style lang="sass" scoped>

</style>