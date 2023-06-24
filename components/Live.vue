<template lang="pug">
.container
    h1 
        span watch the 
        span(style="color: #FBC75E;") live 
        span demo 
    iframe.frame(src="/assets/sg-website/")

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container{
    padding-top: 1em;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .frame{
        width: 80%;
        margin-top: 20px ;
        height: 400px;
    }
}
@media (max-width:998px) {
    .container{
        h1{
            text-align: center;
        }
        .frame{
            width: 80%;
        }
    }
}
</style>