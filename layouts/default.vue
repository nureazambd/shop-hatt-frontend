<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  /* background: linear-gradient(90deg, #6200ee 0%, #03dac5 100%);  */
  background: linear-gradient(-80deg, #94D562 24%, #16B985 78%);
}
.bluegray {
  background: #F9FBFC;
}
.polborder::after {
border-style: none !important;
border:0;
border-color: transparent !important;}

.polborder::before {
border-style: none !important;
border:0;
border-color: transparent !important;
}
input[type="radio"] + label span {
    transition: background .2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.1);
} 

input[type="radio"]:checked + label span {
  background-color: #26c941;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
   /* color: red;  */

   font-size: 16px;}

.p-table td {
border-right:1px solid rgb(235, 233, 233);
padding-left: 30px;}
</style>
