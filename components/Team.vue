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
import data from '../team.json'
</script>

<style lang="scss" scoped>
.container-fluid{
    margin-top: 30px;
    background-color: #fafafa;
    padding-top: 20px;
    margin-bottom: -10px !important;
    .container{
        margin-top: 30px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        .members{
            margin-bottom: 30px;
            display: grid;
            grid-template-columns: repeat(5, 1fr) ;
            gap: 30px;
            .member{
                .image{
                    margin-top: 30px;
                    width: 150px;
                }
                .names{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
}
@media (max-width:768px){
    .container-fluid{
        .container{
            .members{
                display: grid;
                grid-template-columns:  1fr 1fr ;
            }
        }
    }
  }
</style>