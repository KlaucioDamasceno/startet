<script lang="ts" setup>

const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name),
});

</script>


<template>
  <div>
    <p>p{{ route.params.name }}</p>
    <NuxtPage />
  </div>
</template>




<style></style>
