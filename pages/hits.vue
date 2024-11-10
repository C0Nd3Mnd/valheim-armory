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
  plugins: {
    tooltip: {
      callbacks: {
        title: () => "",
        label: ({ label, raw, dataset }) =>
          `${dataset.label}: You can tank ${raw} ${raw === "1" ? "hit" : "hits"} hits at ${label} damage.`,
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
