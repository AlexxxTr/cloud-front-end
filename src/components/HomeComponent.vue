<script lang="ts">
import { supabase } from "@/lib/supabase/createClient";
import { ref } from "vue";
import GasUsageGraphComponent from "./GasUsageGraphComponent.vue";
import type { GasUsage } from "@/lib/types/propTypes";

export default {
  setup() {
    const gasUsage = ref<Array<GasUsage>>();
    supabase
      .from("gas_usages")
      .select("*")
      .then(({ data }) => (data ? (gasUsage.value = data) : null));
    return { gasUsage };
  },
  components: { GasUsageGraphComponent },
};
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-2 w-full h-[75vh]">
    <GasUsageGraphComponent v-if="gasUsage" :gas-usage="gasUsage" />
  </div>
</template>
