<script setup>
const error = useError();
const handleNavigateToHomePage = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <button
      class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
      @click="handleNavigateToHomePage"
    >
      Go Back
    </button>
  </div>
</template>

// { // "name": "nuxt-app", // "private": true, // "scripts": { // "build":
"nuxt build", // "dev": "nuxt dev", // "generate": "nuxt generate", //
"preview": "nuxt preview", // "postinstall": "nuxt prepare" // }, //
"devDependencies": { // "@nuxt/devtools": "latest", // "@nuxt/image":
"^1.0.0-rc.1", // "@nuxt/types": "^2.17.1", // "@nuxt/typescript-build":
"^3.0.1", // "@nuxtjs/supabase": "^1.0.2", // "@nuxtjs/tailwindcss": "^6.8.0",
// "@types/node": "^18.17.3", // "@vueuse/core": "^10.3.0", // "@vueuse/nuxt":
"^10.3.0", // "autoprefixer": "^10.4.15", // "nuxt": "^3.6.5", // "postcss":
"^8.4.28", // "tailwindcss": "^3.3.3", // "typescript": "^4.9.5" // }, //
"dependencies": { // "@prisma/client": "^5.2.0", // "prisma": "^5.2.0", //
"zod": "^3.22.2" // } // }
