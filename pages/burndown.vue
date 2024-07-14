<script setup lang="ts">
import { Line } from "vue-chartjs";
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
      title: {
        display: true,
        text: "Health left",
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
    <Line :data="burndownChart" :options="burndownChartOptions" />
  </div>
</template>
