<script lang="ts">
import { type ChartData, type ChartConfiguration, Chart } from "chart.js/auto";
import { ref } from "vue";
import type { GasUsage } from "@/lib/types/propTypes";

export default {
  props: {
    gasUsage: Array<GasUsage>,
  },
  setup(props) {
    const gasUsageCanvas = ref<HTMLCanvasElement>();

    const data: ChartData = {
      labels: props.gasUsage?.map((usage) =>
        new Date(usage.created_at!).toDateString()
      ),
      datasets: [
        {
          label: "Gas Usage in kWh",
          data: props.gasUsage?.map((usage) => usage.kWh!)!,
          fill: false,
          tension: 0.1,
          borderColor: "green",
        },
        {
          label: "Gas Cost",
          data: props.gasUsage?.map((usage) => usage.cost!)!,
          fill: false,
          tension: 0.1,
          borderColor: "red",
        },
      ],
    };
    const config: ChartConfiguration = {
      type: "line",
      data,
    };

    return { config, gasUsageCanvas };
  },
  mounted() {
    new Chart(this.gasUsageCanvas!, this.config);
  },
};
</script>

<template>
  <div>
    <canvas ref="gasUsageCanvas"></canvas>
  </div>
</template>
