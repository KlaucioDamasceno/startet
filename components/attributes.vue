<template>
  <div class="flex tx-lg mt-2">
    <p class="rounded text-lime-800 mr-3">✔</p>
    <p>{{atributo}}</p>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  atributo?:string,
}>()

</script>



