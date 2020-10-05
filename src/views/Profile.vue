<template>
    <div>
        <router-link to="/editprofile"> Edit Profile </router-link>
        <br>
        <router-link to="/discover"> Find Someone to Follow </router-link>
        <br>
        <router-link to="/feed"> Your Feed </router-link>
        <make-tweets />
        <user-tweets />
    </div>
</template>

<script>
import UserTweets from "../components/UserTweets.vue"
import MakeTweets from "../components/MakeTweets.vue"
// import axios from "axios"
// import cookies from "vue-cookies"

    export default {
        name: "profile-page",
        components: {
            UserTweets,
            MakeTweets,
        },
    }
</script>

<style lang="sass" scoped>

</style>