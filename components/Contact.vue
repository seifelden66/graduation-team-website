<template lang="pug">
.container-fluid
    .container
        .first 
            .left 
                h1
                    span &bdquo;
                    br
                    span Contact us
                p We value ypur feedback and inquiuries. please contact us using the following form 
            .right 
                .form
                    h3 contact us
                    section
                        label(for="email") Email
                        input#email(type="email")
                    section
                        label(for="message") Message
                        textarea#message
                    .btn 
                            h6 send
        .second 
            h1(style="color: #FBC75E;") Smart Gate
            p(style="color: #A6A6A6; fontWeight: 300;") ANPR System for Univeristy
            h4 2023
            p 
                span faculty of Artificial intlligence and computer science 
                span(style="float:right;") Damietta university

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #161c28;
  color: white;
  padding: 40px;
  .container {
  
    .first {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
      .right {
        .form {
          float: right;
          background: #222938;
          display: flex;
          width: 500px;
          padding: 2em;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          section {
            width: 100%;
            display: flex;
            flex-direction: column;
            input {
              border-radius: 10px;
              height: 30px;
              border: none;
            }
            textarea {
              border-radius: 10px;
              border: none;
            }
          }
          .btn {
            background: #fbc75e;
            color: white;
            border: none;
            height: 40px;
            width: 100%;
            display: grid;
            place-content: center;
            padding: 5px;
            align-items: center;
            border-radius: 10px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 998px) {
  .container-fluid {
    .container {
      .first {
        display: grid;
        grid-template-columns: 1fr;
        .right{
            display: flex;
            justify-content: center;
            .form {
                width: 300px;
                
              }
        }
        
      }
    }
  }
}
</style>
