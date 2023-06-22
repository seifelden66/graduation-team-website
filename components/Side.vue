<template lang="pug">
div
    aside
        .side(v-if="side")
            .items
                button(@click="close") x
                nuxt-link.link(to="#hero") Home
                nuxt-link.link(to="#about") About Us
                nuxt-link.link(to="#dashboard") Dashboard
                nuxt-link.link(to="#demo") Live Demo
                nuxt-link.link(to="#faqs") FAQs
                nuxt-link.link(to="#team") Our Team
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.side {
  font-size: 26px;
  background: #161c28;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 270px;
  z-index: 999;
  padding: 1em;
  float: right;
  .items{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    button{
        width: 40px;
        height: 40px;
        display: flex;align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50%;
        background: #FBC75E;
        color: #161c28;
        float: right;

    }
.link{
    margin-top: 40px;
    &:hover{
        color: #FBC75E;
    }
}
  }
  
}
</style>