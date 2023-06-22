<template lang="pug">
.container-fluid 
    .container
        h1 
            span Meet the 
            span(style="color: #FBC75E;") team 
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
  margin-top: 30px;
  background-color: #fafafa;
  padding-top: 20px;
  margin-bottom: -10px !important;
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
        }
      }
    }
  }
}
@media (max-width: 998px) {
  .container-fluid {
    .container {
      .members {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr;
        place-content: center;
        .member {
          width: 170px;
          margin-left:5px ;

          .image{
            width: 130px;
          }
        }
      }
    }
  }
}
</style>
