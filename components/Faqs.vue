<template lang="pug">
.container 
    .containeer 
        .left 
            h2 FAQs
            h5 Your quesions, answerd
        .right 
            .div(@click="toggleDropdown1" style="fontWeight: bold;") how the system will help the university 
                span(style="fontWeight: bold; float: right") &#8744;
                div(v-if="isDropdownOpen1" style="fontWeight: 400;")
                    p it will increase security
            .div(@click="toggleDropdown2" style="fontWeight: bold;") how the system works 
                span(style="fontWeight: bold; float: right") &#8744;
                div(v-if="isDropdownOpen2" style="fontWeight: 400;")
                    p Lorem ipsum dolor sit amet consectetur adipisicing.
            .div(@click="toggleDropdown3" style="fontWeight: bold;") what happens when invalid car try to enter 
                span(style="fontWeight: bold; float: right") &#8744;
                div(v-if="isDropdownOpen3" style="fontWeight: 400;")
                    p Lorem ipsum dolor sit amet.
            .div(@click="toggleDropdown4" style="fontWeight: bold;") why raspberry pi
                span(style="fontWeight: bold; float: right") &#8744;
                div(v-if="isDropdownOpen4" style="fontWeight: 400;")
                    Lorem ipsum dolor sit amet consectetur.
</template>

<script setup lang="ts">
const isDropdownOpen1 = ref(false);
const isDropdownOpen2 = ref(false);
const isDropdownOpen3 = ref(false);
const isDropdownOpen4 = ref(false);

// Function to toggle the first dropdown
const toggleDropdown1 = () => {
  isDropdownOpen1.value = !isDropdownOpen1.value;
};

// Function to toggle the second dropdown
const toggleDropdown2 = () => {
  isDropdownOpen2.value = !isDropdownOpen2.value;
};
const toggleDropdown3 = () => {
  isDropdownOpen3.value = !isDropdownOpen3.value;
};
const toggleDropdown4 = () => {
  isDropdownOpen4.value = !isDropdownOpen4.value;
};
</script>

<style lang="scss" scoped>
.container{
    
    h2{
        margin-top: 40px;
        color: #FBC75E;
    }
    .containeer{
        display: flex;
        justify-content: space-between;
        
        .left{
            
            transform: scaleX(1.2);
        }
        .right{
            
            .div{
                padding: 8px;
                margin-top: 5px;
                cursor: pointer;
                border-bottom: solid 1px black;
                width: 550px;
            }
        }
    }
}
@media (max-width:768px){
    .container{
        .containeer{
            display: grid;
            grid-template-columns: 1fr;
            .left{
                transform: scaleX(1);
                margin: 20px auto;
            }
            .right{
            margin: 20px auto;
                .div{
                    padding: 8px;
                    margin-top: 5px;
                    cursor: pointer;
                    border-bottom: solid 1px black;
                    width: 250px;
                }
            }
          }
    }
  }
</style>