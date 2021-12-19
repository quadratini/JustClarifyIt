<template>
    <h1>Post Details</h1>
    <h1>{{ postsData[id].title }}</h1>
    <h3>By: {{ usersData[postsData[id].userId].name }}</h3>
    <hr>
    <h3>Comments: </h3>
    <p v-for="comment in postsData[id].comments" :key="comment + id">
        {{ usersData[comment.userId].name }}: {{ comment.message }}
    </p>
</template>

<script>
import { usersData, postsData } from '@/store/store'
export default {
    name: 'PostDetails',
    components: {

    },
    data: function() {
        return {
            usersData,
            postsData,
            id: this.$route.params.id,

        }
    }
}
</script>

<style>

</style>
