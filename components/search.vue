<script setup>
const dog = ref("");
const dogError = ref(false)
console.log(dog.value)
const handleSearch = () => {
  if(!dog.value){
    return dogError.value = true
  }
  navigateTo('/dogs/{dog.value}')
}



</script>


<template>
  <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
    <input type="text" class="py-4 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Buscar caramelo..."
      v-model="dog"
      :class="dogError ? 'border-red-500 border': ''"
      />
    <button id= "submit" type="submit" class="bg-sky-500 px-10 text-white" @click="handleSearch">buscar</button>
  </div>
</template>




<style></style>
