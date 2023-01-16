<script lang="ts">
import { supabase } from "@/lib/supabase/createClient";
import { ref } from "vue";
import GasUsageGraphComponent from "./GasUsageGraphComponent.vue";
import GasReadingGraphComponent from "./GasReadingGraphComponent.vue";
import TemperatureGraphComponent from "./TemperatureGraphComponent.vue";
import type { GasReading, GasUsage, Temperatures } from "@/lib/types/propTypes";

export default {
  setup() {
    const gasUsage = ref<Array<GasUsage>>();
    supabase
      .from("gas_usages")
      .select("*")
      .then(({ data }) => (data ? (gasUsage.value = data) : null));

    const gasReading = ref<Array<GasReading>>();
    supabase
      .from("gas_readings")
      .select("*")
      .then(({ data }) => (data ? (gasReading.value = data) : null));

    const temperatures = ref<Array<Temperatures>>();
    supabase
      .from("temperatures")
      .select("*")
      .then(({ data }) => (data ? (temperatures.value = data) : null));

    return { gasUsage, gasReading, temperatures };
  },
  components: {
    GasUsageGraphComponent,
    GasReadingGraphComponent,
    TemperatureGraphComponent,
  },
};
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 w-full h-[75vh]">
    <GasUsageGraphComponent v-if="gasUsage" :gas-usage="gasUsage" />
    <GasReadingGraphComponent v-if="gasReading" :gas-readings="gasReading" />
    <TemperatureGraphComponent
      v-if="temperatures"
      :temperatures="temperatures"
    />
  </div>
</template>
