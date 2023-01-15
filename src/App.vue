<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "./lib/supabase/createClient";
import { RouterLink, RouterView } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const isLoggedIn = ref(false);

supabase.auth.onAuthStateChange((_, session) => {
  isLoggedIn.value = !!session;
});

async function logOut() {
  await supabase.auth.signOut();
  window.location.href = "/";
}
</script>

<template>
  <header>
    <div class="h-10">
      <nav
        class="flex flex-row justify-evenly items-center bg-green-600/50 h-full"
      >
        <RouterLink to="/" class="relative group" v-if="!isLoggedIn"
          ><span>Login</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
        <RouterLink to="/home" class="relative group" v-if="isLoggedIn">
          <span>Home</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
        <RouterLink
          to="/add-gas-usage"
          class="relative group"
          v-if="isLoggedIn"
        >
          <span>Add Gas Usage</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
        <button v-if="isLoggedIn" @click="logOut">Log Out</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
