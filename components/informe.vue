<script lang="ts" setup>
defineProps<{
  title?: string
  name?: string
}>();


// const modal = ref({
//   make: false,
//   location: false,
//   price: false
// });

// const updateModal = (key) => {
//   modal.value[key] = !modal.value[key]
// }

</script>




<template>
  <div class="p-5 flex justify-between relative cursor-pointer border-b">
    <h3>{{ title }}</h3>
    <h3 class="text-blue-400 capitalize">{{ name }}</h3>
  </div>
</template>




