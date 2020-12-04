<template>
    <div>
        <button @click="close()">Profile Card</button>
        <div class="popup" :id="'profileCard' + userId">
            <div class="header">
                <button @click="close()">&times;</button>
                <h3>Username: {{ username }}</h3>
                <h5>email: {{ email }}</h5>
                <br>
            </div>
            
            <div class="body">
                <p>bio: {{ bio }}</p>              
                <p>birthday: {{ birthdate }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'


    export default {
        name: "popup",
        props: {
            username: String,
            email: String,
            bio: String,
            birthdate: String,
            userId: Number,
        },
        // data() {
        //     return {
        //         username: "",
        //         email: "",
        //         bio: "",
        //         birthdate: ""
        //     }
        // },
        methods: {
            // getUser: function() {
            //     var popup = document.getElementById("profileCard")
            //     popup.classList.toggle("show")
            //     axios.request({
            //         method: "GET",
            //         url: "http://127.0.0.1:5000/api/users",
            //         params: {
            //             userId: this.userId
            //         }
            //     }).then((response) => {
            //         console.log(response)
            //         this.username = response.data[0].username
            //         this.email = response.data[0].email
            //         this.bio = response.data[0].bio
            //         this.birthdate = response.data[0].birthdate
            //     }).catch((error) => {
            //         console.log(error)
            //     })
            // },
            close: function() {
                
                var popup = document.getElementById('profileCard' + this.userId)
               
                popup.classList.toggle("show")
            }
            
        },
    }
</script>

<style lang="scss" scoped>
.popup {
    visibility: hidden;
    width: 500px;
    height: 500px;
    max-height: 80vh;
    max-width: 80vw;
    background-color: lightblue;
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    font-size: 2rem;
}

.show{
    visibility: visible;
}


</style>