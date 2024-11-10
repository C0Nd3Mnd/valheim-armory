<script setup lang="ts">
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
  <ResponsiveLineChart
    :data="tankedHitsChart"
    :options="tankedHitsChartOptions"
  />
</template>
