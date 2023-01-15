<script lang="ts">
import GasUsageGraphComponent from "./GasUsageGraphComponent.vue";
export default { components: { GasUsageGraphComponent } };
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 w-full h-[75vh]">
    <GasUsageGraphComponent />
  </div>
</template>
