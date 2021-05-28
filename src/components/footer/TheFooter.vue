<template>
<footer class="section" id="footer">
    <div class="footer-section">
        <div v-for="index in 3" :key="index">
            <h4>Lorem, ipsum.</h4>
            <nav>
                <ul>
                    <li v-for="index in 5" :key="index"><a href="#">Lorem</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <copy-right></copy-right>
</footer>
</template>
<script>
import CopyRight from './CopyRight.vue'
export default {
    components: { CopyRight }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.survey {
    direction: rtl;
}

form {
    margin: 0 0;
    max-width: 20rem;
    border-radius: 12px;
    padding: 2rem;
    background-color: transparent;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
}

h2 {
    font-size: 1rem;
    margin: 0.5rem 0;
}

textarea {
    background: color(primary-light);

}

input,
select {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
    background: color(primary-light);
    border: none;
    border-radius: 6px;
    height: 30px;
}

select {
    width: auto;
}

input[type='checkbox'],
input[type='radio'],
textarea {
    display: inline-block;
    width: auto;
    margin-right: 1rem;
}

input[type='checkbox']+label,
input[type='radio']+label {
    font-weight: normal;
}

button {
    font: inherit;
    border: 1px solid #0076bb;
    background: color(primary-light);
    color: #000;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 30px;
}

button:hover,
button:active {
    border-color: #002350;
    background-color: #002350;
}
</style>
