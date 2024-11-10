<script setup lang="ts">
import { Line } from "vue-chartjs";
import type { ChartOptions, ChartData } from "chart.js";

const props = defineProps<{
  data: ChartData<"line">;
  options: ChartOptions<"line">;
}>();

const finalData = computed(() => {
  const datasets = props.data.datasets.map((ds) => ({
    ...ds,
    pointRadius: 5,
    pointHoverRadius: 7,
    backgroundColor: ds.borderColor,
  }));

  return { ...props.data, datasets };
});

const finalChartOptions = computed<ChartOptions<"line">>(() => ({
  ...props.options,
  maintainAspectRatio: true,
  aspectRatio: Math.max(
    (Math.min(window.innerWidth, 1536) / window.innerHeight) * 1.25,
    1,
  ),
  responsive: true,
  plugins: {
    ...props.options.plugins,
    legend: {
      display: false,
    },
  },
}));
</script>

<template>
  <Line :data="finalData" :options="finalChartOptions" />
  <div class="flex gap-4 justify-center flex-wrap">
    <span
      v-for="dataset of props.data.datasets"
      :style="{ color: dataset.borderColor }"
    >
      {{ dataset.label }}
    </span>
  </div>
</template>
