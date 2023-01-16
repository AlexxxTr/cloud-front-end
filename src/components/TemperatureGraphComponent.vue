<script lang="ts">
import type { Temperatures } from "@/lib/types/propTypes";
import { type ChartData, type ChartConfiguration, Chart } from "chart.js/auto";
import { ref } from "vue";

export default {
  props: {
    temperatures: Array<Temperatures>,
  },
  setup(props) {
    const temperatureCanvas = ref<HTMLCanvasElement>();

    const data: ChartData = {
      labels: props.temperatures?.map((reading) =>
        new Date(reading.created_at!).toDateString()
      ),
      datasets: [
        {
          label: "Your inserted gas reading",
          data: props.temperatures?.map((reading) => reading.temperature!)!,
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

    return { config, temperatureCanvas };
  },
  mounted() {
    new Chart(this.temperatureCanvas!, this.config);
  },
};
</script>

<template>
  <div>
    <canvas ref="temperatureCanvas"></canvas>
  </div>
</template>
