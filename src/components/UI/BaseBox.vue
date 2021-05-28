<template>
<div class="container- container-sm container-md my-box">
    <slot></slot>
</div>
</template>

<style lang="scss">
.my-box {
    padding: 26px 31px 0 ;
    border-radius: 35px ;
    background: #fff ;
    margin: 104px auto 0 !important ;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%) !important;
    border: 2px solid transparent !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
            position: relative;
        top: 10px !important;
}
</style>
