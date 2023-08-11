<template>
  <div>
    <h1>My name is...</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const {toTitleCase} = useUtilities();
definePageMeta({
    layout: "custom"  
})


</script>



<style>

</style>
