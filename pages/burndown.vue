<script setup lang="ts">
import type { ChartOptions } from "chart.js";

const { burndownChart } = useBurndownGraph();
const burndownStore = useBurndownStore();

const burndownChartOptions: ChartOptions<"line"> = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Hits tanked",
      },
    },
    y: {
      min: 0,
      title: {
        display: true,
        text: "Health remaining",
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: () => "",
        label: ({ label, raw, dataset }) =>
          `${dataset.label}: After ${label} ${label === "1" ? "hit" : "hits"} you have ${raw} health left.`,
      },
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <UFormGroup label="Damage per hit">
      <UInput v-model="burndownStore.damagePerHit" type="number" />
    </UFormGroup>
    <ResponsiveLineChart
      :data="burndownChart"
      :options="burndownChartOptions"
    />
  </div>
</template>
