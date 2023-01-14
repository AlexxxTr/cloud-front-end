<script setup lang="ts">
import { supabase } from "./lib/supabase/createClient";
import { RouterLink, RouterView } from "vue-router";
let isLoggedIn = false;
loggedIn();

async function loggedIn() {
  const user = await supabase.auth.getUser();
  isLoggedIn = !!user.data;
}
loggedIn();
</script>

<template>
  <header>
    <div class="h-10">
      <nav
        class="flex flex-row justify-evenly items-center bg-green-600/50 h-full"
      >
        <RouterLink to="/" class="relative group" v-if="isLoggedIn"
          ><span>Login</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
        <RouterLink to="/home" class="relative group" v-if="!isLoggedIn">
          <span>Home</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
        <RouterLink
          to="/add-gas-usage"
          class="relative group"
          v-if="!isLoggedIn"
        >
          <span>Add Gas Usage</span>
          <span
            class="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"
          />
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
