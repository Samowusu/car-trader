<script setup>
// PROPS
const props = defineProps({
  title: String,
  options: Array,
  name: String,
});
// STATE
const state = ref(props.options[0]);
// EMITS
const emits = defineEmits(["changeSelect"]);
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select
      class="p-2 border w-100 rounded"
      @change="emits('changeSelect', state, name)"
      v-model="state"
    >
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
