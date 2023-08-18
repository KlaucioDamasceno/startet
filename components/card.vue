<script setup lang="ts">
const props = defineProps({
  car: Object
});



</script>

<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]" @click="navigateTo(`/car/${car.name}-${car.id}`)">
    <div class="flex h-full">
      <img
        :src= "car.url"
        alt="african" class="w-[250px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{car.name}}</h1>
          <p class="text-gray-700">{{car.description}}</p>
        </div>
        <h1 class="mt-auto text-xl">R$ {{car.price}}</h1>
      </div>

    </div>
  </div>
</template>



