<script setup>
// PROPS
const props = defineProps({
  title: String,
  placeholder: String,
  name: String,
});
// STATE
const state = ref();
// EMITS
const emits = defineEmits(["changeInput"]);
</script>

<template>
  <div class="flex flex-col w-[100%] mt-2">
    <label class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="emits('changeInput', state, name)"
    />
  </div>
</template>
