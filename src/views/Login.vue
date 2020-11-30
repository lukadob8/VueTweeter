<template>
    <div id="login">
        <!-- <img src="@/assets/TweeterLogo.png" alt="Tweeter Logo"> -->
        <h1>Login</h1>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <br><br>
        <button @click="loginUser">Login</button>
        <h3>{{ loginStatus }}</h3>
                  <router-link to="/signup"> Sign Up </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "LOADING"
                axios.request({
                    method: "POST",
                    url: "http://127.0.0.1:5000/api/login",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        email: this.email,
                        password: this.password
                    }
                }).then((response) => {
                    // Check if login token sent
                    console.log(response)
                    this.loginStatus = "SUCCESS"
                    cookies.set('session', response.data.loginToken)
                    cookies.set('userId', response.data.userId)
                    this.$router.push({name: "profile-page"})
                }).catch((error) => {
                    // Show use login failure
                    console.log(error)
                    this.loginStatus = "ERROR"
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    #login{
        display: grid;
        align-items: center;
        justify-items: center;

        

        
    }

</style>