<script setup>
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

const car = await useFetchCar(route.params.id);

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID ${route.params.id} does not exist`,
  });
}
useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <CarDetailHero
      :url="car.url"
      :name="car.name"
      :seats="car.seats"
      :miles="car.miles"
      :price="car.price"
    />

    <CarDetailAttributes :features="car.features" />

    <CarDetailDescription />

    <CarDetailContact :description="car.description" />
  </div>
</template>
