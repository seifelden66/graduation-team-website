<template lang="pug">
.container-fluid 
    .container
        h1 
            span Meet the 
            span(style="color: #FBC75E;") team 
        p and their rules
        .members
            .member(v-for="i in data")
                .image
                    img(:src="i.avatar")
                .names 
                    h4 {{ i.fName }}
                    p {{ i.lName }}
                    

        
        
</template>

<script setup lang="ts">
import data from "../team.json";
</script>

<style lang="scss" scoped>
.container-fluid {
  
  margin-top: 40px;
  background-color: #fafafa;
  

  .container {
    margin-top: 30px;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    .members {
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 50px;
      .member {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .image {
          margin-top: 30px;
          
        }
        .names {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
      }
    }
  }
}
@media (max-width: 998px) {
  .container-fluid {
    padding-top: 2.3em;
    margin-top: 3.5em;
    .container {
      .members {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr;
        place-content: center;
        .member {
          width: 150px;
          

          .image{
            width: 130px;
          }
          .names{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
