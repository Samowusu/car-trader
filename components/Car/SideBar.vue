<script setup>
// STATE
const modal = ref({ make: false, location: false, price: false });
const city = ref("");
const priceRange = ref({ min: "", max: "" });

// ROUTE
const route = useRoute();
const router = useRouter();

// DATA
const { makes } = useCars();

// COMPUTATIONS
const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) return `< $${maxPrice}`;
  else if (minPrice && !maxPrice) return `> $${minPrice}`;
  else return `$${minPrice}-$${maxPrice}`;
});

// HANDLERS
const handleShowModal = (key) => (modal.value[key] = !modal.value[key]);

const handleChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  handleShowModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const handleChangeMake = (make) => {
  handleShowModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const handleChangePrice = () => {
  if (priceRange.value.min < 0 || priceRange.value.max < 0) {
    throw createError({ statusCode: 404, message: "Price can't be negative" });
  }

  if (priceRange.value.min && priceRange.value.max) {
    if (priceRange.value.min > priceRange.value.max) {
      throw createError({
        statusCode: 404,
        message: "Minimum price cannot be greater than maximum price",
      });
    }
  }

  handleShowModal("price");
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>

<template>
  <div>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <!-- LOCATION  -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Location</h3>
        <h3
          @click="handleShowModal('location')"
          class="text-blue-400 capitalize"
        >
          {{ route.params.city }}
        </h3>
        <!-- location modal -->
        <div
          v-show="modal.location"
          class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white z-30"
        >
          <input type="text" class="border p-1 rounded" v-model="city" />
          <button
            @click="handleChangeLocation"
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          >
            Apply
          </button>
        </div>

        <!-- location modal -->
      </div>

      <!-- LOCATION -->

      <!-- MAKE -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 @click="handleShowModal('make')" class="text-blue-400 capitalize">
          {{ route.params.make || "Any" }}
        </h3>

        <!-- make modal -->
        <div
          class="absolute border shadow left-72 p-5 top-1 -m-2 w-[600px] flex justify-between flex-wrap bg-white z-30"
          v-show="modal.make"
        >
          <h4
            v-for="make in makes"
            :key="make"
            class="w-1/3"
            @click="handleChangeMake(make)"
          >
            {{ make }}
          </h4>
        </div>
        <!-- make modal -->
      </div>
      <!-- MAKE -->

      <!-- PRICE -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 @click="handleShowModal('price')" class="text-blue-400 capitalize">
          {{ priceRangeText }}
        </h3>
        <div
          class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white z-30"
          v-show="modal.price"
        >
          <input
            type="number"
            placeholder="Max"
            class="border p-1 rounded"
            v-model="priceRange.max"
          />
          <input
            type="number"
            placeholder="Min"
            class="border p-1 rounded"
            v-model="priceRange.min"
          />
          <button
            @click="handleChangePrice"
            class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          >
            Apply
          </button>
        </div>
      </div>
      <!-- PRICE -->
    </div>
  </div>
</template>
