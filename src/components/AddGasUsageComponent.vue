<script lang="ts">
import { convertCubicToKWH } from "@/lib/helpers/convertCubicToKwH.js";
import { supabase } from "@/lib/supabase/createClient";
export default {
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

    this.lastReading =
      gas_reading && gas_reading.length > 0 ? gas_reading[0].cubic_meters : 0;
  },
  methods: {
    async handleInsertReading(e: Event) {
      e.preventDefault();
      if (this.currentReading <= this.lastReading)
        return console.log("nothing happened");

      const kWh = convertCubicToKWH(this.currentReading - this.lastReading);
      const [{ error: gasReadingError }, { error: gasUsageError }] =
        await Promise.all([
          supabase
            .from("gas_readings")
            .insert({ cubic_meters: this.currentReading }, { count: "exact" }),
          supabase.from("gas_usages").insert({ kWh, cost: kWh * 14 }), // Here 14 is an average I currently found online
        ]);

      if (gasReadingError || gasUsageError)
        return console.log("Error inserting data into the database");

      window.location.href = "/home";
    },
  },
};
</script>

<template>
  <form @submit="handleInsertReading">
    <label for="lastReading">Last Reading entered</label>
    <input
      type="number"
      id="lastReading"
      name="lastReading"
      v-model="lastReading"
      disabled
    />

    <label for="currentReading">New Reading</label>
    <input
      type="number"
      name="currentReading"
      id="currentReading"
      v-model="currentReading"
      min="0"
    />

    <button type="submit">Add Reading</button>
  </form>
</template>
