<script setup lang="ts">
import type { ChartOptions } from "chart.js";
const { tankedHitsChart } = useArmorGraph();
const characterStore = useCharacterStore();

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
          `${dataset.label}: You can tank ${raw} ${raw === "1" ? "hit" : "hits"} at ${label} damage (${characterStore.health} starting health).`,
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
