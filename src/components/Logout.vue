<template>
    <div>
        <br><br>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "logout-page",
        methods: {
            logout: function() {
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/login",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session')
                    }
                }).then((response) => {
                    console.log(response)
                    this.$router.push({name: "login-page"})
                    cookies.remove('session')
                    cookies.remove('userId')
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>