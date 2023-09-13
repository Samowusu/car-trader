<script setup>
definePageMeta({
  layout: "custom",
});
// STATE
const userState = useState("user", () => {
  return { email: "", password: "" };
});
const isLogin = useState("form", () => true);
const supabase = useSupabaseClient();

// HANDLERS
const handleChangeInput = (data, name) => {
  userState.value[name] = data;
};

// const handleLogin = async (event) => {
//   console.log("signin");
//   //   event.preventDefault();
//   //   console.log("signing in...");
//   //   const { data, error } = await supabase.auth.signInWithPassword({
//   //     email: userState.value.email,
//   //     password: userState.value.password,
//   //   });

//   //   console.log("signed in");
//   //   if (data) {
//   //     navigateTo("/");
//   //   } else {
//   //     console.log(error);
//   //   }
// };

// const handleSignUp = async (event) => {
//   console.log("sign up");
//   //   event.preventDefault();
//   //   const { data, error } = await supabase.auth.signUp({
//   //     email: userState.value.email,
//   //     password: userState.value.password,
//   //   });

//   //   console.log({ data });
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     isLogin.value = true;
//   //   }
// };

const handleToggleIsLogin = () => {
  isLogin.value = !isLogin.value;
};

const handleLoginWithOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  console.log("data", data);
  if (error) console.log(error);
};
</script>

<template>
  <div class="mt-10 flex justify-center">
    <div class="w-1/2">
      <h1 class="text-5xl font-bold mb-7">
        {{ isLogin ? "Log in" : "Sign up" }}
      </h1>
      <form
        class="rounded gap-y-4 mt-5 flex flex-col flex-wrap justify-between"
        @submit="handleLoginWithOAuth"
      >
        <CarAddInput
          title="email"
          placeholder="Enter Email..."
          name="email"
          @change-input="handleChangeInput"
          width="w-full"
        />
        <CarAddInput
          title="Password"
          placeholder="Enter Password..."
          name="password"
          @change-input="handleChangeInput"
          width="w-full"
        />
        <button
          type="submit"
          class="bg-blue-400 p-3 w-full rounded text-white font-bold"
        >
          {{ isLogin ? "Sign In" : "Sign Up" }}
        </button>
      </form>
      <button
        class="bg-red-400 w-full p-3 mt-5 rounded text-white font-bold"
        @click="handleUserSignIn"
      >
        Login with Github
      </button>
      <h3
        class="text-blue-400 underline mt-5 cursor-pointer"
        @click="handleToggleIsLogin"
      >
        {{
          !isLogin
            ? "Already have an account? Click here to login"
            : "Don't have an account yet? Click to Sign Up"
        }}
      </h3>
    </div>
  </div>
</template>
