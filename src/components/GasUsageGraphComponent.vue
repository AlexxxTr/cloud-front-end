<script lang="ts">
import { type ChartData, type ChartConfiguration, Chart } from "chart.js";
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const canvas = ref<HTMLCanvasElement | null>(null);
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

    watchEffect(() => {
      if (canvas.value !== null) new Chart(canvas.value, config);
    });

    return { canvas };
  },
};
</script>

<template>
  <div>
    <canvas class="gasUsageChart" ref="canvas"></canvas>
  </div>
</template>
