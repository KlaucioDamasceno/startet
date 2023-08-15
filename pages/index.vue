<script setup>

const {cars} = useCars();

const modal = ref({
  make: false,
  location: false,
  price: false
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}

</script>



<template>
  <div>
    <!-- <Header /> -->

    <!-- Dog's -->
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div class="mt-32 flex">
        <!-- Dog -->
        <div class="shadow border w-64 mr-10 z-30 h-[190px]">
          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Raça</h3>
            <h3 @click="updateModal('location')" class="text-blue-400 capitalize">African</h3>
            <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
            <input type="text" class="border p-1 rounded"/>
            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">Buscar</button>
          </div>
          </div>
          <Informe title="Raça" name="Labrador" />
          <Informe title="Raça" name="Pug" />
          <!-- <Informe title="Raça" name="Pastor" /> -->
    
        </div>
        <div class="w-full">
          <Card v-for="car in cars" :key="car.id" :car="car"/>
        </div>
      </div>
    </div>
  </div>
</template>

