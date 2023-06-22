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
    
    display: flex;
    flex-direction: column;
    align-items: center;
    .frame{
        width: 97%;
        
        height: 350px;
    }
}
@media (max-width:998px) {
    .container{
        .frame{
            width: 80%;
        }
    }
}
</style>