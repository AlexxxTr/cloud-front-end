<script setup lang="ts">
import HomeComponent from "@/components/HomeComponent.vue";
</script>

<template>
  <main>
    <h1 class="h1">Welcome to the home page</h1>
    <HomeComponent />
  </main>
</template>

<style scoped lang="css">
.h1 {
  @apply text-center mt-5 text-2xl;
}
</style>
