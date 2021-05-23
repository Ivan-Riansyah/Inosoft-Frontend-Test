<template>
    <div class="app">
        <h1>welcome</h1>
        <h1 v-for="(item, index) in posts" :key="index">{{ item.title }}</h1>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default ({
    name: 'app',
    mounted(){
        //console.log(this.$store);
        this.$store.dispatch('posts/loadPosts');
    },
    computed: {
        ...mapState('posts', ['posts'])
    }

})
</script>
