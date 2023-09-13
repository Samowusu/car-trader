<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const handleLogout = async () => {
  try {
    await signOut();
  } catch (error) {
    return console.log(error);
  }
};
</script>

<template>
  <div>
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
      <!-- <div class="flex">
        <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
        <p class="cursor-pointer" @click="handleLogout">Logout</p>
      </div>
      <NuxtLink to="/login">Login</NuxtLink> -->
    </header>
  </div>
</template>
