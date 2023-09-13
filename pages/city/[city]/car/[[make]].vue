<script setup>
const route = useRoute();

const { data: cars } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

// this is a hack. try and find a better solution
watch(
  () => route.query,
  () => {
    window.location.reload();
  }
);
</script>

<template>
  <div>
    <CarCards v-if="cars.length" v-for="car in cars" :key="car.id" :car="car" />
    <h1 class="text-6xl text-red-500" v-else>No cars with filters</h1>
  </div>
</template>
