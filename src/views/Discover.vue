<template>
    <div>
        <h2 @click="showAllUsers">Show Users</h2>
        <div v-for="user in users" :key="user.userId">
            <h2> {{ user.username }} </h2>
            <p> {{ user.bio }} </p>
            <p @click="followUser(user.userId)">Follow</p>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "discover-page",
        data() {
            return {
                users: []
            }
        },
        methods: {
            showAllUsers: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                }).then((response) => {
                    console.log(response)
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                })
            },
            followUser: function(userId) {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        //this.users.userId is wrong but not sure how to get userId
                        followId: userId
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
        }
    }
</script>

<style lang="sass" scoped>

</style>