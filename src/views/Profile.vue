<template>
    <div id="tweets" v-if="loginToken = loginToken">
        <h2>Welcome {{ username }}</h2>
        <p>{{ bio }}</p>
        <header-vue />
       
    
        <make-tweets />
        <user-tweets />
        <br>
        <your-followers />
        <br>
        <logout />
    </div>
</template>

<script>
import cookies from "vue-cookies"
import UserTweets from "../components/UserTweets.vue"
import MakeTweets from "../components/MakeTweets.vue"
import Logout from "../components/Logout.vue"
import YourFollowers from "../components/YourFollowers.vue"
import HeaderVue from "../components/HeaderVue.vue"


import axios from "axios"
// import cookies from "vue-cookies"

    export default {
        name: "profile-page",
        components: {
            UserTweets,
            MakeTweets,
            Logout,
            YourFollowers,
            HeaderVue,
            
        },
        data() {
            return {
                loginToken: cookies.get('session'),
                username: "",
                bio: "",
            }
        },
        methods: {
            getUsername: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/users",
                    
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    this.username = response.data[0].username
                    this.bio = response.data[0].bio
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted () {
            this.getUsername();
        },
    }
</script>

<style lang="scss" scoped>
#tweets{
    display: grid;
    align-items: center;
    justify-items: center;

    #header{
        display: grid;
        align-items: center;
        justify-items: center;
        row-gap: 10px;
    }
}

</style>