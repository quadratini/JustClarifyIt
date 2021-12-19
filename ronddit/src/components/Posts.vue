<template>
    <hr>
    <div id="post">
        <router-link :to="{name: 'PostDetails', params: { id: index }}">
            <h2>{{ postData.title }}</h2>
            <h3>By: {{ userData[postData.userId].name }}</h3>
            <h4>Comments: </h4>
            <p v-for="(comment, index) in postData.comments" :key="comment + index">
                {{ userData[postData.comments[index].userId].name }}: {{ postData.comments[index].message }}
            </p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    props: ['postData', 'userData', 'index'],
    data: function () {
        return {
            postIndex: 0
        }
    }
}
</script>

<style>
#post {
    background-color: #1A1A1B;
    color: white;
}

a {
    color: inherit;
}
</style>
