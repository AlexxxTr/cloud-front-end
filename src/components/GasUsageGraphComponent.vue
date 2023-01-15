<script lang="ts">
import { type ChartData, type ChartConfiguration, Chart } from "chart.js/auto";
import { ref } from "vue";
export default {
  setup() {
    const gasUsageCanvas = ref<HTMLCanvasElement>();
    const data: ChartData = {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: "lol",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          tension: 0.1,
          borderColor: "green",
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
