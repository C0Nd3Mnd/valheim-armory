<script setup lang="ts">
import type { ChartOptions } from "chart.js";
const { effectiveDamageChart } = useArmorGraph();

const effectiveDamageChartOptions: ChartOptions<"line"> = {
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
        text: "Effective damage taken",
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: () => "",
        label: ({ label, raw, dataset }) =>
          `${dataset.label}: ${label} damage reduced to ${raw} (~${Math.round((raw / label) * 100)}% damage taken)`,
      },
    },
  },
};
</script>

<template>
  <ResponsiveLineChart
    :data="effectiveDamageChart"
    :options="effectiveDamageChartOptions"
  />
</template>
