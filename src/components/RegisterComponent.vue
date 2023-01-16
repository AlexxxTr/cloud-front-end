<script lang="ts">
import { supabase } from "@/lib/supabase/createClient";
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async handleRegister(e: Event) {
      e.preventDefault();

      const { data } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });

      if (data) window.location.href = "/home";
    },
  },
};
</script>

<template>
  <h1 class="h1">Please register an account</h1>
  <form @submit="handleRegister" class="form">
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" class="input" />

    <label for="password">Your password</label>
    <input
      type="password"
      id="password"
      name="password"
      v-model="password"
      class="input"
    />

    <button type="submit" class="btn col-span-2">Register</button>
  </form>
</template>

<style lang="css" scoped>
.h1 {
  @apply text-center mt-5 text-2xl mb-2;
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
</style>
