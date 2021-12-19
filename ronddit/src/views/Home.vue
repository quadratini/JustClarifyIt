<template>
    <div id="app" class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld message="Welcome to Ronddit"/>
        <h1>Posts: </h1>
        <div id="posts">
            <Posts
                    v-for="(post, index) in postsData"
                    :key="post.id"
                    :post-data="postsData[index]"
                    :user-data="usersData"
                    :index="index"
                    >
            </Posts>
        </div>
        <router-view/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import {postsData, usersData} from '@/store/store.js'

export default {
    name: 'Home',
    components: {
        HelloWorld,
        Posts
    },
    created: function () {
        //console.log(usersData);
    },
    data: function () {
        return {
            usersData,
            postsData,
            postIndex: 0
        }
    }
}
</script>
