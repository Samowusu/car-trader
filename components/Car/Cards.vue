<script setup>
defineProps({
  car: Object,
});

const likes = useLocalStorage("likes", {});

const handleLikeCar = (id) => {
  if (id in likes.value) {
    delete likes.value[id];
  } else {
    likes.value = {
      ...likes.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <CarCard
      :url="car.url"
      :name="car.name"
      :description="car.description"
      :price="car.price"
      :id="car.id"
      @like="handleLikeCar"
      :liked="car.id in likes"
    />
  </div>
</template>
