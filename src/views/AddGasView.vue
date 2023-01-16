<script setup lang="ts">
import AddGasUsageComponent from "@/components/AddGasUsageComponent.vue";
import { supabase } from "@/lib/supabase/createClient";
import { ref } from "vue";

const isLoggedIn = ref(false);
(async function () {
  isLoggedIn.value = (await supabase.auth.getSession()).data.session !== null;
})();
</script>

<template>
  <template v-if="!isLoggedIn">
    <NoLoginComponent />
  </template>
  <template v-if="isLoggedIn">
    <main>
      <h1 class="text-center font-bold text-2xl my-4">
        Add your current gas reading in cubic metres!
      </h1>
      <AddGasUsageComponent />
    </main>
  </template>
</template>
