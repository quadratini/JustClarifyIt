<template>
  <div class="about">
    <h1>This is an about page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorem dolores ea placeat repudiandae? Accusamus aliquam aspernatur, at consequatur delectus dolore dolores eaque est et, fugiat fugit illo iste itaque modi nemo odio omnis quae qui quia quibusdam quisquam, reprehenderit sapiente sed sint vel. Autem beatae blanditiis consequatur culpa cumque dicta dolore dolores ea eius ex excepturi exercitationem facere illo iste labore libero mollitia nam nihil officia, perferendis placeat quis, quo quos ratione recusandae repellendus sapiente sequi ullam voluptates voluptatum? Delectus enim modi tempore tenetur. Adipisci aut consequuntur cum distinctio doloribus ducimus eveniet id illum maxime quam rem sit, veritatis!</p>
      <p v-if="user">{{ user.name }}</p>
      <button @click="user.name = 'ha'">a</button>
  </div>

</template>

<script>
import { usersData } from '@/store/store'

export default {
    name: 'About',
    components: {
    },
    created: function() {
        this.createPostData();
    },
    data: function() {
        return {
            user: usersData.length > 0 ? usersData[0] : null
        }
    },
    methods: {
        createPostData() {
            //console.log("a");
        }
    }
}
</script>
