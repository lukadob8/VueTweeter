<template>
    <div v-if="loginToken = loginToken">
        <router-link to="/editprofile"> Edit Profile </router-link>
        <br>
        <router-link to="/discover"> Find Someone to Follow </router-link>
        <br>
        <router-link to="/feed"> Your Feed </router-link>
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

// import axios from "axios"
// import cookies from "vue-cookies"

    export default {
        name: "profile-page",
        components: {
            UserTweets,
            MakeTweets,
            Logout,
            YourFollowers,
        },
        data() {
            return {
                loginToken: cookies.get('session')
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>