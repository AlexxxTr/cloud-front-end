<script lang="ts">
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
      const { data, error } = await supabase
        .from("gas_readings")
        .insert({ cubic_meters: this.currentReading }, { count: "exact" });
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
