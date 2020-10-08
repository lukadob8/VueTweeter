<template>
    <div>
        <button @click="followUser()" v-if="isFollowed == false">Follow</button>
        <button @click="unFollow()" v-else-if="isFollowed == true">Unfollow</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        name: "follow",
        data() {
            return {
                isFollowed: false,
            }
        },
        props: {
            userId: Number,
        },
        methods: {
            followUser: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        followId: this.userId
                    }
                }).then((response) => {
                    this.isFollowed = true
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            unFollow: function() {
                axios.request({
                    method: "DELETE",
                    url: "https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        followId: this.userId
                    }
                }).then((response) => {
                    console.log(response)
                    this.isFollowed = false
                }).catch((error) => {
                    console.log(error)
                })
            },
        },
    }
</script>

<style lang="sass" scoped>

</style>