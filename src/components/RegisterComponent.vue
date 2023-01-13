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
  <form @submit="handleRegister">
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" />

    <label for="password">Your password</label>
    <input type="password" id="password" name="password" v-model="password" />

    <button type="submit" v-if="email && password">Register</button>
  </form>
</template>
