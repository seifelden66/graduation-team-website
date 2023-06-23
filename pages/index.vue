<template lang="pug">
.container-fluid
    
  .nav
      Navbar/
  .cont
      #hero
          Hero/
      .box
        #about
            About/
      .box
        #dashboard
            Dashboard/
      .box
        #demo
            Live/
      .box
        #faqs
            Faqs/
      .box
        #team
            Team/
      .box
        #contact
            Contact/
  Side/
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    gsap.from(box, {
      autoAlpha:0,
      stagger: 0.1,
      duration: 0.2,
      scrollTrigger: {
        start:'top 65%',
        end:'bottom 100%',
        trigger: box,
        scrub: true,
      },
    });
  });
    ScrollTrigger.refresh()
});
</script>

<style scoped lang="scss">

.container-fluid {
 
  .cont {
    #hero {
      padding-top: 85px;
      margin-top: 10px;
    }
    #about {
      padding-top: 105px;
      margin-top: 5px;
    }
    #dashboard {
      padding-top: 85px;
      margin-top: 10px;
    }
    #demo {
      padding-top: 85px;
      margin-top: 10px;
    }
    #faqs {
      padding-top: 135px;
      margin-top: 10px;
    }
    #team {
      padding-top: 100px;
      
    }
  }
}
</style>
