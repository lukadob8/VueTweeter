<template>
    <div id="page">
        <header-vue />
        <div id="grid">
            <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>UserName</p>
        <input type="text" id="username-input" v-model="username">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <p>Bio</p>
        <textarea id="bio-input" v-model="bio"></textarea>
        <p>Birthday</p>
        <input type="text" id="birthday-input" v-model="birthday">
        <br>
        <button @click="updateProfile">Update Profile</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import HeaderVue from "../components/HeaderVue"

    export default {
        name: "edit-profile",
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthday: ""
            }
        },
        components: {
            HeaderVue,
        },
        methods: {
            updateProfile: function() {
                axios.request({
                    method: "PATCH",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthday
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

<style lang="scss" scoped>
#page{
    display: grid;
    align-items: center;
    justify-items: center;
}
#grid{
    display: grid;
    align-items: center;
    justify-items: center;
}

</style>