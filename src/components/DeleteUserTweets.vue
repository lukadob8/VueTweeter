<template>
    <div>
         <button v-if="this.userId == this.LoginId" @click="deleteTweet()">Delete</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "delete-user-tweets",
        props: {
            tweetId: Number,
            LoginId: Number,
        },
        data() {
            return {
                userId: cookies.get('userId'),
            }
        },
        methods: {
            deleteTweet: function() {
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/tweets",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    console.log(response)
                    window.location.reload()
                    
                    
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>