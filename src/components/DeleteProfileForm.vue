<template>
    <div id="grid">
        <p>To delete your account please confirm your password to continue</p>
        <input type="password" v-model="password" id="passwordInput">
        <br>
        <button @click="deleteProfile">Delete Account</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "delete-form",
        data() {
            return {
                password: ""
            }
        },
        methods: {
            deleteProfile: function() {
                axios.request({
                    method: "DELETE",
                    url: "http://127.0.0.1:5000/api/users",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    data: {
                        loginToken: cookies.get('session'),
                        password: this.password
                    }
                }).then((response) => {
                    console.log(response)
                    cookies.delete('session')
                    cookies.delete('userId')
                    this.$router.push({name: "signup-page"})
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
#grid{
    display: grid;
    align-items: center;
    justify-items: center;
}

</style>