<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Ronddit" name="ronny" age="200" />
        <Gooby></Gooby>
        <Gooby></Gooby>
        <Gooby></Gooby>
        <Gooby></Gooby>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Gooby from '@/components/Gooby'

export default {
    name: 'Home',
    components: {
        HelloWorld,
        Gooby
    }
}
</script>
