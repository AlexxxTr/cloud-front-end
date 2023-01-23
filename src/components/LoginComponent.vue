<script lang="ts">
import { supabase } from "@/lib/supabase/createClient";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin(e: Event) {
      e.preventDefault();

      const { data } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });

      if (data.user) this.$router.push("home");
      else this.toast.error("Incorrect credentials!");
    },
  },
};
</script>

<template>
  <h1 class="h1">Please log in</h1>
  <p class="paragraph">This will unlock all your data and actions!</p>
  <form class="form" @submit="handleLogin">
    <label for="email">E-mail</label>
    <input
      type="email"
      name="email"
      id="email"
      v-model="email"
      class="input"
      autocomplete="email"
    />

    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
      class="input"
      autocomplete="current-password"
    />

    <button type="submit" class="btn">Log In</button>
    <RouterLink to="/register" class="btn-no-outline"
      >No account yet?</RouterLink
    >
  </form>
</template>

<style lang="css" scoped>
.h1 {
  @apply text-center mt-5 text-2xl;
}
.paragraph {
  @apply text-center text-gray-500 mb-3;
}
.form {
  @apply grid grid-cols-2 w-1/3 mx-auto gap-y-3 gap-x-2 items-center justify-center;
}
input.input {
  /* ^ Did this since the specificity was not precise enough and tailwind forms overrides this */
  @apply rounded-md border-green-300 leading-tight appearance-none;
}
.btn {
  @apply text-green-700 font-semibold py-2 px-4 border border-green-500 rounded-md;
}
.btn:hover {
  @apply bg-green-500 text-white border-transparent;
}
.btn-no-outline {
  @apply inline-block font-semibold py-2 px-4 rounded-md bg-green-400 text-white text-center h-full;
}
.btn-no-outline:hover {
  @apply bg-green-700;
}
</style>
