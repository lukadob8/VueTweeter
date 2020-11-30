<template>
    <div id="title">
        <header-vue />
        <h2>Discover</h2>
        <div id="grid">
            <div id="user" v-for="user in users" :key="user.userId">
            <h2> {{ user.username }} </h2>
            <p> {{ user.bio }} </p>
            <follow v-bind:userId="user.userId"> </follow>
            
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import cookies from 'vue-cookies'
import Follow from "../components/Follow.vue"
import HeaderVue from "../components/HeaderVue"

    export default {
        name: "discover-page",
        components: {
            Follow,
            HeaderVue,
        },
        data() {
            return {
                users: [],
                // isFollowed: false,
            }
        },
        methods: {
            showAllUsers: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/api/users",
                    
                }).then((response) => {
                    console.log(response)
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                })
            },
           
        },
        mounted () {
            this.showAllUsers();
        },
    }
</script>

<style lang="scss" scoped>
#title{
    display: grid;
    align-items: center;
    justify-items: center;
}
#grid{
    display: grid;
    align-items: center;
    justify-items: center;
    row-gap: 20px;

    #user{
        display: grid;
        align-items: center;
        justify-items: center;
        border: solid lightblue;
        width: 30vw;
        padding-bottom: 10px;
    }
}

@media only screen and (min-width:600px) {
    #grid{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
}

</style>