<template>
    <div>
        <h2 @click="showFeed">Show who you Follow</h2>
        <div v-for="user in users" :key="user.userId">
            <h2> {{ user.username }} </h2>
            <p> {{ user.bio }} </p>
            <p></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "feed-page",
        data() {
            return {
                users: [],
            }
        },
        methods: {
            showFeed: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    console.log(response)
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>