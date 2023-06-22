<template lang=pug>
.container-fluid
    .nav
        Navbar/
    .cont
        #hero
            Hero/
        #about
            About/
        #dashboard
            Dashboard/
        #demo
            Live/
        #faqs
            Faqs/
        #team
            Team/
        #contact
            Contact/
        Side/
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container-fluid{
    
    .cont{
        
        #hero{
            padding-top: 75px;
            margin-top: 15px;
            
        }
        #about{
            padding-top: 85px;
            margin-top: 15px;
            
        }
        #dashboard{
            padding-top: 75px;
            margin-top: 15px;
            
        }
        #demo{
            padding-top: 75px;
            margin-top: 15px;
            
        }
        #faqs{
            padding-top: 115px;
            margin-top: 20px;
            
        }
        #team{
            padding-top: 75px;
            margin-top: 15px;
            
        }
    }
}
</style>