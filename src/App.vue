<template>
  <div id="app">
    <img src="@/assets/TweeterLogo.png" alt="Tweeter Logo">
    
    <router-view />
    <!-- <router-link to="/signup"> Sign Up </router-link>
    <router-link to="/login"> Login </router-link> -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  </div>
</template>

<script>
export default {
  
  
}
</script>

<style lang="scss">
button{
  background-color: #2bc4ff;
  border-radius: 8px;
  margin-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
}

a{
  font-family: 'Open Sans', sans-serif;
}

#app{
  display: grid;
  align-items: center;
  justify-items: center;

  h1, h2, h3{
    font-family: 'Nunito', sans-serif;
  }

  p{
    font-family: 'Open Sans', sans-serif;
  }


  img{
    height: 100px;
    padding-bottom: 25px;
  }
}

</style>
