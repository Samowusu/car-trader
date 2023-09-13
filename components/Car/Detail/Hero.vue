<script setup>
defineProps({
  url: String,
  name: String,
  seats: Number,
  miles: String,
  price: String,
});
</script>

<template>
  <div class="mt-10">
    <NuxtImg :src="url" alt="car" class="w-full" />
    <h1 class="mt-10 text-4xl">{{ name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <div class="p mr-2">{{ seats }} seats</div>
        <div class="p mr-2">|</div>
        <div class="p mr-2">{{ miles }} miles</div>
      </div>
      <div class="font-bold text-2xl">${{ price }}</div>
    </div>
  </div>
</template>
