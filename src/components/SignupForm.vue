<template>
    <div id="signup">
        <!-- <img src="@/assets/TweeterLogo.png" alt="Tweeter Logo"> -->
        <h1>Sign Up</h1>
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
        <br><br>
        <button @click="signupUser">Sign Up</button>
        <br><br>
        <p>Already have an account?</p>
        <router-link to="/login"> Login </router-link>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "signup-form",
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthday: "YYYY-MM-DD"
            }
        },
        methods: {
            signupUser: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthday
                    }
                }).then((response) => {
                    console.log(response)
                    cookies.set('session', response.data.loginToken)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>
#signup{
    display: grid;
    justify-items: center;
    align-items: center;

    
}

</style>