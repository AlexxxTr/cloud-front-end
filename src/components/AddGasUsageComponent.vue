<script lang="ts">
import { convertCubicToKWH } from "@/lib/helpers/convertCubicToKwH";
import { supabase } from "@/lib/supabase/createClient";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      lastReading: 0,
      currentReading: 0,
    };
  },
  async mounted() {
    const { data: gas_reading } = await supabase
      .from("gas_readings")
      .select("cubic_meters")
      .order("created_at", { ascending: false });

    this.lastReading = this.currentReading =
      gas_reading && gas_reading.length > 0 ? gas_reading[0].cubic_meters : 0;
  },
  methods: {
    async handleInsertReading(e: Event) {
      e.preventDefault();
      if (this.currentReading <= this.lastReading)
        return this.toast.warning(
          "The new reading should be above the last reading"
        );

      const kWh = convertCubicToKWH(this.currentReading - this.lastReading);
      const [{ error: gasReadingError }, { error: gasUsageError }] =
        await Promise.all([
          supabase
            .from("gas_readings")
            .insert({ cubic_meters: this.currentReading }, { count: "exact" }),
          supabase.from("gas_usages").insert({ kWh, cost: kWh * 14 }), // Here 14 is an average I currently found online
        ]);
      // TODO: Updated this to RPC in supabase so that the row does not get inserted when one or the other does not work

      if (gasReadingError || gasUsageError)
        return this.toast.error("There was an error adding your readings");

      this.toast.success("Successfully added your readings!");

      window.location.href = "/home";
    },
  },
};
</script>

<template>
  <form
    class="grid grid-cols-2 w-1/3 mx-auto gap-y-2 items-center justify-center"
    @submit="handleInsertReading"
  >
    <label for="lastReading">Last Reading entered</label>
    <input
      type="number"
      id="lastReading"
      name="lastReading"
      v-model="lastReading"
      disabled
      class="input"
    />

    <label for="currentReading">New Reading</label>
    <input
      type="number"
      name="currentReading"
      id="currentReading"
      v-model="currentReading"
      :min="lastReading"
      class="input"
    />

    <button type="submit" class="col-span-2 btn g-transparent">
      Add Reading
    </button>
  </form>
</template>

<style>
.btn {
  @apply text-green-700 font-semibold py-2 px-4 border border-green-500 rounded-md;
}
.btn:hover {
  @apply bg-green-500 text-white border-transparent;
}
.input {
  @apply rounded-md border-green-300 leading-tight appearance-none;
}
.input:focus {
  @apply outline-none border-green-400;
}
</style>
