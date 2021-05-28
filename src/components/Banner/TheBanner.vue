<template>
<main>
    <the-card></the-card>
    <section id="primary" class="banner" v-scrollanimation>
        <h1 class="banner-title">Pourya bahramipour</h1>
        <p class="banner-text">My Personal Blog</p>
        <a href="#footer">Send Comment</a>
    </section>
</main>
</template>

<script>
import TheCard from './TheCrad.vue';
export default {
    components: {
        TheCard
    }
}
</script>

<style scoped>
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>
