<template>
<div id="app">

    <div id="bg">
        <the-header></the-header>
    </div>

    <the-banner></the-banner>

    <main-section></main-section>

    <the-comments></the-comments>

    <!-- <selected-content></selected-content> -->

    <!-- <survey></survey> -->

    <the-footer></the-footer>

</div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import TheBanner from './components/Banner/TheBanner.vue';
// import SelectedContent from './components/content/SelectedContent.vue';
import MainSection from './components/main/Mainsection.vue';
import TheComments from './components/comments/TheComments.vue';
import TheFooter from './components/footer/TheFooter.vue';
// import Survey from './components/survey/Survey.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheBanner,
        MainSection,
        TheComments,
        TheFooter,
        
    }
}
</script>

<style lang="scss">

</style>
