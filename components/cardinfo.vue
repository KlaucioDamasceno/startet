<script lang="ts" setup>

const props = defineProps({
  car: Object
});




</script>

<template>
  <div>
    <div>
      <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
        <div class="mt-10">
          <img
            :src="car.url"
            alt="" class="w-full">
          <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
          <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
            <div class="flex">
              <p class="mr-2">{{ car.seats }}</p>
              <p class="mr-2">100</p>
              <p class="mr-2">{{ car.miles }}</p>
            </div>
            <div>
              <p class="font-bold text-2xl">R$ {{ car.price }}</p>
            </div>
          </div>
        </div>
        <div class="mr-10 mt-5 border-b pb-5">
          <Attributes atributo="Sedan" />
          <Attributes atributo="4 Portas" />
          <Attributes atributo="Air-Bag" />
        </div>
        <div class="mt-5">
          <p class="mb-10">
            O nosso Robot, de nome KeruKejuTM, é um veículo móvel dotado de capacidade sensorial e computacional que lhe permite deslocar-se.
          </p>
        </div>
        <div class="mt-10">
          <div class="flex w-[600px] justify-between">
            <input type="text" class="border p-1" placeholder="Nome">
            <input type="email" class="border p-1" placeholder="E-mail">
            <input type="text" class="border p-1" placeholder="WhatsApp">
          </div>
          <div class="flex mt-4 w-[600px]">
            <textarea class="border p-1 w-full" placeholder="Mensagem"></textarea>
          </div>
          <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">Enviar</button>
        </div>
      </div>
    </div>

  </div>
</template>

