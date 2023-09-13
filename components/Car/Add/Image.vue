<script setup>
// STATE
const image = useState("carImage", () => {
  return { preview: null, image: null };
});

// EMITS
const emits = defineEmits(["uploadImage"]);

const handleUploadImage = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("uploadImage", input.files[0], "image");
  }
};
</script>

<template>
  <div class="col-md-5 offset-md-1 mt-2 w-full">
    <label class="text-cyan-500 mb-1 text-sm">Image</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            class="opacity-0 absolute cursor-pointer"
            accept="image/*"
            @change="handleUploadImage"
          />
          <span class="cursor-pointer">Browse File</span>
        </div>
        <div class="border p-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" alt="upload" class="img-fluid" />
        </div>
      </div>
    </form>
  </div>
</template>
