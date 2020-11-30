<template>
    <div id="grid">
        <button @click="showFollowers">Your Followers</button>
        <div id="follow" v-for="follower in followers" :key="follower.userId">
            <h4>Username:</h4>
            <p>{{ follower.username }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "your-followers",
        data() {
            return {
                followers: []
            }
        },
        methods: {
            showFollowers: function() {
                axios.request({
                    method: "GET",
                    url: "http://127.0.0.1:5000/followers",
                    
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    console.log(response)
                    this.followers = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
#grid{
    display: grid;
    align-items: center;
    justify-items: center;
    row-gap: 20px;

    #follow{
        display: grid;
        align-items: center;
        justify-items: center;
        border: solid lightblue;
        padding: 10px;
       
    }
}

</style>