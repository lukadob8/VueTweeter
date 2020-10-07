<template>
    <div>
        <h2 @click="showAllUsers">Show Users</h2>
        <div v-for="user in users" :key="user.userId">
            <h2> {{ user.username }} </h2>
            <p> {{ user.bio }} </p>
            <follow v-bind:userId="user.userId"> </follow>
            <!-- <p @click="followUser(user.userId)" v-if="isFollowed == false">Follow</p>
            <p @click="unFollow(user.userId)" v-else-if="isFollowed == true">Unfollow</p> -->
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import cookies from 'vue-cookies'
import Follow from "../components/Follow.vue"

    export default {
        name: "discover-page",
        components: {
            Follow,
        },
        data() {
            return {
                users: [],
                // isFollowed: false,
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
            // followUser: function(userId) {
            //     axios.request({
            //         method: "POST",
            //         url: "https://tweeterest.ml/api/follows",
            //         headers: {
            //             "Content-Type":"application/json",
            //             "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
            //         },
            //         data: {
            //             loginToken: cookies.get('session'),
            //             followId: userId
            //         }
            //     }).then((response) => {
            //         this.isFollowed = true
            //         console.log(response)
            //     }).catch((error) => {
            //         console.log(error)
            //     })
            // },
            // unFollow: function(userId) {
            //     axios.request({
            //         method: "DELETE",
            //         url: "https://tweeterest.ml/api/follows",
            //         headers: {
            //             "Content-Type":"application/json",
            //             "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
            //         },
            //         data: {
            //             loginToken: cookies.get('session'),
            //             followId: userId
            //         }
            //     }).then((response) => {
            //         console.log(response)
            //         this.isFollowed = false
            //     }).catch((error) => {
            //         console.log(error)
            //     })
            // },
        }
    }
</script>

<style lang="sass" scoped>

</style>