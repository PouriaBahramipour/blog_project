<template>
<section id="card" v-scrollanimation>
    <ul class="banner-card">
        <li>
            <span></span>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
        </li>
        <li>
            <span></span>
            <strong>Lorem ipsum dolor sit amet consectetur.</strong>
        </li>
        <li>
            <span></span>
            <strong>Lorem ipsum dolor sit.</strong>
        </li>
    </ul>
</section>
</template>

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
