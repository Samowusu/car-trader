<script setup>
import heartFilled from "@/assets/images/heartFilled.png";
import heartOutline from "@/assets/images/heartOutline.png";

// PROPS
const props = defineProps({
  id: Number,
  name: String,
  price: String,
  url: String,
  seats: Number,
  miles: String,
  description: String,
  features: Array,
  liked: Boolean,
});

// EMITS
const emits = defineEmits(["like"]);

// STATE
// const favorited = useLocalStorage(`favorite-${props.id}`, false);

// HANDLERS
const handleClickCard = () => {
  navigateTo(`/car/${props.name}-${props.id}`);
};

// const handleLikeCar = () => (favorited.value = !favorited.value);
</script>

<template>
  <div>
    <div
      class="shadow relative border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    >
      <img
        :src="liked ? heartFilled : heartOutline"
        alt="like"
        class="absolute w-7 right-5 top-2 z-20"
        @click="emits('like', id)"
      />
      <div class="flex h-full" @click="handleClickCard">
        <NuxtImg :src="url" alt="car" class="w-[300px] h-full" />
        <div class="p-4 flex flex-col">
          <div>
            <h1 class="text-2xl text-blue-700">{{ name }}</h1>
            <p class="text-gray-700">{{ description }}</p>
          </div>
          <h1 class="mt-auto">${{ price }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
