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
};
</script>

<template>
  <ResponsiveLineChart
    :data="effectiveDamageChart"
    :options="effectiveDamageChartOptions"
  />
</template>
