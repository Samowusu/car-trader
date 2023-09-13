<script setup>
definePageMeta({
  layout: "custom",
});
// PROPS

// STATE
const info = useState("addInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    description: "",
    features: "",
    image: null,
  };
});
// DATA & UTILITIES
const { makes } = useCars();
const { inputs } = useUtilities();

// HANDLERS
const handleChangeInput = (data, name) => {
  info.value[name] = data;
};
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    {{ info.description }}
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAddSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-select="handleChangeInput"
      />
      <CarAddInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="handleChangeInput"
      />
      <CarAddTextarea
        title="Description *"
        name="description"
        @change-input="handleChangeInput"
      />
      <CarAddImage @upload-image="handleChangeInput" />
    </div>
  </div>
</template>
