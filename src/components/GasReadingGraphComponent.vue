<script lang="ts">
import { type ChartData, type ChartConfiguration, Chart } from "chart.js/auto";
import type { GasReading } from "@/lib/types/propTypes";
import { ref } from "vue";
export default {
  props: {
    gasReadings: Array<GasReading>,
  },
  setup(props) {
    const gasReadingCanvas = ref<HTMLCanvasElement>();

    const data: ChartData = {
      labels: props.gasReadings?.map((reading) =>
        new Date(reading.created_at!).toDateString()
      ),
      datasets: [
        {
          label: "Your inserted gas reading",
          data: props.gasReadings?.map((reading) => reading.cubic_meters!)!,
          fill: false,
          tension: 0.1,
          borderColor: "blue",
          drawActiveElementsOnTop: true,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {
        interaction: {
          intersect: false,
        },
      },
    };

    return { config, gasReadingCanvas };
  },
  mounted() {
    new Chart(this.gasReadingCanvas!, this.config);
  },
};
</script>

<template>
  <div>
    <canvas ref="gasReadingCanvas"></canvas>
  </div>
</template>
