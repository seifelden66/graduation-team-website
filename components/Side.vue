<template lang="pug">
div
    aside
        transition(
            enter-to-class="animate__animated animate__slideInRight",
            leave-to-class="animate__animated animate__slideOutRight"
        )
            .side(v-show="side")
                .items
                    button(@click="close") x
                    nuxt-link.link(to="#hero", :class="{ active: isActive('#hero') }") Home
                    nuxt-link.link(to="#about", :class="{ active: isActive('#about') }") About Us
                    nuxt-link.link(to="#dashboard", :class="{ active: isActive('#dashboard') }") Dashboard
                    nuxt-link.link(to="#demo", :class="{ active: isActive('#demo') }") Live Demo
                    nuxt-link.link(to="#faqs", :class="{ active: isActive('#faqs') }") FAQs
                    nuxt-link.link(to="#team", :class="{ active: isActive('#team') }") Our Team
                    nuxt-link.link(to="#contact", :class="{ active: isActive('#contact') }") contact us
</template>

<script setup lang="ts">
 const router = useRouter();

const isActive = (route: string) => {
  return router.currentRoute.value.hash === route;
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutLeft{
    animation-duration: 600ms;
  }
.side {
  font-size: 26px;
  background: #161c28;
  color: #A6A6A6;
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
    margin-top: 30px;
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
    margin-top: 30px;
    transition: 300ms;
    &:hover{
        color: #FBC75E;
    }
    &.active {
        color: #fff;
      }
}
  }
  
}
</style>