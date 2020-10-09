<template>
    <div>
        <h2>Post your thoughts</h2>
        <div>
            <textarea id="tweet" v-model="tweet"></textarea>
            <button @click="makeTweet">Post</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "make-tweets",
        data() {
            return {
                tweet: ""
            }
        },
        methods: {
            makeTweet: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        content: this.tweet
                    }
                }).then((response) => {
                    console.log(response)
                    this.tweet = ""
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>