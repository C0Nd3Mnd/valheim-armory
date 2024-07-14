<script setup lang="ts">
import { Line } from "vue-chartjs";
import type { ChartOptions } from "chart.js";
const { tankedHitsChart } = useArmorGraph();

const tankedHitsChartOptions: ChartOptions<"line"> = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Raw damage taken",
      },
    },
    y: {
      title: {
        display: true,
        text: "Hits tanked",
      },
    },
  },
};
</script>

<template>
  <Line :data="tankedHitsChart" :options="tankedHitsChartOptions" />
</template>
