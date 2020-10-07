<template>
    <div>
        <button @click="showFollowers">Your Followers</button>
        <div v-for="follower in followers" :key="follower.userId">
            <h4>Username:</h4>
            <p>{{ follower.username }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "your-followers",
        data() {
            return {
                followers: []
            }
        },
        methods: {
            showFollowers: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/followers",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    console.log(response)
                    this.followers = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>