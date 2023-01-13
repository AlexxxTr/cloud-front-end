<script lang="ts">
import { supabase } from "@/lib/supabase/createClient";
export default {
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
      if (data) window.location.href = "/home";
    },
  },
};
</script>

<template>
  <h1 class="text-center mt-5 text-2xl">
    Please Log in to use your everything :)
  </h1>
  <form class="grid grid-cols-2 w-1/4 mx-auto gap-y-3" @submit="handleLogin">
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />

    <button type="submit" class="col-span-2" v-if="email && password">
      Log In
    </button>
    <RouterLink to="/register" class="col-span-2 text-center"
      >No account yet?</RouterLink
    >
  </form>
</template>
