<template lang="pug">
.container 
    .containeer 
        .left 
            h2 FAQs
            p Your quesions, answerd
        .right 
            .div(@click="toggleDropdown1") how the system will help the university 
                span(style="fontWeight: bold; float: right") &#8744;
                ul(v-if="isDropdownOpen1")
                    li 1
                    li 2
                    li 3
            .div(@click="toggleDropdown2") how the system works 
                span(style="fontWeight: bold; float: right") &#8744;
                ul(v-if="isDropdownOpen2")
                    li 4
                    li 5
                    li 6
            .div(@click="toggleDropdown3") what happens when invalid car try to enter 
                span(style="fontWeight: bold; float: right") &#8744;
                ul(v-if="isDropdownOpen3")
                    li 6
                    li 8
                    li 9
            .div(@click="toggleDropdown2") why raspberry pi
                span(style="fontWeight: bold; float: right") &#8744;
                ul(v-if="isDropdownOpen2")
                    li 10
                    li 11
                    li 12
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
    margin-top: 30px;
    h2{
        margin-top: 30px;
        color: #FBC75E;
    }
    .containeer{
        display: flex;
        justify-content: space-around;
        .right{
            .div{
                padding: 8px;
                margin-top: 5px;
                cursor: pointer;
                border-bottom: solid 1px black;
                width: 350px;
            }
        }
    }
}
@media (max-width:768px){
    .container{
        .containeer{
            display: grid;
            grid-template-columns: 1fr;
            
          }
    }
  }
</style>