<script setup lang="ts"></script>

<template>
  <main class="flex flex-col">
    <h1 class="h1">You are not logged in.</h1>
    <p class="paragraph">
      When you are not logged in, you are not able to see any actions and data.
    </p>
    <p class="paragraph">To fix this, please consider logging in.</p>
    <RouterLink to="/" class="btn w-1/10 mx-auto">To Log In Page</RouterLink>
  </main>
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
  @apply inline-block text-green-700 font-semibold py-2 px-4 border border-green-500 rounded-md;
}
.btn:hover {
  @apply bg-green-500 text-white border-transparent;
}
</style>
