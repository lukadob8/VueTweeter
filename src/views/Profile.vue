<template>
    <div>
        <router-link to="/editprofile"> Edit Profile </router-link>
        <user-tweets />
    </div>
</template>

<script>
import UserTweets from "../components/UserTweets.vue"
// import axios from "axios"
// import cookies from "vue-cookies"

    export default {
        name: "profile-page",
        components: {
            UserTweets,
        },
    }
</script>

<style lang="sass" scoped>

</style>