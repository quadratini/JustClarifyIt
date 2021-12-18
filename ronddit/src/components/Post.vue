<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: 'Post',
    props: {
        title: String,
        name: String,
        age: Number
    }
}
</script>
