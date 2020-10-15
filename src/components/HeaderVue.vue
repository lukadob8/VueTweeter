<template>
    <div id="header">
        <router-link to="/editprofile"> Edit Profile </router-link>
           
            <router-link to="/discover"> Discover </router-link>
          
            <router-link to="/feed"> Your Feed </router-link>
            
            <router-link to="/profile"> Your Profile </router-link>
    </div>
</template>

<script>
    export default {
        name: "header-vue",
    }
</script>

<style lang="scss" scoped>
#header{
    display: grid;
    align-items: center;
    justify-items: center;
    border: solid lightblue;
    width: 60vw;
    row-gap: 20px;
    
}

@media only screen and (min-width:600px) {
    #header{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 80vw;
        height: 10vh;
        border: solid lightblue;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
    }
}

</style>