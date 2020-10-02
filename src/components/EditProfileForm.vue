<template>
    <div>
        <div>
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
        <h2 @click="updateProfile">Update Profile</h2>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

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

<style lang="sass" scoped>

</style>