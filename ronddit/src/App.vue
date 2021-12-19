<template>
    <div id="nav">
        <router-link :to="{name: 'Home'}"><img id="navBarIcon" src="./assets/logo.png" alt="Navbar icon"/></router-link>
        <div id="navLinks">
            <router-link :to="{name: 'Home'}">Ronddit</router-link> |
            <router-link :to="{name: 'About'}">About</router-link>
        </div>
    </div>
    <router-view/>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#navBarIcon {
    height: 50px;
}

#nav {
    display: flex;
    top: 0;
    width: 100%;
    background-color: #1A1A1B;
    overflow: auto;
    height: auto;
}

#navLinks {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
body,html {
    margin:0;
    padding:0;
}
</style>
