<template>
    <div id="title">
        <header-vue> </header-vue>
        <!-- <button @click="showFeed">Click for Your Feed</button> -->
        <div id="tweets" v-for="user in users" :key="user.userId">
            <h2> Username {{ user.username }} </h2>
            <followed-tweets v-bind:userId="user.userId"> </followed-tweets>
           
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import FollowedTweets from '../components/FollowedTweets.vue'
import HeaderVue from '../components/HeaderVue.vue'

    export default {
        name: "feed-page",
        components: {
            FollowedTweets,
            HeaderVue,
        },
        data() {
            return {
                users: [],
            }
        },
        methods: {
            showFeed: function() {
                axios.request({
                    method: "GET",
                    url: "https://tweeterest.ml/api/follows",
                    headers: {
                        "Content-Type":"application/json",
                        "X-Api-Key": "xdW9CWD3P1QVji9QlDLjt4GzSQ4sFcbGuxiCE6r9zD6Vx"
                    },
                    params: {
                        userId: cookies.get('userId')
                    }
                }).then((response) => {
                    console.log(response)
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted () {
            this.showFeed();
        },
    }
</script>

<style lang="scss" scoped>
#title{
    display: grid;
    align-items: center;
    justify-items: center;
    
    
    

    #tweet{
        display: grid;
        align-items: center;
        justify-items: center;
        border-bottom: solid;
       
        
        
    }
}

</style>